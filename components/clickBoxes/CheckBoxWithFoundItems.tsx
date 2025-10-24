"use client";
import { Square, SquareCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface CheckBoxWithFoundItemsProps {
  option: any;
  index: number;
}

function CheckBoxWithFoundItems({
  option,
  index
}: CheckBoxWithFoundItemsProps) {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    option.checked ? setIsChecked(true) : setIsChecked(false);
  }, [option.checked]);

  return (
    <div
      key={"shop-filter-by-size-" + index}
      className="flex w-full items-center justify-between"
    >
      <div
        className="flex gap-2"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {/* <Square/> */}
        {isChecked ? <SquareCheck className="" /> : <Square />}
        <div>{option.name}</div>
      </div>
      {option.foundItems ? "(" + option.foundItems + ")" : null}
    </div>
  );
}

export default CheckBoxWithFoundItems;
