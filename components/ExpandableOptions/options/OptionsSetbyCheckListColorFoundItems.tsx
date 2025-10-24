import { Plus, Square, SquareCheck } from "lucide-react";
import { bottomPaddingOfOptions } from "./OptionsSetbyCheckListPlus";
import CheckBoxColorWithFoundItem from "@/components/clickBoxes/CheckBoxColorWithFoundItems";

function OptionsSetbyCheckListColorFoundItems() {
  const foldOptionsData = {
    subOptions: [
      {
        name: "Red",
        checked: true,
        foundItems: 10,
        classNameForChecked: "fill-red-500 text-red-500",
        classNameForNonChecked: "text-red-500"
      },
      {
        name: "Blue",
        checked: false,
        foundItems: 14,
        classNameForChecked: "fill-blue-500 text-blue-500",
        classNameForNonChecked: "text-blue-500"
      },
      {
        name: "Orange",
        checked: false,
        foundItems: 8,
        classNameForChecked: "fill-orange-500 text-orange-500",
        classNameForNonChecked: "text-orange-500"
      },
      {
        name: "Black",
        checked: false,
        foundItems: 9,
        classNameForChecked: "fill-primary-500 text-primary-500",
        classNameForNonChecked: "text-primary-500"
      },
      {
        name: "Green",
        checked: false,
        foundItems: 4,
        classNameForChecked: "fill-green-500 text-green-500",
        classNameForNonChecked: "text-green-500"
      },
      {
        name: "Yellow",
        checked: false,
        foundItems: 2,
        classNameForChecked: "fill-yellow-500 text-yellow-500",
        classNameForNonChecked: "text-yellow-500"
      }
    ]
  };

  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-4.5">
      {foldOptionsData.subOptions.map((option, index) => (
        <CheckBoxColorWithFoundItem key={index} option={option} index={index}/>
      ))}
      {bottomPaddingOfOptions}
    </div>
  );
}

export default OptionsSetbyCheckListColorFoundItems;
