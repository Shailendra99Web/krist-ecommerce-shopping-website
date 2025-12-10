"use client";
import Breadcrumb from "@/components/breadcrumb/page";
import OptionsCheckListPlus from "@/components/ExpandableOptions/options/OptionsCheckListPlus";
import OptionsCheckListColorFoundItems from "@/components/ExpandableOptions/options/OptionsCheckListColorFoundItems";
import OptionsSlider from "@/components/ExpandableOptions/options/OptionsSlider";
import ExpandableOptions from "@/components/ExpandableOptions/page";
import Navbar from "@/sections/navbar/page";
import { ArrowLeft, ArrowRight, Grid2X2, List } from "lucide-react";
import OptionsCheckListFoundItemsIndicator from "@/components/ExpandableOptions/options/OptionsCheckListFoundItems";
import ProductCard from "@/components/cards/CardProduct";
import React, { useEffect, useState } from "react";
import ButtonWhiteWithBlackBorder from "@/components/buttons/ButtonWhiteWithBlackBorder";
import Logo from "@/components/logo/page";
import OurServices from "@/sections/ourServices/page";
import DropdownOptions from "@/components/Dropdowns/DropdownOptions";
import { apiFetchAllProducts, apiFetchCart } from "@/utils/GlobalApi";
import { toLowerCase } from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reducerSetAllProducts } from "@/redux/features/allProducts/allProductsSlice";
import { addCart } from "@/redux/features/cart/cartSlice";
import Footer from "@/sections/footer/page";
import { useRouter } from "next/navigation";

