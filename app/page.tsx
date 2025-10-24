"use client";

import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import Carousel from "@/components/carousel/page";
import FooterItemsHeader from "@/components/headers/footerItemsHeader/page";
import LinkText from "@/components/linkText/page";
import Logo from "@/components/logo/page";
import Bestseller from "@/sections/bestseller/page";
import FooterNavListBlock from "@/sections/footerNavListBlock/page";
import MegaMenu from "@/sections/navbar/MegaMenu";
import Navbar from "@/sections/navbar/page";
import OurServices from "@/sections/ourServices/page";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Facebook,
  Headphones,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Package,
  PhoneCall,
  Search,
  ShoppingBag,
  Twitter
} from "lucide-react";
import React, { useState } from "react";

function Home() {
  const [dealOfTheMonthCountdown, setDealOfTheMonthCountdown] = useState({
    days: 120,
    hours: 18,
    minutes: 15,
    seconds: 10
  });

  const CarouselItemsCategories = [
    {
      bgColor: "bg-red-500",
      label: "Dresses",
      imageUrl: "/images/categories/dresses.png"
    },
    {
      bgColor: "bg-yellow-500",
      label: "Tops",
      imageUrl: "/images/categories/tops.png"
    },
    {
      bgColor: "bg-purple-500",
      label: "Jeans",
      imageUrl: "/images/categories/jeans.png"
    },
    {
      bgColor: "bg-black",
      label: "Shoes",
      imageUrl: "/images/categories/shoes.png"
    },
    {
      bgColor: "bg-sky-500",
      label: "Bags",
      imageUrl: "/images/categories/bags.png"
    },
    {
      bgColor: "bg-gray-500",
      label: "Accessories",
      imageUrl: "/images/categories/accessories.png"
    }
  ];

  const CarouselItemsTestimonials = [
    {
      rating: 5,
      comment:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem lpsum",
      image: "/images/person1.jpg",
      name: "Leslie Alexander",
      profession: "Model"
    },
    {
      rating: 4,
      comment:
        "Absolutely loved the quality and fit! Will definitely recommend to others.",
      image: "/images/person2.jpg",
      name: "Courtney Henry",
      profession: "Fashion Blogger"
    },
    {
      rating: 5,
      comment:
        "Amazing customer service and an easy-to-use website. My new go-to store.",
      image: "/images/person3.jpg",
      name: "Darlene Robertson",
      profession: "Makeup Artist"
    },
    {
      rating: 4,
      comment:
        "Great deals and unique styles every time I visit. Shipping is fast too!",
      image: "/images/person2.jpg",
      name: "Jenny Wilson",
      profession: "Designer"
    },
    {
      rating: 5,
      comment:
        "The products exceeded my expectations and the sizes are perfect!",
      image: "/images/person1.jpg",
      name: "Wade Warren",
      profession: "Photographer"
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="relative m-2.5">
          <img
            src="/images/homepage.png"
            alt="homepage_poster"
            className="mx-auto h-[885px]"
          />
          <div className="absolute top-1/2 left-1/4 flex -translate-x-1/4 -translate-y-1/2 flex-col gap-[38px]">
            <div className="text-4xl">Western Exclusive</div>
            <div className="text-5xl font-bold">Women's Collection</div>
            <div className="text-2xl">UPTO 40% OFF</div>
            <ButtonWithBlackBg
              btntext="Shop Now"
              onClick={() => {}}
              className="!w-[157px] gap-3"
              icon={<ArrowRight size={17} />}
            />
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="mx-[150px] my-[100px]">
          <Carousel
            title="Shop by Categories"
            carouselItemTemplateType="categories"
            carouselItemsData={CarouselItemsCategories}
          />
        </section>
        {/* Our Bestseller */}
        <div className="mx-[150px] my-[100px]">
          <Bestseller />
        </div>
        {/* Deals of the Months */}
        <section className="flex-center gap-8.5">
          <div className="flex w-138 flex-col gap-7">
            <div className="month-deal-title text-4xl">Deals of the Month</div>
            <div className="month-deal-description">
              It is the long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that is has a more-or-less normal
              distribution of letters
            </div>
            <div className="month-deal-countdown flex gap-5">
              <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
                <div className="text-3xl font-bold">
                  {dealOfTheMonthCountdown.days}
                </div>
                <div className="text-xl">Days</div>
              </div>
              <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
                <div className="text-3xl font-bold">
                  {dealOfTheMonthCountdown.hours}
                </div>
                <div className="text-xl">Hours</div>
              </div>
              <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
                <div className="text-3xl font-bold">
                  {dealOfTheMonthCountdown.minutes}
                </div>
                <div className="text-xl">Mins</div>
              </div>
              <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
                <div className="text-3xl font-bold">
                  {dealOfTheMonthCountdown.seconds}
                </div>
                <div className="text-xl">Secs</div>
              </div>
            </div>
            <div className="month-deal-button">
              <ButtonWithBlackBg
                btntext="View All Products"
                className="!w-49 gap-3"
                icon={<ArrowRight size={17} />}
              />
            </div>
          </div>
          <img
            src="/images/deal_of_the_month.jpg"
            alt="deal_of_the_month"
            className="h-125 w-138 rounded-sm object-cover object-top"
          />
        </section>
        {/* What our Customer Say's */}
        <section className="mx-[150px] my-[100px]">
          <Carousel
            title="What our Customer say's"
            // carouselItems={CarouselItemsTestimonials}
            carouselItemTemplateType="testimonial"
            carouselItemsData={CarouselItemsTestimonials}
          />
        </section>
        {/* Our Instagram Stories */}
        <section className="mx-[150px] my-[100px] flex flex-col gap-15.5">
          <div className="mx-auto text-4xl">Our Instagram Stories</div>
          {/* gap-7 */}
          <div className="flex-center justify-between">
            <img
              src="/images/cat1.jpg"
              alt=""
              className="size-66 rounded-sm object-cover"
            />
            <img
              src="/images/cat2.jpg"
              alt=""
              className="size-66 rounded-sm object-cover"
            />
            <img
              src="/images/cat3.jpg"
              alt=""
              className="size-66 rounded-sm object-cover"
            />
            <img
              src="/images/cat1.jpg"
              alt=""
              className="size-66 rounded-sm object-cover"
            />
          </div>
        </section>
        {/* Our Services / Perks */}
      <OurServices/>
      </main>

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

export default Home;
