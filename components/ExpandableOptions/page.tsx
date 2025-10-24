import { ChevronUp, Plus, Square, SquareCheck } from "lucide-react";
import Header4Bold from "../headers/Header4Bold";
import { useState } from "react";

interface FoldOptionsProps {
  title: string;
  expandableOptions: any;
}

function ExpandableOptions({ title, expandableOptions }: FoldOptionsProps) {
  const foldOptionsData = {
    title: "Product Categories",
    subOptions: [
      {
        name: "Men",
        checked: true,
        subOptions: [
          {
            name: "T-Shirts",
            checked: true
          },
          {
            name: "Casual Shirts",
            checked: true
          }
        ]
      },
      {
        name: "Women",
        checked: false,
        subOptions: [
          {
            name: "T-Shirts",
            checked: true
          },
          {
            name: "Casual Shirts",
            checked: true
          }
        ]
      },
      {
        name: "Kids",
        checked: false,
        subOptions: [
          {
            name: "T-Shirts",
            checked: true
          },
          {
            name: "Casual Shirts",
            checked: true
          }
        ]
      },
      {
        name: "Bags",
        checked: false
      },
      {
        name: "Belts",
        checked: false
      },
      {
        name: "Wallets",
        checked: false
      },
      {
        name: "Watches",
        checked: false
      },
      {
        name: "Accessories",
        checked: false
      },
      {
        name: "Winter Wear",
        checked: false
      }
    ]
  };

  const [showOptions, setShowOptions] = useState<boolean>(true);

  return (
    <div className="mb-5 border-b-1 border-gray-200">
      <div className="flex items-center justify-between mb-5"
      onClick={()=>{setShowOptions(!showOptions)}}>
        <Header4Bold text={title} />
        <div className={`${(showOptions)?'':'-rotate-180'} transition-all duration-300`}>
          <ChevronUp className="size-4.5" />
        </div>
      </div>
      <div className={`${(showOptions)?'max-h-300':'max-h-0'} transition-all duration-400 ease-in-out overflow-hidden`}>{expandableOptions}</div>
    </div>
  );
}

export default ExpandableOptions;