function AllProducts() {
  const router = useRouter();
  const allProducts = useAppSelector((state) => state.allProducts.allProducts);
  const apiQueryExcludeItemsByCategoryString = useAppSelector(
    (state) => state.allProducts.apiQueryExcludeItemsByCategory
  );
  const dispatch = useAppDispatch();

  const breadcrumbData = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "All Products", url: `/shop/allProducts` }
  ];

  // const [allProducts, setAllProducts] = useState<any[]>([]); // All Products.
  const [totalPages, settotalPages] = useState(0); // Total Pages of Paginations.
  const [totalProductsViewingCounts, setTotalProductsViewingCounts] =
    useState(0); // Total products in view.
  const [totalProductsCounts, setTotalProductsCounts] = useState(0); // Total products counts (including not viewable).

  // const [productCategoriesOptions, setProductCategoriesOptions] = useState([
  //   {
  //     name: "Men",
  //     checked: true,
  //     subOptions: [
  //       {
  //         name: "Tops",
  //         checked: true
  //       },
  //       {
  //         name: "Bottoms",
  //         checked: true
  //       },
  //       // {
  //       //   name: "Ethnic Wear",
  //       //   checked: true,
  //       //   subOptions: [
  //       //     {
  //       //       name: "Kurtas",
  //       //       checked: true
  //       //     },
  //       //     {
  //       //       name: "Sherwanis",
  //       //       checked: true
  //       //     }
  //       //   ]
  //       // },
  //       {
  //         name: "Kurtas",
  //         checked: true
  //       },
  //       {
  //         name: "Sherwanis",
  //         checked: true
  //       }
  //     ]
  //   },
  //   {
  //     name: "Women",
  //     checked: true,
  //     subOptions: [
  //       // {
  //       //   name: "Western Wear",
  //       //   checked: true,
  //       //   subOptions: [
  //       //     { name: "Dresses", checked: true },
  //       //     { name: "Tops", checked: true },
  //       //     { name: "Skirts", checked: true },
  //       //     { name: "Jumpsuits", checked: true },
  //       //     { name: "Jeans", checked: true }
  //       //   ]
  //       // },
  //       { name: "Dresses", checked: true },
  //       { name: "Tops", checked: true },
  //       { name: "Skirts", checked: true },
  //       // { name: "Jumpsuits", checked: true },
  //       { name: "Jeans", checked: true },
  //       // {
  //       //   name: "Ethnic Wear",
  //       //   checked: true,
  //       //   subOptions: [
  //       //     { name: "Sarees", checked: true },
  //       //     { name: "Kurtas & Suits", checked: true },
  //       //     { name: "Lehenga Cholis", checked: true }
  //       //   ]
  //       // }
  //       { name: "Sarees", checked: true },
  //       { name: "Kurtas & Suits", checked: true },
  //       { name: "Lehenga Cholis", checked: true }
  //     ]
  //   },
  //   {
  //     name: "Kids",
  //     checked: true
  //     // subOptions: [
  //     //   {
  //     //     name: "Boys",
  //     //     checked: true,
  //     //     // subOptions: [
  //     //     //   { name: "T-Shirts", checked: true },
  //     //     //   { name: "Shirts", checked: true },
  //     //     //   { name: "Jeans", checked: true }
  //     //     // ]
  //     //   },
  //     //   {
  //     //     name: "Girls",
  //     //     checked: true,
  //     //     // subOptions: [
  //     //     //   { name: "Dresses", checked: true },
  //     //     //   { name: "Skirts", checked: true },
  //     //     //   { name: "Tops", checked: true }
  //     //     // ]
  //     //   }
  //     // ]
  //   },
  //   {
  //     name: "Bags",
  //     checked: true
  //   },
  //   {
  //     name: "Belts",
  //     checked: true
  //   },
  //   {
  //     name: "Wallets",
  //     checked: true
  //   },
  //   {
  //     name: "Watches",
  //     checked: true
  //   },
  //   {
  //     name: "Accessories",
  //     checked: true
  //   },
  //   {
  //     name: "Winter Wear",
  //     checked: true
  //   }
  // ]);
  const productCategoriesOptions = useAppSelector(
    (state) => state.categories.productCategories
  );

  const filterByColorOptions = [
    {
      name: "Red",
      checked: true,
      foundItems: 10,
      classNameForChecked: "fill-red-500 text-red-500",
      classNameForNonChecked: "text-red-500"
    },
    {
      name: "Blue",
      checked: false,
      foundItems: 14,
      classNameForChecked: "fill-blue-500 text-blue-500",
      classNameForNonChecked: "text-blue-500"
    },
    {
      name: "Orange",
      checked: false,
      foundItems: 8,
      classNameForChecked: "fill-orange-500 text-orange-500",
      classNameForNonChecked: "text-orange-500"
    },
    {
      name: "Black",
      checked: false,
      foundItems: 9,
      classNameForChecked: "fill-primary-500 text-primary-500",
      classNameForNonChecked: "text-primary-500"
    },
    {
      name: "Green",
      checked: false,
      foundItems: 4,
      classNameForChecked: "fill-green-500 text-green-500",
      classNameForNonChecked: "text-green-500"
    },
    {
      name: "Yellow",
      checked: false,
      foundItems: 2,
      classNameForChecked: "fill-yellow-500 text-yellow-500",
      classNameForNonChecked: "text-yellow-500"
    }
  ];

  const filterBySizeOptions = [
    {
      name: "S",
      checked: false,
      foundItems: 6
    },
    {
      name: "M",
      checked: false,
      foundItems: 20
    },
    {
      name: "L",
      checked: true,
      foundItems: 7
    },
    {
      name: "XL",
      checked: false,
      foundItems: 16
    },
    {
      name: "XXL",
      checked: false,
      foundItems: 10
    },
    {
      name: "XXXL",
      checked: false,
      foundItems: 2
    }
  ];

  const [allMarkedCategories, setAllMarkedCategories] = useState<any>();

  async function fetchAllProducts(skip = 0, limit = 12) {
    try {
      const data = await apiFetchAllProducts({
        skip: skip,
        limit: limit,
        queryExcludeString: apiQueryExcludeItemsByCategoryString ?? ""
      }); // Fetch all products.
      if (data) {
        // setFetchedDataAllProducts(data);
        if (data != undefined && data.totalCount > 12) {
          const calTotalPages = Math.ceil(data.totalCount / 12);
          settotalPages(calTotalPages); // Set total pages counts.
          setTotalProductsCounts(data.totalCount); // Set total products.
          setTotalProductsViewingCounts(data.count); // Set total viewing products.
          dispatch(reducerSetAllProducts([...data.data]));
          // setAllProducts([...data.data]); // Set all products.
        }
        console.log(data.data);
        return data;
      } else {
        router.push("/auth/login");
      }
    } catch (error) {
      console.log("Fetch error :", error);
    }
  }

  useEffect(() => {
    let ignore = false;
    console.log(
      "useEffect - apiQueryExcludeItemsByCategoryString",
      apiQueryExcludeItemsByCategoryString
    );
    (async () => {
      await fetchAllProducts();
    })();
    return () => {
      ignore = true;
    };
  }, [apiQueryExcludeItemsByCategoryString]);

  const examProduct = [
    {
      _id: "6900422e59c09727613445ac",
      productName: "Adidas",
      price: 60,
      discountPrice: 75,
      shortDescription: "Men adi-dash Running Shoes",
      longDescription:
        "shoes shoes shoes shoes shoes shoes shoes shoes shoes shoes",
      ratings: 4,
      reviews: [
        {
          name: "Mark Willam",
          ratings: 4,
          comment: "It's quality is priceless",
          date: "2024-02-15T08:23:12.456Z",
          _id: "6900422e59c09727613445ad"
        }
      ],
      colors: ["white", "red", "blue"],
      sizes: ["S", "M"],
      inStock: true,
      category: "products/men",
      imageUrl:
        "https://res.cloudinary.com/dfaklq64w/image/upload/v1761624621/products/men/ksdppdnmg9nzqngsgeew.jpg",
      __v: 0
    }
  ];

  // useEffect(() => {
  //   console.log("productCategoriesOptions changed");
  //   console.log(
  //     "useEffect - productCategoriesOptions",
  //     productCategoriesOptions
  //   );

  //   // const allMarkedCategories = productCategoriesOptions
  //   //   .filter((option) => option.checked)
  //   //   .map((option) => option.name);

  //   // console.log("new allMarkedCategories", allMarkedCategories);
  //   // setAllMarkedCategories(allMarkedCategories);

  //   let excludeCategories = [] as any;

  //   productCategoriesOptions.map((cat) => {
  //     if (cat.checked == false) {
  //       excludeCategories.push(cat.name.toLowerCase());
  //     }
  //   });
  //   console.log("excludeCategories", excludeCategories);

  //   // let newAllProducts = allProducts.map((product) => {});

  //   // newAllProducts.filter((product) => {
  //   //   console.log("product.category", product.category);
  //   //   if (/(men)/g.test(product.category)) {
  //   //   }
  //   // });
  //   // setAllProducts();
  // }, [productCategoriesOptions]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* my-[100px] */}
      {/* <div className="mx-[150px] pt-6"> */}
      <div className="max-w-primary mx-auto pt-6">
        <Breadcrumb breadcrumbData={breadcrumbData} />

        <div className="flex w-full justify-between gap-x-7.5 pt-12.5">
          <aside className="flex w-65.5 flex-col">
            <ExpandableOptions
              title="Product Categories"
              expandableOptions={
                <OptionsCheckListPlus
                  foldOptionsData={productCategoriesOptions}
                  onToggle={(index: number, newValue: boolean) => {
                    // console.log(
                    //   "onToggle called with index:",
                    //   index,
                    //   "newValue:",
                    //   newValue
                    // );
                    // const changedCatName = productCategoriesOptions[index].name;
                    // console.log("changedCatName:", changedCatName);
                    // let newProductCategoriesOptions = productCategoriesOptions;
                    // newProductCategoriesOptions[index].checked = newValue;
                    // console.log(
                    //   "newProductCategoriesOptions",
                    //   newProductCategoriesOptions
                    // );
                    // setProductCategoriesOptions((pre) =>
                    //   pre.map((opt, i) =>
                    //     i === index ? { ...opt, checked: newValue } : opt
                    //   )
                    // );
                  }}
                />
              }
            />
            <ExpandableOptions
              title="Filter by Price"
              expandableOptions={<OptionsSlider title="Price: $0 - $2000" />}
            />
            <ExpandableOptions
              title="Filter by Color"
              expandableOptions={
                <OptionsCheckListColorFoundItems
                  foldOptionsData={filterByColorOptions}
                />
              }
            />
            <ExpandableOptions
              title="Filter by Color"
              expandableOptions={
                <OptionsCheckListFoundItemsIndicator
                  foldOptionsData={filterBySizeOptions}
                />
              }
            />
          </aside>

          {/* Main */}
          <main className="max-w-[847px]">
            <section className="flex flex-wrap items-center justify-between gap-y-7.5">
              <div className="flex w-full justify-between">
                <div className="flex gap-5.5">
                  <Grid2X2 className="size-5.5" />
                  <List className="size-5.5" />
                  <div>
                    Showing 1-{totalProductsViewingCounts} of{" "}
                    {totalProductsCounts} results
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <DropdownOptions
                      title="Sort by latest"
                      dropdownOptions={[
                        {
                          name: "latest"
                        },
                        {
                          name: "name"
                        },
                        {
                          name: "price"
                        }
                      ]}
                    />
                  </div>
                  {/* <ChevronDown className="size-4.5" /> */}
                </div>
              </div>
              <div className="flex w-full flex-wrap gap-7.5">
                {/* Items */}
                {allProducts.length > 0
                  ? allProducts.map((product, index) => (
                      <ProductCard
                        key={"shop-allProduct-" + index}
                        product={product}
                      />
                    ))
                  : null}
              </div>
            </section>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-5 py-5">
              <ArrowLeft className="size-3.5" />
              <div className="flex items-center justify-end gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <ButtonWhiteWithBlackBorder
                    key={i}
                    btnColorType="white"
                    btntext={String(i + 1)}
                    className="!size-10"
                    onClick={() => {
                      fetchAllProducts(12 * i, 12);
                    }}
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
      <Footer />
    </div>
  );
}

export default AllProducts;
