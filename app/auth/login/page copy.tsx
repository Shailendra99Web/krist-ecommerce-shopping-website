// 'use client'

// import AuthPage from "@/sections/templateAuthPage/page";
// import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
// import CheckButtonWithText from "@/components/checkButtonWithText/page";
// import ButtonWithTransparentBackground from "@/components/buttons/buttonWithTransparentBg/page";
// import { useState } from "react";

// export default function LoginPage() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const changeForm = (formName: string) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <AuthPage
//       authType="login"
//       formLogin={{
//         coverImgUrl: "/images/login-girl.png",
//         heading: "Welcome 👋",
//         subheading: "please login here",
//         inputFields: <>
//           <InputFieldWithTitle type="text" htmlFor_Id_Name="email" title='Email Address' inputPlaceholder='Enter Email Address' />
//           <InputFieldWithTitle type="password" htmlFor_Id_Name="password" title='Password' inputPlaceholder='Enter Password' />
//         </>,
//         options: <>
//           <CheckButtonWithText label="remember-me" value="selected" text="Remember Me" />
//           <ButtonWithTransparentBackground Btntext="Forgot Password?" onClick={()=>{}} />
//         </>,
//         btnCta: {
//           text: "Login",
//           onClick: ''
//         }
//       }}
//       formForgotPassword={{
//         coverImgUrl: "/images/forgot-password-girl.png",
//         btnBackOnClick: changeForm('forgot-password'),
//         heading: "Forgot Password",
//         subheading: "Enter your registered email address. we’ll send you a code to reset your password.",
//         inputFields: <>
//           <InputFieldWithTitle type="text" htmlFor_Id_Name="forgot-password-email" title='Email Address' inputPlaceholder='Enter Email Address' />
//         </>,
//         btnCta: {
//           text: "Send OTP",
//           onClick: ''
//         }
//       }}
//       formEnterOtp={{
//         coverImgUrl: "/images/enter-otp-girl.png",
//         btnBackOnClick: ()=>changeForm('forgot-password'),
//         heading: "Welcome 👋",
//         subheading: "please login here",
//         inputFields: <>
//           <InputFieldWithTitle type="text" htmlFor_Id_Name="email" title='Email Address' inputPlaceholder='Enter Email Address' />
//           <InputFieldWithTitle type="password" htmlFor_Id_Name="password" title='Password' inputPlaceholder='Enter Password' />
//         </>,
//         btnCta: {
//           text: "Verify",
//           onClick: ''
//         }
//       }}
//     />
//   )
// }

// // formLogin={
// //   <div className="w-full">

// //     {/* Heading */}
// //     <div className="flex flex-col gap-y-1 mb-7.5">
// //       <Header1 text="Welcome 👋" />
// //       <Text1 text="please login here" />
// //     </div>

// //     <div className="flex flex-col gap-4 mb-4">
// //       <InputFieldWithTitle type="text" htmlFor_Id_Name="email" title='Email Address' inputPlaceholder='Enter Email Address' />
// //       <InputFieldWithTitle type="password" htmlFor_Id_Name="password" title='Password' inputPlaceholder='Enter Password' />
// //     </div>

// //     <div className="flex items-center justify-between mb-7.5">
// //       <CheckButtonWithText label="remember-me" value="selected" text="Remember Me" />
// //       <ButtonWithTransparentBackground Btntext="Forgot Password?" onClick={() => { }} />
// //     </div>

// //     <Button Btntext={'Login'} onClick={() => { console.log('clicked') }} />
// //   </div>
// // }

// // formForgotPassword={
// //   <div className="w-full">
// //     <div className="flex gap-1 items-center mb-7.5">
// //       <img src="/icons/arrow-left.svg" alt="left-arrow"/>
// //       <div className="text-primary-500 cursor-pointer">Back</div>
// //     </div>

// //     {/* Heading */}
// //     <div className="flex flex-col gap-y-1 mb-7.5">
// //       <Header1 text="Forgot Password" />
// //       <Text1 text="Enter your registered email address. we’ll send you a code to reset your password." />
// //     </div>

// //     <div className="flex flex-col gap-4 mb-4">
// //       <InputFieldWithTitle type="text" htmlFor_Id_Name="forgot-password-email" title='Email Address' inputPlaceholder='Enter Email Address' />
// //     </div>

// //     <Button Btntext={'Send OTP'} onClick={() => { console.log('clicked') }} />
// //   </div>
// // }

// // formEnterOtp={
// //   <div className="w-full">
// //         <div className="flex gap-1 items-center mb-7.5">
// //           <img src="/icons/arrow-left.svg" alt="left-arrow"/>
// //           <div className="text-primary-500 cursor-pointer">Back</div>
// //         </div>

// //         {/* Heading */}
// //         <div className="flex flex-col gap-y-1 mb-7.5">
// //           <Header1 text="Enter OTP" />
// //           <Text1 text="We have share a code of your registered email address robertfox@example.com" />
// //         </div>

// //         <div className="flex flex-col gap-4 mb-4">
// //           <InputFieldWithTitle type="text" htmlFor_Id_Name="forgot-password-email" title='Email Address' inputPlaceholder='Enter Email Address' />
// //         </div>

// //         <Button Btntext={'Verify'} onClick={() => { console.log('clicked') }} />
// //       </div>
// // }