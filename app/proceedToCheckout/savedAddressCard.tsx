import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import { Square, SquareCheck, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";

export interface SavedAddressCardProps {
  individualName: string;
  flatHouseBuildingCompanyApartment: string;
  areaColonyStreetSectorVillage: string;
  city: string;
  state: string;
  pinCode: number;
  setselectedAddress: any;
}

function SavedAddressCard({
  individualName,
  flatHouseBuildingCompanyApartment,
  areaColonyStreetSectorVillage,
  city,
  state,
  pinCode,
  setselectedAddress
}: SavedAddressCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  function selectAddress() {
    if (!isSelected) {
      setIsSelected(!isSelected);
      setselectedAddress({
        individualName,
        flatHouseBuildingCompanyApartment,
        areaColonyStreetSectorVillage,
        city,
        state,
        pinCode
      });
    } else {
      setIsSelected(!isSelected);
      setselectedAddress(undefined);
    }
  }

  return (
    <div className="flex w-83.5 flex-col gap-5">
      <div className="bg-light-100 flex h-42.5 w-full flex-col justify-around gap-5 rounded-xl p-5">
        <div className="flex-center justify-between">
          <div className="text-xl leading-4 font-bold">{individualName}</div>
          <button
            className="checkBoxSelectAddress"
            onClick={() => selectAddress()}
          >
            {isSelected ? (
              <SquareCheck className="fill-primary-500 text-white" />
            ) : (
              <Square />
            )}
          </button>
        </div>
        <div className="leading-5">
          {flatHouseBuildingCompanyApartment}, {areaColonyStreetSectorVillage},{" "}
          {city}, {state}, {pinCode}
        </div>
        {/* min-w-35.5 */}
        <div className="flex gap-5">
          <button className="flex-center h-8.5 grow gap-1.5 rounded-lg bg-[#f1f1f3]">
            <SquarePen size={18} />
            <div className="text-sm">Edit</div>
          </button>
          <button className="flex-center h-8.5 grow gap-1.5 rounded-lg bg-red-50 text-red-400">
            <Trash2 size={18} />
            <div className="text-sm">Delete</div>
          </button>
        </div>
      </div>
      {isSelected && (
        <div>
          <ButtonWithBlackBg btntext="Deliver Here" onClick={() => {}} />
        </div>
      )}
    </div>
  );
}

export default SavedAddressCard;
