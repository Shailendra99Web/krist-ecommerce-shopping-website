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

// Zod Schemas
// const signupSchema = z.object({
//   firstName: z.string().min(3, 'First name must be at least 3 characters'),
//   lastName: z.string().optional(),
//   email: z.string().email('Please enter a valid email address'),
//   password: z.string().min(5, 'Password must be at least 5 characters')
// });

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  // const [firstName, setFirstName] = useState<string>('')
  // const [lastName, setLastName] = useState<string>('')
  // const [email, setEmail] = useState<string>('')
  // const [password, setPassword] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema) // ← ここでZodを統合
  });

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
      const res = await fetch("http://localhost:7500/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res: any) => res.json());
      console.log("response data:", res);
      if (res.success == true) {
        localStorage.setItem("krist-shopping-website-token", res.token);
        alert(res.message);
      }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  }

  // async function formOnSubmit() {
  //   try {
  //     console.log('firstName:', firstName, 'lastName:', lastName, 'email:', email, 'password:', password)

  //     const bodyData = {
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       password: password
  //     }
  //     const res = await fetch('http://localhost:7500/api/auth/signup', {
  //       method: 'POST',
  //       body: JSON.stringify(bodyData),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }).then((res: any) => res.json())
  //     console.log('response data:', res);
  //   }
  //   catch (err) {
  //     console.error('Something went wrong', err);
  //   }
  // }

  return (
    <AuthPage
      formName="formSignup"
      coverImgClassName=""
      coverImgUrl="/images/signup-boy.png"
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
