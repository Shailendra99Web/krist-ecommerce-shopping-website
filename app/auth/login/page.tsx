"use client";

import TemplateAuthPage from "@/sections/templateAuthPage/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import ButtonWithTransparentBackground from "@/components/buttons/buttonWithTransparentBg/page";
import { useState } from "react";
import TemplateAuthPageForm from "@/sections/templateAuthPageForm/page";
import InputFieldOtpSixDigit from "@/components/inputFieldOtpSixDigit/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/authSchemas";
import { useForm } from "react-hook-form";
import { z } from "zod";

type AllForms = "formLogin" | "formForgotPassword" | "formEnterOtp";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState<AllForms>("formLogin"); // To set current visible form.
  const [coverImgClassName, setCoverImgClassName] = useState(""); // For animation.
  const [formClassName, setFormClassName] = useState(""); // For animation.

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  type LoginForm = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema) // ← ここでZodを統合
  });

  async function onSubmit(data: LoginForm) {
    if (currentForm === "formForgotPassword" || currentForm === "formEnterOtp")
      return null;
    try {
      console.log(data);
      const { email, password } = data;

      const bodyData = {
        email,
        password
      };
      const res = await fetch("http://localhost:7500/api/auth/login", {
        body: JSON.stringify(bodyData),
        method: "POST",
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

  // All login section forms
  const forms = {
    // Below is Login form.
    formLogin: {
      coverImgUrl: "/images/login-girl.png",
      btnBackOnClick: undefined,
      heading: "Welcome 👋",
      subheading: "please login here",
      inputFields: (
        <>
          <InputFieldWithTitle
            reactHookFormRegister={register}
            type="text"
            htmlFor_Id_Name="email"
            title="Email Address"
            inputPlaceholder="Enter Email Address"
            stateName={"email"}
            inputRequired={true}
            inputError={errors.email}
          />
          <InputFieldWithTitle
            reactHookFormRegister={register}
            type="password"
            htmlFor_Id_Name="password"
            title="Password"
            inputPlaceholder="Enter Password"
            stateName={"password"}
            inputRequired={true}
            inputError={errors.password}
          />
        </>
      ),
      options: (
        <>
          <CheckButtonWithText
            label="remember-me"
            value="selected"
            text="Remember Me"
          />
          <ButtonWithTransparentBackground
            Btntext="Forgot Password?"
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              changeForm("formForgotPassword");
            }}
          />
        </>
      ),
      btnCta: {
        text: "Login"
        // onClick: () => { formOnSubmit(); }
      }
    },
    // Below is Forgot Password form.
    formForgotPassword: {
      coverImgUrl: "/images/forgot-password-girl.png",
      btnBackOnClick: () => changeForm("formLogin"),
      heading: "Forgot Password",
      subheading:
        "Enter your registered email address. we’ll send you a code to reset your password.",
      inputFields: (
        <>
          <InputFieldWithTitle
            type="text"
            htmlFor_Id_Name="forgot-password-email"
            title="Email Address"
            inputPlaceholder="Enter Email Address"
            stateName={"email"}
            inputError={errors.email}
            inputRequired={true}
            reactHookFormRegister={register}
          />
        </>
      ),
      options: <></>,
      btnCta: {
        text: "Send OTP"
        // onClick: () => {
        //   changeForm('formEnterOtp')
        // }
      }
    },
    // Below is Enter OTP (OTP Verfication) form.
    formEnterOtp: {
      coverImgUrl: "/images/enter-otp-girl.png",
      btnBackOnClick: () => changeForm("formForgotPassword"),
      heading: "Enter OTP",
      subheading:
        "We have share a code of your registered email address robertfox@example.com",
      inputFields: (
        <>
          {/* OTP入力用のフィールドをここに追加することもできます */}
          <InputFieldOtpSixDigit />
        </>
      ),
      options: <></>,
      btnCta: {
        text: "Verify"
        // onClick: () => {
        //   console.log('clicked Verify')
        // }
      }
    }
  };

  // To change form by according to forms object's value / To apply transition while elements / components changing.
  const changeForm = (formName: AllForms) => {
    // Animations are in 3 parts:
    setCoverImgClassName("opacity-0");
    setFormClassName("opacity-0 -translate-x-full");

    setTimeout(() => {
      setCurrentForm(formName);
      setCoverImgClassName("opacity-100");
      setFormClassName("opacity-0 translate-x-full duration-200");
    }, 150);

    setTimeout(() => {
      setFormClassName("opacity-100 translate-x-0");
    }, 300);
  };

  return (
    <TemplateAuthPage
      formName={currentForm}
      coverImgClassName={coverImgClassName}
      coverImgUrl={forms[currentForm].coverImgUrl}
      form={
        <TemplateAuthPageForm
          formName={currentForm}
          btnBackOnClick={
            forms[currentForm].btnBackOnClick
              ? forms[currentForm].btnBackOnClick
              : () => {}
          }
          heading={forms[currentForm].heading}
          subheading={forms[currentForm].subheading}
          inputFields={forms[currentForm].inputFields}
          options={forms[currentForm].options}
          btnText={forms[currentForm].btnCta.text}
          // btnOnClick={forms[currentForm].btnCta.onClick}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        />
      }
      formClassName={formClassName}
    />
  );
}

export default LoginPage;
