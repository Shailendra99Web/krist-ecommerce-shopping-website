'use client'

import AuthPage from "@/sections/templateAuthPage/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import LinkText from "@/components/linkText/page";
import TemplateAuthPageForm from "@/sections/templateAuthPageForm/page";

export default function SignupPage() {
  return (
    <AuthPage
      formName="formSignup"
      coverImgClassName=''
      coverImgUrl="/images/signup-boy.png"
      form={
        <TemplateAuthPageForm
          formName="formSignup"
          heading="Create New Account"
          subheading="please enter details"
          inputFields={
            <>
              <InputFieldWithTitle type='text' htmlFor_Id_Name="first-name" title='First Name' inputPlaceholder='Enter First Name' />
              <InputFieldWithTitle type='text' htmlFor_Id_Name="last-name" title='Last Name' inputPlaceholder='Enter Last Name' />
              <InputFieldWithTitle type='email' htmlFor_Id_Name="email" title='Email Address' inputPlaceholder='Enter Email Address' />
              <InputFieldWithTitle type='password' htmlFor_Id_Name="password" title='Password' inputPlaceholder='Enter Password' />
            </>
          }
          options={
            <div className="flex items-center gap-1 mb-7.5">
              <CheckButtonWithText label="remember-me" value="selected" text="I agree to the" />
              <LinkText href="google.com" text="Terms & Conditions" className="font-bold !text-base" />
            </div>
          }
          btnText="Signup"
          btnOnClick={() => { console.log('clicked Signup') }}
        />
      }
    />
  );
}

// formSignup={
//   <div className="w-full">
//         {/* Heading */}
//         <div className="flex flex-col gap-y-1 mb-7.5">
//           <Header1 text="Create New Account"/>
//           <Text1 text="please enter details"/>
//         </div>

//         <div className="flex flex-col gap-4 mb-4">
//           <InputFieldWithTitle type='text' htmlFor_Id_Name="first-name" title='First Name' inputPlaceholder='Enter First Name' />
//           <InputFieldWithTitle type='text' htmlFor_Id_Name="last-name" title='Last Name' inputPlaceholder='Enter Last Name' />
//           <InputFieldWithTitle type='email' htmlFor_Id_Name="email" title='Email Address' inputPlaceholder='Enter Email Address' />
//           <InputFieldWithTitle type='password' htmlFor_Id_Name="password" title='Password' inputPlaceholder='Enter Password' />
//         </div>

//         <div className="flex items-center gap-1 mb-7.5">
//           <CheckButtonWithText label="remember-me" value="selected" text="I agree to the" />
//           <LinkText href="google.com" text="Terms & Conditions" className="font-bold !text-base" />
//         </div>

//         <Button Btntext={'Signup'} onClick={() => { console.log('clicked') }} />
//       </div>
// }