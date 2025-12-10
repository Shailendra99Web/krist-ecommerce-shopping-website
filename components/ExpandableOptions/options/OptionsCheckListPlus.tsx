import CheckListPlus from "@/components/clickBoxes/CheckBoxWithPlus";
import { Plus, Square, SquareCheck } from "lucide-react";

export const bottomPaddingOfOptions = <div className="pt-2"></div>;

function OptionsSetbyCheckListPlus({
  foldOptionsData,
  onToggle
}: {
  foldOptionsData: any[];
  onToggle: any;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-4.5">
      {foldOptionsData?.map((option: object, index: number) => (
        <CheckListPlus key={index} option={option} index={index} onToggle={onToggle}/>
      ))}
      {bottomPaddingOfOptions}
    </div>
  );
}

export default OptionsSetbyCheckListPlus;
