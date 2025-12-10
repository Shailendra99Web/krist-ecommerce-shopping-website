"use client";

import { toggleCategory } from "@/redux/features/categories/categoriesSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Plus, Square, SquareCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface CheckBoxPlus {
  isParentOptionChecked: boolean;
  option: any;
  index: number;
  onToggle?: any;
}

function CheckBoxPlus({
  isParentOptionChecked,
  option,
  index,
  onToggle
}: CheckBoxPlus) {
  const [isChecked, setIsChecked] = useState(true);
  const [expandOptions, setExpandOptions] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    option.checked ? setIsChecked(true) : setIsChecked(false);
  }, [option.checked]);

  useEffect(() => {
    if (isParentOptionChecked === false) {
      setIsChecked(false);
    } else setIsChecked(true);
  }, [isParentOptionChecked]);

  return (
    <div
      key={"shop-product-categories-" + index}
      id={"shop-product-categories-" + index}
      className="flex w-full items-center justify-between"
    >
      <div
        className="flex gap-2"
        onClick={() => {
          // option.checked = !isChecked;
          onToggle(index, !isChecked);
          setIsChecked(!isChecked);
        }}
      >
        {/* <Square/> */}
        {isChecked ? <SquareCheck className="cursor-pointer" /> : <Square />}
        <div>{option.name}</div>
      </div>
    </div>
  );
}

export default CheckBoxPlus;
