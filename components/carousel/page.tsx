"use client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";
import { useEffect, useState } from "react";
import CarouselCardPortrait from "./carouselCardPortrait";
import CarouselCardLandscape from "./carouselCardLandscape";

interface CarouselProps {
  title?: string;
  carouselItemsData: any;
  carouselItemTemplateType?: "portrait" | "landscape";
}

function Carousel({
  title = "Carousel Title",
  carouselItemsData,
  carouselItemTemplateType = "portrait"
}: CarouselProps) {
  if (!Array.isArray(carouselItemsData)) {
    return null;
  }

  const [windowWidth, setWindowWidth] = useState(0);
  const [carouselTranslateX, setCarouselTranslateX] = useState(0);
  const [carouselItemsTotalShowing, setCarouselItemsTotalShowing] = useState(4);

  useEffect(() => {
    const settingWindowsWidth = () => {
      const windowsWidth = window.innerWidth;
      setWindowWidth(windowsWidth);
    };

    settingWindowsWidth();

    window.addEventListener("resize", settingWindowsWidth);

    return () => {
      window.removeEventListener("resize", settingWindowsWidth);
    };
  }, []);

  return (
    <div>
      {/* Categories Section */}
      <div className="mb-13 flex justify-between">
        <div className="text-4xl">{title}</div>
        {/* Top left and right nav buttons */}
        <div className="flex-center gap-5">
          <ButtonWithBlackBg
            btnColorType="gray"
            onClick={() => {
              if (carouselItemsTotalShowing > 4) {
                if (carouselItemTemplateType == "portrait") {
                  setCarouselTranslateX((pre) => pre - (262 + 30)); // For Carousel Card Portrait
                } else {
                  setCarouselTranslateX((pre) => pre - (360 + 30)); // For Carousel Card Landscape
                }
                setCarouselItemsTotalShowing((pre) => pre - 1);
              }
            }}
            className="!w-14 gap-3"
            icon={<ArrowLeft size={17} />}
          />
          <ButtonWithBlackBg
            btnColorType="gray"
            onClick={() => {
              if (carouselItemsTotalShowing < carouselItemsData.length) {
                if (carouselItemTemplateType == "portrait") {
                  setCarouselTranslateX((pre) => pre + (262 + 30)); // For Carousel Card Portrait
                } else {
                  setCarouselTranslateX((pre) => pre + (360 + 30)); // For Carousel Card Landscape
                }
                setCarouselItemsTotalShowing((pre) => pre + 1);
              }
            }}
            className="!w-14 gap-3"
            icon={<ArrowRight size={17} />}
          />
        </div>
      </div>
      
      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className={`flex gap-7.5 transition-all`}
          style={{ transform: `translateX(-${carouselTranslateX}px)` }}
        >
          {carouselItemsData.map(
            (item, index) =>
              // Carousel Item
              carouselItemTemplateType != "landscape" ? (
                <CarouselCardPortrait key={index} index={index} item={item} />
              ) : (
                <CarouselCardLandscape key={index} item={item} index={index} />
              )

            // <CarouselCardPortrait index={index} item={item} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
