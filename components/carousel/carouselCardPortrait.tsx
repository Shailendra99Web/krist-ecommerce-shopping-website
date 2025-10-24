import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";

interface CarouselItem {
  bgColor: string;
  label: string;
  imageUrl: string;
}

interface CarouselCardPortraitProps {
  item: CarouselItem;
  index: number;
}

function CarouselCardPortrait({ item, index }: CarouselCardPortraitProps) {
  return (
    <div
      key={index}
      className={`relative h-90 min-w-[262px] rounded-sm ${item.bgColor}`}
    >
      <ButtonWithBlackBg
        className="absolute inset-x-[19px] bottom-2.5 !h-12.5 !w-56"
        btnColorType="gray"
        btntext="Casual Wear"
      />
    </div>
  );
}

export default CarouselCardPortrait;
