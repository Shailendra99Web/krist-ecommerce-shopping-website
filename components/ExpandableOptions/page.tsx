import { ChevronUp, Plus, Square, SquareCheck } from "lucide-react";
import Header4Bold from "../headers/Header4Bold";
import { useState } from "react";

interface FoldOptionsProps {
  title: string;
  expandableOptions: any;
}

function ExpandableOptions({ title, expandableOptions }: FoldOptionsProps) {
  const [expandOptions, setExpandOptions] = useState<boolean>(true);

  return (
    <div className="mb-5 border-b-1 border-gray-200">
      <div className="flex items-center justify-between mb-5 cursor-pointer" onClick={()=>{setExpandOptions(!expandOptions)}}>
        <Header4Bold text={title} />
        <div className={`${(expandOptions)?'':'-rotate-180'} transition-all duration-300`}>
          <ChevronUp className="size-4.5" />
        </div>
      </div>
      <div className={`${(expandOptions)?'max-h-300':'max-h-0'} transition-all duration-400 ease-in-out overflow-hidden`}>{expandableOptions}</div>
    </div>
  );
}

export default ExpandableOptions;
