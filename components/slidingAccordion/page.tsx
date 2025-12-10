"use client";
import { Star } from "lucide-react";
import { useState } from "react";
import ReviewAddCard from "../review/ReviewAddCard";

interface productDataProps {
  productData: any;
}

function SlideAccordion({ productData }: productDataProps) {
  const [openedAccordionName, setOpenedAccordionName] = useState<
    "Descriptions" | "Additional Information" | "Reviews"
  >("Descriptions");

  const headers: Array<"Descriptions" | "Additional Information" | "Reviews"> =
    ["Descriptions", "Additional Information", "Reviews"];

  return (
    <div className="w-full overflow-x-hidden py-10">
      {/* Headings */}
      <div className="flex items-center gap-5 border-b-2 border-gray-200">
        {headers.map((header, i) => (
          <div
            key={i}
            className={`cursor-pointer border-b-3 pb-2.5 text-lg transition-all ${openedAccordionName === header ? "border-primary font-bold" : "border-transparent"}`}
            onClick={() => setOpenedAccordionName(header)}
          >
            {header.charAt(0).toUpperCase() + header.slice(1)}
          </div>
        ))}
      </div>

      <div
        className={`flex w-[300%] overflow-x-hidden transition-transform duration-500 ${
          openedAccordionName === "Descriptions"
            ? "-translate-x-0"
            : openedAccordionName === "Additional Information"
              ? "-translate-x-1/3"
              : "-translate-x-2/3"
        }`}
      >
        {/* Descriptions */}
        <div className="w-full pt-4">{productData.longDescription}</div>
        {/* Additional Information */}
        <div className="w-full">
          <div className="flex">
            <b className="pr-2">Color</b>{" "}
            {productData.colors.map((color: string, index: number) => (
              <div key={index}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
                <span className="pr-1">
                  {productData.colors.length !== index + 1 ? " ," : ""}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <b className="pr-2">Size</b>{" "}
            {productData.sizes.map((size: string, index: number) => (
              <div key={index}>
                {size}
                <span className="pr-1">
                  {productData.sizes.length !== index + 1 ? ", " : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Review */}
        <div className="w-full">
          <div className="mb-5 text-lg font-bold">Customer Reviews</div>
          <div className="border-b-1 border-gray-200">
            <div className="flex gap-2">
              <img
                src="/images/person1.jpg"
                alt="client-image"
                className="size-12 rounded-full object-cover"
              />
              <div className="pb-4">
                <div className="pb-1">Mark Williams</div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4.5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="pb-2 font-bold">Excellent Product, I Love It</div>
            <div className="pb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aspernatur architecto, autem, voluptatibus officia debitis
              labore obcaecati beatae quod hic
            </div>
            <div className="pb-2">Review by Krist Posted on June 05, 2023</div>
          </div>
          <div className="my-5 text-lg font-bold">Add your Review</div>
          <ReviewAddCard />
        </div>
      </div>
    </div>
  );
}

export default SlideAccordion;
