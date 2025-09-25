'use client'

import AuthPage from "@/sections/templateAuthPage/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import ButtonWithTransparentBackground from "@/components/buttons/buttonWithTransparentBg/page";
import { useState } from "react";
import TemplateAuthPageForm from "@/sections/templateAuthPageForm/page";

type AllForms = 'formLogin' | 'formForgotPassword' | 'formEnterOtp';

function LoginPage() {
  const [currentForm, setCurrentForm] = useState<AllForms>('formLogin');
  const [coverImgClassName, setCoverImgClassName] = useState('')
  const [formClassName, setFormClassName] = useState('')

  // All login section forms 
  const forms = {
    formLogin: {
      coverImgUrl: "/images/login-girl.png",
      btnBackOnClick: undefined,
      heading: "Welcome 👋",
      subheading: "please login here",
      inputFields: (
        <>
          <InputFieldWithTitle type="text" htmlFor_Id_Name="email" title="Email Address" inputPlaceholder="Enter Email Address" />
          <InputFieldWithTitle type="password" htmlFor_Id_Name="password" title="Password" inputPlaceholder="Enter Password" />
        </>
      ),
      options: (
        <>
          <CheckButtonWithText label="remember-me" value="selected" text="Remember Me" />
          <ButtonWithTransparentBackground Btntext="Forgot Password?" onClick={() => changeForm('formForgotPassword')} />
        </>
      ),
      btnCta: {
        text: "Login",
        onClick: () => {
          console.log('clicked Login')
        }
      }
    },
    formForgotPassword: {
      coverImgUrl: "/images/forgot-password-girl.png",
      btnBackOnClick: () => changeForm('formLogin'),
      heading: "Forgot Password",
      subheading: "Enter your registered email address. we’ll send you a code to reset your password.",
      inputFields: (
        <>
          <InputFieldWithTitle type="text" htmlFor_Id_Name="forgot-password-email" title="Email Address" inputPlaceholder="Enter Email Address" />
        </>
      ),
      options: <></>,
      btnCta: {
        text: "Send OTP",
        onClick: () => {
          changeForm('formEnterOtp')
        }
      }
    },
    formEnterOtp: {
      coverImgUrl: "/images/enter-otp-girl.png",
      btnBackOnClick: () => changeForm('formForgotPassword'),
      heading: "Enter OTP",
      subheading: "We have share a code of your registered email address robertfox@example.com",
      inputFields: (
        <>
          {/* OTP入力用のフィールドをここに追加することもできます */}
        </>
      ),
      options: <></>,
      btnCta: {
        text: "Verify",
        onClick: () => {
          console.log('clicked Verify')
        }
      }
    },
  }

  // To change form by according to forms object's value / To apply transition while elements / components changing
  const changeForm = (formName: AllForms) => {
    setCoverImgClassName('opacity-0');
    setFormClassName('opacity-0 -translate-x-full');

    setTimeout(() => {
      setCurrentForm(formName);
      setCoverImgClassName('opacity-100');
      setFormClassName('opacity-0 translate-x-full');
    }, 180);

    setTimeout(() => {
      setFormClassName('opacity-100 translate-x-0');
    }, 300);
  }

  return (
    <AuthPage
      formName={currentForm}
      coverImgClassName={coverImgClassName}
      coverImgUrl={forms[currentForm].coverImgUrl}
      form={
        <TemplateAuthPageForm
          formName={currentForm}
          btnBackOnClick={forms[currentForm].btnBackOnClick ? forms[currentForm].btnBackOnClick : () => console.log('hello')}
          heading={forms[currentForm].heading}
          subheading={forms[currentForm].subheading}
          inputFields={forms[currentForm].inputFields}
          options={forms[currentForm].options}
          btnText={forms[currentForm].btnCta.text}
          btnOnClick={forms[currentForm].btnCta.onClick}
        />
      }
      formClassName={formClassName}
    />
  )
}

export default LoginPage

// formLogin={
//   <div className="w-full">

//     {/* Heading */}
//     <div className="flex flex-col gap-y-1 mb-7.5">
//       <Header1 text="Welcome 👋" />
//       <Text1 text="please login here" />
//     </div>

//     <div className="flex flex-col gap-4 mb-4">
//       <InputFieldWithTitle type="text" htmlFor_Id_Name="email" title='Email Address' inputPlaceholder='Enter Email Address' />
//       <InputFieldWithTitle type="password" htmlFor_Id_Name="password" title='Password' inputPlaceholder='Enter Password' />
//     </div>

//     <div className="flex items-center justify-between mb-7.5">
//       <CheckButtonWithText label="remember-me" value="selected" text="Remember Me" />
//       <ButtonWithTransparentBackground Btntext="Forgot Password?" onClick={() => { }} />
//     </div>

//     <Button Btntext={'Login'} onClick={() => { console.log('clicked') }} />
//   </div>
// }

// formForgotPassword={
//   <div className="w-full">
//     <div className="flex gap-1 items-center mb-7.5">
//       <img src="/icons/arrow-left.svg" alt="left-arrow"/>
//       <div className="text-primary-500 cursor-pointer">Back</div>
//     </div>

//     {/* Heading */}
//     <div className="flex flex-col gap-y-1 mb-7.5">
//       <Header1 text="Forgot Password" />
//       <Text1 text="Enter your registered email address. we’ll send you a code to reset your password." />
//     </div>

//     <div className="flex flex-col gap-4 mb-4">
//       <InputFieldWithTitle type="text" htmlFor_Id_Name="forgot-password-email" title='Email Address' inputPlaceholder='Enter Email Address' />
//     </div>

//     <Button Btntext={'Send OTP'} onClick={() => { console.log('clicked') }} />
//   </div>
// }

// formEnterOtp={
//   <div className="w-full">
//         <div className="flex gap-1 items-center mb-7.5">
//           <img src="/icons/arrow-left.svg" alt="left-arrow"/>
//           <div className="text-primary-500 cursor-pointer">Back</div>
//         </div>

//         {/* Heading */}
//         <div className="flex flex-col gap-y-1 mb-7.5">
//           <Header1 text="Enter OTP" />
//           <Text1 text="We have share a code of your registered email address robertfox@example.com" />
//         </div>

//         <div className="flex flex-col gap-4 mb-4">
//           <InputFieldWithTitle type="text" htmlFor_Id_Name="forgot-password-email" title='Email Address' inputPlaceholder='Enter Email Address' />
//         </div>

//         <Button Btntext={'Verify'} onClick={() => { console.log('clicked') }} />
//       </div>
// }