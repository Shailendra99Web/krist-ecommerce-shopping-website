import { Phone, PhoneCall, SquarePen, Trash2 } from "lucide-react";
import ButtonWhiteWithBlackBorder from "../buttons/ButtonWhiteWithBlackBorder";
import Header4Bold from "../headers/Header4Bold";
import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";

interface MyProfileCardAddressProps {
  individualName: string;
  flatHouseBuildingCompanyApartment: string;
  areaColonyStreetSectorVillage: string;
  city: string;
  state: string;
  pinCode: number | string;
  phoneNumber: number;
  onDelete: any;
}

function MyProfileCardAddress({
  individualName = "Robert Fox",
  flatHouseBuildingCompanyApartment = "3742",
  areaColonyStreetSectorVillage = "Washington",
  city = "Manchester",
  state = "Kentuchy",
  pinCode = 36465,
  phoneNumber = 1234561234,
  onDelete
}: any) {
  return (
    <div className="flex flex-col gap-5 border-b-1 border-gray-200 py-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col justify-between gap-2.5">
          <div>
            <div className="text-lg font-bold">{individualName}</div>
          </div>
          <div>
            {flatHouseBuildingCompanyApartment}, {areaColonyStreetSectorVillage}
            , {city}, {state}, {pinCode}
          </div>
          <div className="flex gap-2">
            <PhoneCall />
            <div>
              {"(" +
                phoneNumber.toString().slice(0, 3) +
                ") " +
                phoneNumber.toString().slice(3, 6) +
                "-" +
                phoneNumber.toString().slice(6)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <ButtonWithBlackBg
            icon={<SquarePen size={20} />}
            btntext="Edit"
            className="!h-10 !w-21.5 flex-row-reverse gap-3 !rounded-lg text-sm !font-normal"
            btnColorType="gray"
          />
          <ButtonWithBlackBg
            icon={<Trash2 className="text-red-400" size={20} />}
            btntext="Delete"
            className="!h-10 !w-21.5 flex-row-reverse gap-3 !rounded-lg bg-red-100 text-sm !font-normal !text-red-400"
            btnColorType="gray"
            onClick={() => {
              onDelete();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MyProfileCardAddress;
