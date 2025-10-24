import LinkText from "@/components/linkText/page";
import MegaMenu from "./MegaMenu";
import { ChevronDown, Heart, Search, ShoppingBag } from "lucide-react";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import Logo from "@/components/logo/page";
import ButtonRoundWithIcon from "@/components/buttons/ButtonRoundWithIcon";

export default function Navbar() {
  const NavItems = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "/shop",
      text: "Shop",
      icon: <ChevronDown />,
      submenu: [
        [
          {
            title: "Men",
            list: [
              "T-Shirt",
              "Casual Shirts",
              "Formal Shirts",
              "Jackets",
              "Blazers & Coats"
            ]
          },
          {
            title: "Indian & Festive Wear",
            list: ["Kurtas & Kurta Sets", "Sherwanis"]
          }
        ],
        [
          {
            title: "Women",
            list: [
              "Kurtas & Suits",
              "Sarees",
              "Ethnic Wear",
              "Lehenga Cholis",
              "Jackets"
            ]
          },
          {
            title: "Western Wear",
            list: ["Dresses", "Jumpsuits"]
          }
        ],
        [
          {
            title: "Footwear",
            list: [
              "Flats",
              "Casual Shoes",
              "Heels",
              "Boots",
              "Sports Shoes & Floaters"
            ]
          },
          {
            title: "Product Features",
            list: ["360 Product Viewer", "Product with Video"]
          }
        ],
        [
          {
            title: "Kids",
            list: [
              "T-Shirt",
              "Shirts",
              "Jeans",
              "Trousers",
              "Party Wear",
              "Innerwear & Thermal",
              "Track Pants",
              "Value Pack"
            ]
          }
        ]
      ]
    },
    {
      href: "/our-story",
      text: "Our Story"
    },
    {
      href: "/contact-us",
      text: "Contact Us"
    }
  ];

  return (
    <nav className="flex items-center justify-between px-[99px] py-6">
      <Logo />
      <ul className="flex gap-9">
        {NavItems.map((item: any, index) => (
          <li key={index} className="group">
            <LinkText
              href={item.href}
              text={item.text}
              className="text-base"
              icon={item.icon}
            />

            {item.submenu ? (
              // <div className="hidden group-hover:block">
              <MegaMenu itemsData={item.submenu} />
            ) : // </div>
            null}
          </li>
        ))}
      </ul>
      <div className="flex-center gap-5">
        {/* <Search className="hover:fill-primary-500 hover:bg-primary-500 rounded-full p-1.5 hover:text-white size-9" /> */}
        <ButtonRoundWithIcon icon={<Search/>}/>
        <ButtonRoundWithIcon icon={<Heart/>}/>
        <ButtonRoundWithIcon icon={<ShoppingBag/>}/>
        <ButtonWithBlackBg
          btntext="Login"
          onClick={(event: React.MouseEvent) => {}}
          type="button"
          className="h-[51px] !w-[99px]"
        />
      </div>
    </nav>
  );
}
