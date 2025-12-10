"use client";

import { Plus, Square, SquareCheck } from "lucide-react";
import { useEffect, useState } from "react";
import CheckBoxWithPlus2 from "./CheckBoxWithPlus2";
import { useAppDispatch } from "@/redux/hooks";
import { reducerSetAllProductsWithExcludeItemsByCategoryString } from "@/redux/features/allProducts/allProductsSlice";

interface CheckBoxPlus {
  option: any;
  index: number;
  onToggle: any;
}

function CheckBoxPlus({ option, index, onToggle }: CheckBoxPlus) {
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(true);
  const [expandOptions, setExpandOptions] = useState(true);
  // const [allSubOptionsUncheck, setAllSubOptionsUncheck] = useState(false);

  useEffect(() => {
    option.checked ? setIsChecked(true) : setIsChecked(false);
  }, [option.checked]);

  return (
    <div
      key={"shop-product-categories-" + index}
      id={"shop-product-categories-" + index}
      className="flex w-full flex-col items-center justify-between"
    >
      <div className="flex w-full justify-between gap-2">
        <div
          className="flex gap-2"
          onClick={() => {
            // option.checked = !isChecked;
            onToggle(index, !isChecked);
            setIsChecked(!isChecked);

            // setAllSubOptionsUncheck(!allSubOptionsUncheck)

            dispatch(
              reducerSetAllProductsWithExcludeItemsByCategoryString({
                category: option.name.toLowerCase(),
                exclude: !isChecked
              })
            );
          }}
        >
          {/* <Square/> */}
          {isChecked ? <SquareCheck className="cursor-pointer" /> : <Square />}
          <div>{option.name}</div>
        </div>
        {option.subOptions ? (
          <Plus
            className="size-4.5 cursor-pointer"
            onClick={() => setExpandOptions(!expandOptions)}
          />
        ) : null}
      </div>
      {option.subOptions && (
        <div
          className={`${expandOptions ? "max-h-300" : "max-h-0"} flex w-full flex-col gap-y-1 overflow-hidden px-4 transition-all duration-400 ease-in-out`}
        >
          <div className="pt-2"></div>
          {option.subOptions?.map((opt: any, i: number) => (
            <CheckBoxWithPlus2
              isParentOptionChecked={isChecked}
              key={i}
              option={opt}
              index={i}
              onToggle={(index: number, newVaLue: boolean) => {
                let exArray =
                  option.name.toLowerCase() +
                  "_" +
                  option.subOptions[index].name.toLowerCase();

                dispatch(
                  reducerSetAllProductsWithExcludeItemsByCategoryString({
                    category: exArray,
                    exclude: newVaLue
                  })
                );

                // onToggle
              }}
            />
          ))}
          <div className="pb-2"></div>
        </div>
      )}
    </div>
  );
}

export default CheckBoxPlus;
