import { ChevronUp, Plus, Square, SquareCheck } from "lucide-react";
import Header4Bold from "../headers/Header4Bold";
import { useState } from "react";

interface FoldOptionsProps {
  title: string;
  dropdownOptions: any;
}

function DropdownOptions({ title, dropdownOptions }: FoldOptionsProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="relative mb-5">
      <div
        className="flex items-center justify-between gap-x-2 cursor-pointer"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <div>{title}</div>
        <div
          className={`${showOptions ? "" : "-rotate-180"} transition-all duration-300`}
        >
          <ChevronUp className="size-4.5" />
        </div>
      </div>

      {showOptions ? (
        <div
          className={`absolute inset-x-0 top-full z-10 border-1 border-gray-100 bg-white py-1 shadow transition-all duration-400 ease-in-out`}
        >
          {dropdownOptions?.map((option: any, index: number) => (
            <div key={index} className="px-3 py-1">
              {option.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DropdownOptions;
