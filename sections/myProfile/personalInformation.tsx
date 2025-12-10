import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import { personalInformationSchema } from "@/schemas/authSchemas";
import {
  apiUpdateAllUserInfo,
  apiUpdateUserProfilePicture
} from "@/utils/GlobalApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, SquarePen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface PersonalInformationProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  userProfilePictureImageUrl?: string;
}

function PersonalInformation({
  firstName,
  lastName,
  email,
  userProfilePictureImageUrl
}: PersonalInformationProps) {
  type PersonalInformationForm = z.infer<typeof personalInformationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PersonalInformationForm>({
    resolver: zodResolver(personalInformationSchema)
  });

  const onSubmit: SubmitHandler<PersonalInformationForm> = async (data) => {
    console.log("PersonalInformationForm", data);
    // const res = await apiUpdateAllUserInfo(data);

    // const res = await apiAddAddress({ address: data });
    // console.log("res", res);
  };

  const [allowEdit, setAllowEdit] = useState<boolean>(true);
  const [imageProfile, setImageProfile] = useState<any>();
  const imageInputRef = useRef(null);

  function getImage() {
    if (imageInputRef.current) {
      (imageInputRef.current as HTMLInputElement).click();
    }
  }

  useEffect(() => {
    if (userProfilePictureImageUrl) setImageProfile(userProfilePictureImageUrl);
  }, [userProfilePictureImageUrl]);

  async function updateProfilePicture(file: File | null) {
    if (file) {
      const res = await apiUpdateUserProfilePicture({ file: file });
      if (res.imageUrl) setImageProfile(res.imageUrl);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between pb-6">
        {/* Img */}
        <div className="relative">
          <img
            className="size-20 rounded-full object-cover"
            src={
              imageProfile
                ? typeof imageProfile === "string"
                  ? imageProfile
                  : URL.createObjectURL(imageProfile)
                : "https://res.cloudinary.com/dfaklq64w/image/upload/v1763646295/profile_ztslti.png"
            }
            alt="user-image"
          />
          <input
            ref={imageInputRef}
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              updateProfilePicture(file);
            }}
          ></input>

          <div
            className="absolute right-0 bottom-0 cursor-pointer"
            onClick={() => getImage()}
          >
            <SquarePen className="bg-primary-500 hover:text-primary-500 size-6 rounded-lg p-1 text-white hover:bg-white" />
          </div>
        </div>

        {/* Button - Edit Profile */}
        <ButtonWithBlackBg
          btntext={allowEdit ? "Save Changes" : "Edit Profile"}
          className="max-h-14 max-w-42 flex-row-reverse gap-3"
          icon={allowEdit ? <Save /> : <SquarePen />}
          onClick={() => setAllowEdit(!allowEdit)}
          type={!allowEdit ? "submit" : "button"}
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-5">
          <div className="grow">
            <InputFieldWithTitle
              reactHookFormRegister={register}
              type="firstName"
              htmlFor_Id_Name="firstName"
              title="First Name"
              inputPlaceholder={firstName ? firstName : "Enter First Name"}
              stateName={"firstName"}
              inputRequired={true}
              inputError={errors.firstName}
              disabled={!allowEdit ? true : false}
            />
          </div>
          <div className="grow">
            <InputFieldWithTitle
              reactHookFormRegister={register}
              type="lastName"
              htmlFor_Id_Name="lastName"
              title="Last Name"
              inputPlaceholder={lastName ? lastName : "Enter Last Name"}
              stateName={"lastName"}
              inputRequired={false}
              inputError={errors.lastName}
              disabled={!allowEdit ? true : false}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="grow">
            <InputFieldWithTitle
              reactHookFormRegister={register}
              type="phoneNumber"
              htmlFor_Id_Name="phoneNumber"
              title="Phone Number"
              inputPlaceholder="Enter Phone Number"
              stateName={"phoneNumber"}
              inputRequired={true}
              inputError={errors.phoneNumber}
              disabled={!allowEdit ? true : false}
            />
          </div>
          <div className="grow">
            <InputFieldWithTitle
              reactHookFormRegister={register}
              type="text"
              htmlFor_Id_Name="email"
              title="Email Address"
              inputPlaceholder={email ? email : "Enter Email Address"}
              stateName={"email"}
              inputRequired={true}
              inputError={errors.email}
              disabled={!allowEdit ? true : false}
            />
          </div>
        </div>

        <InputFieldWithTitle
          reactHookFormRegister={register}
          type="address"
          htmlFor_Id_Name="address"
          title="Address"
          inputPlaceholder="Enter Address"
          stateName={"address"}
          inputRequired={true}
          inputError={errors.address}
          disabled={!allowEdit ? true : false}
        />
      </div>
    </form>
  );
}

export default PersonalInformation;
