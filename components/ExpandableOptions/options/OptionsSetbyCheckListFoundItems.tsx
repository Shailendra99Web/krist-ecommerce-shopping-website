import { Plus, Square, SquareCheck } from "lucide-react";
import { bottomPaddingOfOptions } from "./OptionsSetbyCheckListPlus";
import CheckBoxWithFoundItems from "@/components/clickBoxes/CheckBoxWithFoundItems";

function OptionsSetbyCheckListFoundItems() {
  const foldOptionsData = {
    subOptions: [
      {
        name: "S",
        checked: false,
        foundItems: 6
      },
      {
        name: "M",
        checked: false,
        foundItems: 20
      },
      {
        name: "L",
        checked: true,
        foundItems: 7
      },
      {
        name: "XL",
        checked: false,
        foundItems: 16
      },
      {
        name: "XXL",
        checked: false,
        foundItems: 10
      },
      {
        name: "XXXL",
        checked: false,
        foundItems: 2
      }
    ]
  };

  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-4.5">
      {foldOptionsData.subOptions.map((option, index) => (
        <CheckBoxWithFoundItems key={index} option={option} index={index}/>
      ))}
      {bottomPaddingOfOptions}
    </div>
  );
}

export default OptionsSetbyCheckListFoundItems;
