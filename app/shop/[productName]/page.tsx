"use client";
import Breadcrumb from "@/components/breadcrumb/page";
import Header4Bold from "@/components/headers/Header4Bold";
import Navbar from "@/sections/navbar/page";
import {
  ArrowRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Minus,
  PhoneCall,
  Plus,
  Star,
  Twitter
} from "lucide-react";
import ProductCard from "@/components/cards/CardProduct";
import React, { useEffect, useState } from "react";
import Logo from "@/components/logo/page";
import FooterNavListBlock from "@/sections/footerNavListBlock/page";
import FooterItemsHeader from "@/components/headers/footerItemsHeader/page";
import OurServices from "@/sections/ourServices/page";
import Header1 from "@/components/headers/h1/page";
import {
  apiAddCartItem,
  apiFetchAllProducts,
  apiFetchProduct
} from "@/utils/GlobalApi";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import ButtonWhiteWithBlackBorder from "@/components/buttons/ButtonWhiteWithBlackBorder";
import { useAppDispatch } from "@/redux/hooks";
import { addCart } from "@/redux/features/cart/cartSlice";
import SlideAccordion from "@/components/slidingAccordion/page";
import Footer from "@/sections/footer/page";

function ProductPage({ params }: { params: Promise<{ productName: string }> }) {
  const [productName, setProductName] = useState<string>("");
  const [productData, setProductData] = useState<productDataType>();
  const [allProductsData, setAllProductsData] = useState<any>();
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  async function addToCart(productId: string, quantity: number) {
    // For backend
    const addingToDbResult = await apiAddCartItem({
      // product: product._id,
      product: productId,
      quantity: quantity
    });

    // For frontend
    dispatch(
      addCart({
        cartItems: addingToDbResult.data.cartItems,
        totalAmount: addingToDbResult.data.totalAmount
          ? addingToDbResult.data.totalAmount
          : 0
      })
    );
    // dispatch(addCartItem({ product: product._id, quantity: 1 }));
  }

  async function fetchProduct(productName: string) {
    try {
      const data = await apiFetchProduct({ productName }); // Fetch all products.
      if (data) {
        // setFetchedDataAllProducts(data);
        if (data != undefined) {
          setProductData(data.data[0]); // Set all products.
        }
        return data;
      }
    } catch (error) {
    }
  }

  async function fetchAllProducts(category = "", skip = 0, limit = 4) {
    try {
      const data = await apiFetchAllProducts({
        skip: skip,
        limit: limit
      });
      if (data) {
        // setFetchedDataAllProducts(data);
        if (data != undefined) {
          // const calTotalPages = Math.ceil(data.totalCount / 6);
          // settotalPages(calTotalPages); // Set total pages counts.
          // setTotalProductsCounts(data.totalCount); // Set total products.
          // setTotalProductsViewingCounts(data.count); // Set total viewing products.
          setAllProductsData([...data.data]); // Set all products.
        }
        return data;
      }
    } catch (error) {
      console.log("Fetch error :", error);
    }
  }

  useEffect(() => {
    async function fetchProductName() {
      const { productName } = await params;
      setProductName(decodeURIComponent(productName));
    }
    fetchProductName();
  }, [params]);

  useEffect(() => {
    if (productName.length > 0) {
      fetchProduct(productName);
      fetchAllProducts();
    }
  }, [productName]);

  useEffect(() => {
    if (productData) {
      // fetchAllProducts(productData.category);
    }
  }, [productData]);

  const breadcrumbData = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: productName, url: `/shop/${encodeURIComponent(productName)}` }
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* my-[100px] */}
      <div className="max-w-primary mx-auto pt-6">
        <Breadcrumb breadcrumbData={breadcrumbData} />

        {/* Main */}
        {productData && (
          <main>
            <div className="flex pt-12.5">
              {/* Left Side */}
              <div className="flex-center w-1/2">
                <img src={productData.imageUrl} alt="" className="rounded-lg" />
              </div>
              {/* Right Side */}
              <div className="relative flex w-1/2 flex-col gap-y-4">
                {productData ? (
                  <div className="absolute top-0 right-0 w-max rounded-sm bg-green-100 px-2.5 py-1.5 text-sm text-green-500">
                    In Stock
                  </div>
                ) : (
                  <div className="absolute top-0 right-0 w-max rounded-sm bg-red-100 px-2.5 py-1.5 text-sm text-red-500">
                    Out of Stock
                  </div>
                )}
                <div className="flex flex-col gap-y-2">
                  <Header1 text={productData.productName} />
                  {/* <div>Girls Purple Moana Printed Dress</div> */}
                  <div>{productData.shortDescription}</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: productData.ratings }).map((_, i) => (
                      <Star key={i} className="fill-amber-500 text-amber-500" />
                    ))}
                    {productData.ratings < 5 &&
                      Array.from({ length: 5 - productData.ratings }).map(
                        (_, i) => <Star key={i} className="text-amber-500" />
                      )}
                  </div>
                </div>
                <div className="item-price mt-2 flex gap-2">
                  <div className="current-price font-bold text-black">
                    ${productData.discountPrice}
                  </div>
                  <div className="real-price text-gray-500 line-through">
                    ${productData.price}
                  </div>
                </div>
                <div>{productData.longDescription}</div>
                <div className="flex flex-col gap-2">
                  <Header4Bold text="Color" />
                  <div className="flex items-center gap-2">
                    {productData.colors.map((color: string, index: number) => (
                      <button key={index}>
                        <div
                          className={`size-8.5 rounded-sm ${color != "white" && color != "black" ? `bg-${color}-500` : `bg-${color}`} ${color == "white" ? `border-1 border-black` : ``}`}
                        ></div>
                      </button>
                    ))}
                    {/* <button>
                      <div className="size-8.5 rounded-sm bg-red-500"></div>
                    </button>
                    <button>
                      <div className="size-8.5 rounded-sm bg-blue-500"></div>
                    </button>
                    <button>
                      <div className="size-8.5 rounded-sm bg-amber-500"></div>
                    </button> */}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Header4Bold text="Size" />
                  <div className="flex items-center gap-2">
                    {productData.sizes.map((size: string, index: number) => (
                      <div
                        key={index}
                        className="hover:bg-primary-500 border-primary-500 flex-center size-8.5 rounded-md border-1 text-sm hover:text-gray-100"
                      >
                        {size}
                      </div>
                    ))}
                    {/* <div className="hover:bg-primary-500 border-primary-500 flex-center size-8.5 rounded-md border-1 text-sm hover:text-gray-100">
                      S
                    </div> */}
                    {/* <div className="hover:bg-primary-500 border-primary-500 flex-center size-8.5 rounded-md border-1 text-sm hover:text-gray-100">
                      M
                    </div>
                    <div className="hover:bg-primary-500 border-primary-500 flex-center size-8.5 rounded-md border-1 text-sm hover:text-gray-100">
                      L
                    </div>
                    <div className="hover:bg-primary-500 border-primary-500 flex-center size-8.5 rounded-md border-1 text-sm hover:text-gray-100">
                      XL
                    </div>
                    <div className="hover:bg-primary-500 border-primary-500 flex-center size-8.5 rounded-md border-1 text-sm hover:text-gray-100">
                      XXL
                    </div> */}
                  </div>
                </div>
                <div className="flex w-full items-center gap-5 pt-7">
                  <div className="flex-center border-primary-500 gap-4 rounded-xl border-1 px-4 py-1">
                    <ButtonWhiteWithBlackBorder
                      icon={<Minus className="size-4" />}
                      btnColorType="white"
                      className="border-white"
                      onClick={() => {
                        quantity != 0 && setQuantity((pre) => pre - 1);
                      }}
                    />
                    {/* <ButtonWithBlackBg icon={<Minus className="size-4" />} btnColorType="gray"/> */}
                    <div>{quantity}</div>
                    <ButtonWhiteWithBlackBorder
                      icon={<Plus className="size-4" />}
                      btnColorType="white"
                      className="border-white"
                      onClick={() => {
                        setQuantity((pre) => pre + 1);
                      }}
                    />
                    {/* <ButtonWithBlackBg /> */}
                  </div>
                  <ButtonWithBlackBg
                    btnColorType="black"
                    btntext="Add to Cart"
                    onClick={() => {
                      productData._id && addToCart(productData._id, quantity);
                    }}
                  />
                  <div className="border-primary-500 rounded-xl border-1 p-4">
                    <Heart />
                  </div>
                </div>
              </div>
            </div>

            {/* Varities */}
            {productData.variations.length > 0 && (
              <div className="pt-4">
                <div className="flex items-center gap-5">
                  {productData.variations.map((prod, index) => {
                    return (
                      <img
                        key={index}
                        src={prod.imageUrl}
                        alt=""
                        className="size-31"
                      />
                    );
                  })}
                </div>
              </div>
            )}

            <SlideAccordion productData={productData} />

            {allProductsData?.length > 0 && (
              <div>
                <div className="title mx-auto mb-13 pt-10 text-4xl">
                  Related Products
                </div>
                <div className="flex items-center gap-7.5">
                  {allProductsData.map((product: any, index: number) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </div>
            )}
          </main>
        )}
      </div>

      {/* Our Services / Perks */}
      <OurServices />
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default ProductPage;
