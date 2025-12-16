import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";

interface CarouselItem {
  bgColor: string;
  categoryName: string;
  imageUrl: string;
  onClick?: () => void;
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
      <img
        src={item.imageUrl}
        alt="img"
        className="h-full min-w-[262px] object-cover"
      />

      <ButtonWithBlackBg
        className="absolute inset-x-[19px] bottom-2.5 !h-12.5 !w-56"
        btnColorType="gray"
        btntext={item.categoryName}
        onClick={() => item.onClick && item.onClick()}
      />
    </div>
  );
}

export default CarouselCardPortrait;
