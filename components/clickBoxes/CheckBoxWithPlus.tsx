"use client";

import { Plus, Square, SquareCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface CheckBoxPlus {
  option: any;
  index: number;
}

function CheckBoxPlus({ option, index }: CheckBoxPlus) {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    option.checked ? setIsChecked(true) : setIsChecked(false);
  }, [option.checked]);

  return (
    <div
      key={"shop-product-categories-" + index}
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
      {option.subOptions ? <Plus className="size-4.5" /> : null}
    </div>
  );
}

export default CheckBoxPlus;
