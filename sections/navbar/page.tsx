"use client";
import LinkText from "@/components/linkText/page";
import MegaMenu from "./MegaMenu";
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  UserRound
} from "lucide-react";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import Logo from "@/components/logo/page";
import ButtonRoundWithIcon from "@/components/buttons/ButtonRoundWithIcon";
import MiniCart from "@/components/minicart/page";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { loginReducer } from "@/redux/features/auth/authSlice";
import { apiLogout, apiUserInfo } from "@/utils/GlobalApi";
import { modal_OneButtonReducer } from "@/redux/features/modals/modalsSlice";
import Link from "next/link";
import ButtonRoundWithIcon2 from "@/components/buttons/ButtonRoundWithIcon2";

export default function Navbar() {
  const NavItems = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "/shop/allProducts",
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

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const authState = useAppSelector((state: any) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const [userProfilePictureImageUrl, SetUserProfilePictureImageUrl] = useState(
    "https://res.cloudinary.com/dfaklq64w/image/upload/v1763646295/profile_ztslti.png"
  );

  async function fetchUserData() {
    const res = await apiUserInfo();
    if (res.error && res.error === "User not found!") {
      router.push("/auth/signup");
      return null;
    }
    const userProfilePic = res.data.imageUrlProfilePicture;
    if (userProfilePic)
      SetUserProfilePictureImageUrl(res.data.imageUrlProfilePicture);
    if (res.success) {
      dispatch(
        loginReducer({
          isLoggedIn: true,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          addresses: res.data.addresses,
          imageUrlProfilePicture: userProfilePic
        })
      );
    }
  }

  useEffect(() => {
    function handleOnOutsideClick(e: MouseEvent) {
      const userCart = document.querySelector("#userCart");
      if (userCart && !userCart.contains(e.target as Node)) {
        setIsCartOpen(false);
      }
    }
    window.addEventListener("click", handleOnOutsideClick);
    return () => {
      window.removeEventListener("click", handleOnOutsideClick);
    };
  }, []);
  useEffect(() => {
    if (localStorage.getItem("krist-shopping-website-token")) {
      fetchUserData();
    }
  }, []);
  useEffect(() => {
    if (authState) {
      setIsLoggedIn(authState.isLoggedIn);
    }
  }, [authState.isLoggedIn]);
  // Function Logout
  async function logout() {
    const res = await apiLogout();
    console.log(res);
    localStorage.removeItem("krist-shopping-website-token");
    dispatch(
      loginReducer({
        isLoggedIn: false,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        addresses: undefined
      })
    );

    dispatch(
      modal_OneButtonReducer({
        isOpen: true,
        heading: "Logout Successfully",
        infoText: "You have been logged out successfully",
        btn: {
          text: "Go to Login Page",
          url: "/auth/login"
        }
      })
    );
    setTimeout(() => {
      router.push("/auth/login");
      dispatch(
        modal_OneButtonReducer({
          isOpen: false,
          heading: "Logout Successfully",
          infoText: "You have been logged out successfully",
          btn: {
            text: "Go to Login Page",
            url: "/auth/login"
          }
        })
      );
    }, 2000);
  }

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
        <ButtonRoundWithIcon icon={<Search />} />
        <ButtonRoundWithIcon icon={<Heart />} />
        <div className="relative" id="userCart">
          <ButtonRoundWithIcon
            icon={<ShoppingBag />}
            onClick={() => setIsCartOpen(!isCartOpen)}
          />
          {isCartOpen && (
            <div className="absolute top-full right-[calc(100%-40px)] z-10 shadow-xl">
              <MiniCart />
            </div>
          )}
        </div>
        {isLoggedIn ? (
          // <ButtonWithBlackBg
          //   btntext="Logout"
          //   onClick={(event: React.MouseEvent) => {
          //     // router.push("/auth/login");
          //     logout();
          //   }}
          //   type="button"
          //   className="h-[51px] !w-[99px]"
          // />
          <div className="group relative">
            <div className="cursor-pointer">
              <img
                src={userProfilePictureImageUrl}
                alt=""
                className="size-12.5 rounded-full object-cover"
              />
            </div>
            <div className="absolute top-full right-0 w-32 hidden group-hover:block z-10">
              <ButtonWithBlackBg
                onClick={() => {
                  router.push("/myprofile");
                }}
                btntext="My Profile"
                className="text-nowrap rounded-none"
                btnColorType="gray"
              ></ButtonWithBlackBg>
              <ButtonWithBlackBg
                btntext="Logout"
                className="text-nowrap rounded-none"
                btnColorType="gray"
                onClick={() => {
                  logout();
                }}
              ></ButtonWithBlackBg>
            </div>
          </div>
        ) : (
          <ButtonWithBlackBg
            btntext="Login"
            onClick={(event: React.MouseEvent) => {
              router.push("/auth/login");
            }}
            type="button"
            className="h-[51px] !w-[99px]"
          />
        )}
      </div>
    </nav>
  );
}
