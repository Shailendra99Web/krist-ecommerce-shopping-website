import { bottomPaddingOfOptions } from "./OptionsCheckListPlus";

interface OptionsSetbySliderProps {
  title: string;
}

function OptionsSetbySlider({ title }: OptionsSetbySliderProps) {
  return (
    <div>
      <div className="mb-5">{title}</div>

      {/* Slider */}
      <div className="relative h-0.5 bg-gray-500 my-2">
        <div className="bg-primary-500 absolute top-1/2 left-0 size-3 -translate-y-1/2 rounded-full"></div>
        <div
          className="bg-primary-500 absolute top-1/2 right-0 size-3 -translate-y-1/2 rounded-full"
          onTouchStart={() => {}}
        ></div>
        <div className="bg-primary-500 h-full"></div>
        <div></div>
      </div>
      <div className="pt-5"></div>
    </div>
  );
}

export default OptionsSetbySlider;
