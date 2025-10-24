import { Star } from "lucide-react";

interface CarouselItem {
    rating: number;
    comment: string;
    image: string;
    name: string;
    profession: string;
}

interface CarouselCardLandscapeProps {
  item: CarouselItem;
  index: number;
}

function CarouselCardLandscape({item, index}:CarouselCardLandscapeProps) {
  return (
    <div
      key={index}
      className={`relative flex h-[262px] min-w-90 flex-col justify-between gap-8 rounded-sm p-7.5`}
    >
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="fill-amber-500 text-amber-500" />
          ))}
        </div>
        <div>{item.comment}</div>
      </div>
      <div className="flex items-center gap-2.5">
        <img
          src={item.image}
          alt="client-image"
          className="size-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <div className="font-bold">{item.name}</div>
          <div className="text-lightgray-500 text-sm">{item.profession}</div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCardLandscape;
