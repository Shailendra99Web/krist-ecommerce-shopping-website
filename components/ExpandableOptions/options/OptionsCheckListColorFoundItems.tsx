import { Plus, Square, SquareCheck } from "lucide-react";
import { bottomPaddingOfOptions } from "./OptionsCheckListPlus";
import CheckBoxColorWithFoundItem from "@/components/clickBoxes/CheckBoxColorWithFoundItems";

function OptionsSetbyCheckListColorFoundItems({ foldOptionsData }: {foldOptionsData: any[]}) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-4.5">
      {foldOptionsData?.map((option: object, index: number) => (
        <CheckBoxColorWithFoundItem key={index} option={option} index={index} />
      ))}
      {bottomPaddingOfOptions}
    </div>
  );
}

export default OptionsSetbyCheckListColorFoundItems;
