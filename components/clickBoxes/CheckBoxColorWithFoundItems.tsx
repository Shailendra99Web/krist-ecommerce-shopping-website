"use client";
import { Square } from "lucide-react";
import { useEffect, useState } from "react";

interface CheckBoxColorWithFoundItemProps {
  option: any;
  index: number;
}

function CheckBoxColorWithFoundItem({
  option,
  index
}: CheckBoxColorWithFoundItemProps) {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    option.checked ? setIsChecked(true) : setIsChecked(false);
  }, [option.checked]);

  return (
    <div
      key={"shop-filter-by-color-" + index}
      className="flex w-full items-center justify-between"
    >
      <div
        className="flex gap-2"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {isChecked ? (
          <Square className={option.classNameForChecked} />
        ) : (
          <Square className={option.classNameForNonChecked} />
        )}
        <div>{option.name}</div>
      </div>
      {option.foundItems ? "(" + option.foundItems + ")" : null}
    </div>
  );
}

export default CheckBoxColorWithFoundItem;
