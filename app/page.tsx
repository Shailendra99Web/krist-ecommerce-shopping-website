"use client";

import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import ProductCard from "@/components/cards/CardProduct";
import Carousel from "@/components/carousel/page";
import { useAppDispatch } from "@/redux/hooks";
import DealOfTheMonthCountdown from "@/sections/dealsOfTheMonth/page";
import Footer from "@/sections/footer/page";
import Navbar from "@/sections/navbar/page";
import OurServices from "@/sections/ourServices/page";
import { apiFetchAllProducts } from "@/utils/GlobalApi";
import { ArrowRight, Instagram } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Home() {
  const router = useRouter();
  const [allProducts, setAllProducts] = useState<any[]>([]); // All Products.
  // const [totalPages, settotalPages] = useState(0); // Total Pages of Paginations.
  // const [totalProductsViewingCounts, setTotalProductsViewingCounts] = useState(0); // Total products in view.
  // const [totalProductsCounts, setTotalProductsCounts] = useState(0); // Total products counts (including not viewable).

  const CarouselItemsCategories = [
    {
      bgColor: "bg-red-500",
      categoryName: "Casual Wear",
      imageUrl:
        "https://res.cloudinary.com/dfaklq64w/image/upload/v1763557481/cate1_e9lsg9.jpg",
      onClick: () => router.push("/shop/allProducts")
    },
    {
      bgColor: "bg-yellow-500",
      categoryName: "Western Wear",
      imageUrl:
        "https://res.cloudinary.com/dfaklq64w/image/upload/v1763557477/cate2_hpfrbr.jpg",
      onClick: () => router.push("/shop/allProducts")
    },
    {
      bgColor: "bg-purple-500",
      categoryName: "Ethnic Wear",
      imageUrl:
        "https://res.cloudinary.com/dfaklq64w/image/upload/v1763558607/cate3_d1k9gs.jpg",
      onClick: () => router.push("/shop/allProducts")
    },
    {
      bgColor: "bg-black",
      categoryName: "Kids",
      imageUrl:
        "https://res.cloudinary.com/dfaklq64w/image/upload/v1763557477/cate4_rjbkgw.jpg",
      onClick: () => router.push("/shop/allProducts")
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

  const instagramStoriesImages = [
    "/images/cat1.jpg",
    "/images/cat2.jpg",
    "/images/cat3.jpg",
    "https://res.cloudinary.com/dfaklq64w/image/upload/v1762006548/signup-boy_qsmwsj.jpg"
  ];

  async function fetchAllProducts(skip = 0, limit = 8) {
    try {
      const data = await apiFetchAllProducts({ skip: skip, limit: limit });
      if (data) {
        // setFetchedDataAllProducts(data);
        if (data != undefined && data.totalCount > 6) {
          // const calTotalPages = Math.ceil(data.totalCount / 6);
          // settotalPages(calTotalPages); // Set total pages counts.
          // setTotalProductsCounts(data.totalCount); // Set total products.
          // setTotalProductsViewingCounts(data.count); // Set total viewing products.
          setAllProducts([...data.data]); // Set all products.
        }
        return data;
      }
    } catch (error) {
      console.log("Fetch error :", error);
    }
  }

  // async function fetchUserCart() {
  //   console.log("fetchUserCart..");
  //   try {
  //     const data = await apiFetchCart();
  //     console.log("data", data);
  //     dispatch(
  //       addCart({
  //         cartItems: data.data.cartItems,
  //         totalAmount: data.totalAmount
  //       })
  //     );
  //   } catch (error) {
  //     console.log("Fetch error :", error);
  //   }
  // }

  useEffect(() => {
    let ignore = false;
    (async () => {
      fetchAllProducts();
      // fetchUserCart();
    })();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="relative m-2.5">
          <img
            src="/images/homepage.jpg"
            alt="homepage_poster"
            className="mx-auto h-[885px]"
          />
          <div className="absolute top-1/2 left-1/4 flex -translate-x-1/4 -translate-y-1/2 flex-col gap-[38px]">
            <div className="text-4xl">Western Exclusive</div>
            <div className="text-5xl font-bold">Women's Collection</div>
            <div className="text-2xl">UPTO 40% OFF</div>
            <ButtonWithBlackBg
              btntext="Shop Now"
              onClick={() => {
                router.push("/shop/allProducts");
              }}
              className="!w-[157px] gap-3"
              icon={<ArrowRight size={17} />}
            />
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-primary mx-auto my-[100px]">
          <Carousel
            title="Shop by Categories"
            carouselItemTemplateType="portrait"
            carouselItemsData={CarouselItemsCategories}
          />
        </section>

        {/* Our Bestseller */}
        <div className="max-w-primary mx-auto my-[100px]">
          <section className="flex flex-wrap items-center justify-between">
            <div className="title mx-auto mb-13 text-4xl">Our Bestsellers</div>
            <div className="flex w-full flex-wrap items-center gap-7.5">
              {/* Items */}
              {allProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        </div>

        {/* Deals of the Month */}
        <DealOfTheMonthCountdown />

        {/* What our Customer Say's */}
        <section className="bg-gray-100">
          <div className="max-w-primary mx-auto my-[100px] bg-gray-100 py-10">
            <Carousel
              title="What our Customer say's"
              // carouselItems={CarouselItemsTestimonials}
              carouselItemTemplateType="landscape"
              carouselItemsData={CarouselItemsTestimonials}
            />
          </div>
        </section>

        {/* Our Instagram Stories */}
        <section className="max-w-primary mx-auto my-[100px] flex flex-col gap-15.5">
          <div className="mx-auto text-4xl">Our Instagram Stories</div>
          {/* gap-7 */}
          <div className="flex-center justify-between">
            {instagramStoriesImages.map((imageSrc, i) => (
              <Link key={i} href={""} className="group relative cursor-pointer">
                <img
                  key={imageSrc}
                  src={imageSrc}
                  alt=""
                  className="size-66 rounded-sm object-cover"
                />
                <div className="invisible absolute inset-0 size-66 transition-all group-hover:visible group-hover:bg-black/30">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3">
                    <Instagram />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Services / Perks */}
        <OurServices />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
