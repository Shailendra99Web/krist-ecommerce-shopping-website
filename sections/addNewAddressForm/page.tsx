import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import SelectFieldWithTitle from "@/components/selectFieldWithTitle/page";
import { apiAddAddress } from "@/utils/GlobalApi";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  individualName: string;
  mobileNumber: string;
  flatHouseBuildingCompanyApartment: string;
  areaColonyStreetSectorVillage: string;
  city: string;
  pinCode: string;
  state: string;
};

function AddNewAddressForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const fieldsHeight = "h-12";

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await apiAddAddress({ address: data });
    console.log("apiAddAddress", res);
  };

  return (
    <form className="flex flex-col gap-4.5" onSubmit={handleSubmit(onSubmit)}>
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

      <ButtonWithBlackBg
        btntext="Add New Address"
        className="max-w-80"
        type="submit"
      />
    </form>
  );
}

export default AddNewAddressForm;
