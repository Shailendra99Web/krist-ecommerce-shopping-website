// // Login / Signup page template
// "use client"

// import Logo from "@/components/logo/page";
// import TemplateAuthPageForm from "../templateAuthPageForm/page";

// interface AuthPageProps {
//     authType: string;
//     formLogin?: any;
//     formForgotPassword?: any;
//     formEnterOtp?: any;
//     formSignup?: any;
// }

// function AuthPage({ formLogin }: AuthPageProps) {
//     return (
//         <div className="flex items-center">
//             <div className="absolute top-15 left-15"><Logo /></div>
//             <img src={formLogin.coverImgUrl} alt="" className="w-[58.7%]" />
//             <div className="grow mx-12.5 max-w-[445px]">
//                 <TemplateAuthPageForm
//                     heading={formLogin.heading}
//                     subheading={formLogin.subheading}
//                     inputFields={formLogin.inputFields}
//                     options={formLogin.options}
//                     btnText={formLogin.btnCta.text}
//                     btnOnClick={formLogin.btnCta.onClick}
//                 />
//             </div>
//         </div>
//     )
// }

// export default AuthPage