import CheckListPlus from "@/components/clickBoxes/CheckBoxWithPlus";
import { Plus, Square, SquareCheck } from "lucide-react";

export const bottomPaddingOfOptions = <div className="pt-2"></div>;

function OptionsSetbyCheckListPlus() {
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

  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-4.5">
      {foldOptionsData.subOptions.map((option, index) => (
        <CheckListPlus key={index} option={option} index={index}/>
      ))}
      {bottomPaddingOfOptions}
    </div>
  );
}

export default OptionsSetbyCheckListPlus;
