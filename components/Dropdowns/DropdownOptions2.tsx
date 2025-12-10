import { ChevronUp, Plus, Square, SquareCheck } from "lucide-react";
import Header4Bold from "../headers/Header4Bold";
import { useState } from "react";

interface FoldOptionsProps {
  selectedOption: string;
  dropdownOptions: any;
}

function DropdownOptions2({
  selectedOption,
  dropdownOptions
}: FoldOptionsProps) {

  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between gap-x-2 rounded-lg bg-gray-100 p-2 cursor-pointer"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <div>{selectedOption}</div>
        <div
          className={`${showOptions ? "" : "-rotate-180"} transition-all duration-300`}
        >
          <ChevronUp className="size-6.5" strokeWidth={1} />
        </div>
      </div>

      {showOptions ? (
        <div
          className={`absolute inset-x-0 top-full z-10 border-1 border-gray-100 bg-white py-1 shadow transition-all duration-400 ease-in-out`}
        >
          {dropdownOptions.map((option: any, index: number) => (
            <div key={index} className="px-3 py-1">
              {option}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DropdownOptions2;
