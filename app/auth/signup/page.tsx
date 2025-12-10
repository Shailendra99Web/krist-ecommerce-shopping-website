"use client";
import AuthPage from "@/sections/templateAuthPage/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import LinkText from "@/components/linkText/page";
import TemplateAuthPageForm from "@/sections/templateAuthPageForm/page";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/schemas/authSchemas";
import { apiSignup } from "@/utils/GlobalApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginReducer } from "@/redux/features/auth/authSlice";
import { modal_OneButtonReducer } from "@/redux/features/modals/modalsSlice";
type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema) // ← ここでZodを統合
  });

  const router = useRouter();
  const dispatch = useDispatch();

  async function onSubmit(data: SignupForm) {
    try {
      console.log("form data", data);
      const { firstName, lastName, email, password } = data;
      const bodyData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
      const res = await apiSignup(bodyData);
      console.log(res);

      const { firstName2, lastName2, email2, addresses2 } = res.data;

      if (res.success == true) {
        localStorage.setItem("krist-shopping-website-token", res.token);
        dispatch(
          loginReducer({
            isLoggedIn: true,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
            addresses: res.data.addresses
          })
        );
        console.log(res.message);
        dispatch(
          modal_OneButtonReducer({
            isOpen: true,
            heading: "Signup Successfully",
            infoText: "Your account has been created successfully",
            btn: { text: "Go to Home", url: "/" }
          })
        );
        // setTimeout(() => {
        //   router.push("/");
        //   dispatch(
        //     modal_OneButtonReducer({
        //       isOpen: false,
        //       heading: "Signup Successfully",
        //       infoText: "Your account has been created successfully",
        //       btn: { text: "Go to Home", url: "/" }
        //     })
        //   );
        // }, 1500);
      }
      if (res.success == false) {
        console.log(res.message);
      }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  }

  return (
    <AuthPage
      formName="formSignup"
      coverImgClassName=""
      coverImgUrl="https://res.cloudinary.com/dfaklq64w/image/upload/v1762006548/signup-boy_qsmwsj.jpg"
      form={
        <TemplateAuthPageForm
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          formName="formSignup"
          heading="Create New Account"
          subheading="please enter details"
          inputFields={
            <>
              <InputFieldWithTitle
                reactHookFormRegister={register}
                type="text"
                htmlFor_Id_Name="firstName"
                title="First Name"
                inputPlaceholder="Enter First Name"
                stateName={"firstName"}
                inputError={errors.firstName?.message}
                inputRequired={true}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                type="text"
                htmlFor_Id_Name="lastName"
                title="Last Name"
                inputPlaceholder="Enter Last Name"
                stateName={"lastName"}
                inputError={errors.lastName?.message}
                inputRequired={false}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                type="email"
                htmlFor_Id_Name="email"
                title="Email Address"
                inputPlaceholder="Enter Email Address"
                stateName={"email"}
                inputError={errors.email?.message}
                inputRequired={true}
              />
              <InputFieldWithTitle
                reactHookFormRegister={register}
                type="password"
                htmlFor_Id_Name="password"
                title="Password"
                inputPlaceholder="Enter Password"
                stateName={"password"}
                inputError={errors.password?.message}
                inputRequired={true}
              />
            </>
          }
          options={
            <div className="mb-7.5 flex items-center gap-1">
              <CheckButtonWithText
                label="remember-me"
                value="selected"
                text="I agree to the"
              />
              <LinkText
                href="google.com"
                text="Terms & Conditions"
                className="!text-base font-bold"
              />
            </div>
          }
          btnText="Signup"
        />
      }
    />
  );
}
