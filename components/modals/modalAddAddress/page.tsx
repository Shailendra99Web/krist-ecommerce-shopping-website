"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/buttons/buttonWithBlackBg/page";
import { useRouter } from "next/navigation";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addNewAddressSchema } from "@/schemas/authSchemas";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import SelectFieldWithTitle from "@/components/selectFieldWithTitle/page";
import { z } from "zod";
import { useAppDispatch } from "@/redux/hooks";
import { modal_AddAddressToggleReducer } from "@/redux/features/modals/modalsSlice";
import { apiAddAddress } from "@/utils/GlobalApi";

type Inputs = {
  individualName: string;
  mobileNumber: string;
  flatHouseBuildingCompanyApartment: string;
  areaColonyStreetSectorVillage: string;
  city: string;
  pinCode: string;
  state: string;
};

interface ModalAddAddressProps {
  isOpen: boolean;
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ModalAddAddress({
  isOpen = false,
  onButtonClick
}: ModalAddAddressProps) {
  const [display, setDisplay] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
      setTimeout(() => {
        setTransition(true);
      }, 30);
    } else {
      setTransition(false);
      setTimeout(() => {
        setDisplay(false);
      }, 200);
    }
  }, [isOpen]);
  type AddNewAddressForm = z.infer<typeof addNewAddressSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  // 	{
  //   resolver: zodResolver(addNewAddressSchema) // ← ここでZodを統合
  // }
  const fieldsHeight = "h-12";
  const dispatch = useAppDispatch();
  const modalAddAddressMainRef = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("....");
    console.log("apiAddAddress", data);

    const res = await apiAddAddress({ address: data });
    console.log("res", res);
  };

  return (
    <div
      className={`bg-lightgray/20 fixed top-0 left-0 z-30 h-screen w-screen backdrop-blur-sm ${display ? "block" : "hidden"} ${transition ? "opacity-100" : "opacity-0"} transition-all duration-200`}
      onClick={(e) => {
        if (
          modalAddAddressMainRef.current &&
          e.target !== modalAddAddressMainRef.current &&
          !(modalAddAddressMainRef.current as Node).contains(e.target as Node)
        )
          dispatch(modal_AddAddressToggleReducer());
      }}
    >
      {/* h-[832px] */}
      {/* top-1/2 -translate-y-1/2 */}
      {/* top-2/5 -translate-y-2/5 */}
      <div
        ref={modalAddAddressMainRef}
        id="modalAddAddressMainRef"
        className={`flex-center fixed left-1/2 z-10 h-full w-[491px] -translate-x-1/2 flex-col overflow-y-auto rounded-md bg-white p-5 shadow ${transition ? "top-0 opacity-100" : "top-2/5 opacity-0"} overflow-auto transition-all duration-200`}
      >
        <div className="flex w-full flex-col gap-8 overflow-auto">
          <div className="text-2xl font-bold">Add a new address</div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <InputFieldWithTitle
                reactHookFormRegister={register}
                stateName="individualName"
                title="Name"
                type="text"
                htmlFor_Id_Name="individualName"
                inputPlaceholder="Enter Name"
                inputRequired={true}
                inputError={<></>}
                className={fieldsHeight}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                stateName="mobileNumber"
                title="Mobile Number"
                type="tel"
                htmlFor_Id_Name="mobileNumber"
                inputPlaceholder="Enter Mobile Number"
                inputRequired={true}
                inputError={<></>}
                className={fieldsHeight}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                stateName="flatHouseBuildingCompanyApartment"
                title="Flat, House no., Building, Company, Apartment"
                type="text"
                htmlFor_Id_Name="flatHouseBuildingCompanyApartment"
                inputPlaceholder=""
                inputRequired={false}
                inputError={<></>}
                className={fieldsHeight}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                stateName="areaColonyStreetSectorVillage"
                title="Area, Colony, Street, Sector, Village"
                type="text"
                htmlFor_Id_Name="areaColonyStreetSectorVillage"
                inputPlaceholder=""
                inputRequired={false}
                inputError={<></>}
                className={fieldsHeight}
              />
              <SelectFieldWithTitle
                reactHookFormRegister={register}
                stateName="city"
                title="City"
                type="text"
                htmlFor_Id_Name="city"
                inputPlaceholder=""
                inputRequired={true}
                inputError={<></>}
                className={fieldsHeight}
                options={["Lucknow", "Delhi", "Mumbai"]}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                stateName="pinCode"
                title="Pin Code"
                type="text"
                htmlFor_Id_Name="pinCode"
                inputPlaceholder="Enter Pin Code"
                inputRequired={true}
                inputError={<></>}
                className={fieldsHeight}
              />
              <SelectFieldWithTitle
                reactHookFormRegister={register}
                stateName="state"
                title="State"
                type="text"
                htmlFor_Id_Name="state"
                inputPlaceholder=""
                inputRequired={true}
                inputError={<></>}
                className={fieldsHeight}
                options={["Uttar Pradesh", "Uttarakhand"]}
              />
              <CheckButtonWithText
                label="default-address"
                value="selected"
                text="Use as my default address"
                className="text-sm"
              />
            </div>

            <div className="flex gap-4 pt-8">
              <ButtonWithBlackBg
                btntext="Cancel"
                className="max-w-80"
                type="button"
                btnColorType="gray"
              />
              <ButtonWithBlackBg
                btntext="Add New Address"
                className="max-w-80"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalAddAddress;
