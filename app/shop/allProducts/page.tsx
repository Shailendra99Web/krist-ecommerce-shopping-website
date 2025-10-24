"use client";
import Breadcrumb from "@/components/breadcrumb/page";
import OptionsSetbyCheckListPlus from "@/components/ExpandableOptions/options/OptionsSetbyCheckListPlus";
import OptionsSetbyCheckListColor from "@/components/ExpandableOptions/options/OptionsSetbyCheckListColorFoundItems";
import OptionsSetbySlider from "@/components/ExpandableOptions/options/OptionsSetbySlider";
import ExpandableOptions from "@/components/ExpandableOptions/page";
import Header4Bold from "@/components/headers/Header4Bold";
import Navbar from "@/sections/navbar/page";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Facebook,
  Grid2X2,
  Instagram,
  List,
  Mail,
  MapPin,
  MoveLeft,
  PhoneCall,
  Plus,
  Square,
  SquareCheck,
  Twitter
} from "lucide-react";
import OptionsSetbyCheckListFoundItemsIndicator from "@/components/ExpandableOptions/options/OptionsSetbyCheckListFoundItems";
import Bestseller from "@/sections/bestseller/page";
import ProductCard from "@/components/cards/page";
import React from "react";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import ButtonWhiteWithBlackBorder from "@/components/buttons/ButtonWhiteWithBlackBorder";
import Logo from "@/components/logo/page";
import FooterNavListBlock from "@/sections/footerNavListBlock/page";
import FooterItemsHeader from "@/components/headers/footerItemsHeader/page";
import OurServices from "@/sections/ourServices/page";

function AllProducts() {
  const breadcrumbData = ["Shop", "All Products"];
  const Products = [
    {
      id: 1,
      title: "Roadstar",
      description: "Printed Cotton T-Shirt",
      price: 38.0,
      realPrice: 40.0,
      imageUrl: "/images/tshirt.jpg"
    },
    {
      id: 2,
      title: "Allen Solly ",
      description: "Womem Textured Handheld Bag",
      price: 80.0,
      realPrice: 100.0,
      imageUrl: "/images/bag.jpg"
    },
    {
      id: 3,
      title: "Louis Philippe Sport",
      description: "Polo Collar T-Shirt",
      price: 50.0,
      realPrice: 55.0,
      imageUrl: "/images/fulltshirt.jpg"
    },
    {
      id: 4,
      title: "Adidas",
      description: "Men adi-dash Running Shoes",
      price: 60.0,
      realPrice: 75.0,
      imageUrl: "/images/adidas.jpg"
    },
    {
      id: 5,
      title: "Trendyol",
      description: "Floral Embroidered Maxi Dress",
      price: 35.0,
      realPrice: 45.0,
      imageUrl: "/images/maxi.jpg"
    },
    {
      id: 6,
      title: "YK Disney",
      description: "Girls Pink Moana Printed Dress",
      price: 80.0,
      realPrice: 100.0,
      imageUrl: "/images/girl_dress.jpg"
    },
    {
      id: 7,
      title: "US Polo",
      description: "Tailored Cotton Casual Shirt",
      price: 40.0,
      realPrice: 50.0,
      imageUrl: "/images/shirt.jpg"
    },
    {
      id: 8,
      title: "Zyla",
      description: "Women Sandals",
      price: 35.0,
      realPrice: 40.0,
      imageUrl: "/images/sandals.jpg"
    }
  ];

  const TotalPages = 5;

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* my-[100px] */}
      <div className="mx-[150px] pt-6">
        <Breadcrumb breadcrumbData={breadcrumbData} />

        <div className="flex justify-between gap-x-7.5 pt-12.5">
          <aside className="flex w-3/12 flex-col">
            <ExpandableOptions
              title="Product Categories"
              expandableOptions={<OptionsSetbyCheckListPlus />}
            />
            <ExpandableOptions
              title="Filter by Price"
              expandableOptions={<OptionsSetbySlider title="Price: $0 - $2000" />}
            />
            <ExpandableOptions
              title="Filter by Color"
              expandableOptions={<OptionsSetbyCheckListColor />}
            />
            <ExpandableOptions
              title="Filter by Color"
              expandableOptions={<OptionsSetbyCheckListFoundItemsIndicator />}
            />
          </aside>

          {/* Main */}
          <main className="w-3/4">
            <section className="flex flex-wrap items-center justify-between gap-y-7.5">
              <div className="flex w-full justify-between">
                <div className="flex gap-5.5">
                  <Grid2X2 className="size-5.5" />
                  <List className="size-5.5" />
                  <div>Showing 1-16 of 72 results</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div>Sort by latest</div>
                  <ChevronDown className="size-4.5" />
                </div>
              </div>
              <div className="flex w-full flex-wrap justify-between">
                {/* Items */}
                {Products.map((product, index) => (
                  <ProductCard
                    key={"shop-allProduct-" + index}
                    product={product}
                  />
                ))}
              </div>
            </section>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-5 py-5">
              <ArrowLeft className="size-3.5" />
              <div className="flex items-center justify-end gap-2">
                {Array.from({ length: TotalPages }, (_, i) => (
                  <ButtonWhiteWithBlackBorder
                    key={i}
                    btnColorType="white"
                    btntext={String(i + 1)}
                    className="!size-10"
                  />
                ))}
              </div>
              <ArrowRight className="size-3.5" />
            </div>
          </main>
        </div>
      </div>

      {/* Our Services / Perks */}
      <OurServices />
      {/* Footer */}
      <footer className="bg-primary-500 text-white">
        <div className="mx-[150px] mt-[100px] flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-between py-13.5">
            <div className="w-65.5 space-y-10">
              <Logo src={"/icons/logo-white.svg"} />
              <div className="flex flex-col items-start gap-6">
                <div className="flex-center gap-3">
                  <PhoneCall className="size-6" />
                  <div>(704) 555-0127</div>
                </div>
                <div className="flex-center gap-3">
                  <Mail className="size-6" />
                  <div>krist@example.com</div>
                </div>
                <div className="flex-center gap-3">
                  <MapPin className="h-6 min-w-6" />
                  <div>3891 Ranchview Dr.Richardson, California 62639</div>
                </div>
              </div>
            </div>
            <FooterNavListBlock
              title={"Information"}
              navItems={[
                "My Account",
                "Login",
                "My Cart",
                "My Wishlist",
                "Chechout"
              ]}
            />
            <FooterNavListBlock
              title={"Service"}
              navItems={[
                "About Us",
                "Careers",
                "Delivery Information",
                "Privary Policy",
                "Terms & Conditions"
              ]}
            />
            <div className="w-77">
              <FooterItemsHeader btnText="Subscribe" />
              <div>
                Enter your email below to be the first to know about new
                collections and product launches.
              </div>
              <button className="mt-5 flex w-full items-center justify-between rounded-xl border-2 border-white p-3.5">
                <div className="flex items-center gap-2.5">
                  <Mail className="size-6" />
                  <div>Your Email</div>
                </div>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Bottom copyright section*/}
          <div className="flex w-full items-center justify-between border-t-1 border-gray-800 p-4.5">
            <div></div>
            <div>&copy; 2023 Krist. All rights reserved.</div>
            <div className="flex gap-6.5">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AllProducts;
