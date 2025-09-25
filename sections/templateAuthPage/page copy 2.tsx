// Login / Signup page template
"use client"

import Logo from "@/components/logo/page";

interface AuthPageProps {
    formName: string;
    coverImgUrl: string;
    coverImgClassName: string;
    form: React.ReactNode;
    formClassName?: string;
}

function AuthPage({ formName, coverImgUrl, coverImgClassName, form, formClassName }: AuthPageProps) {
    return (
        <div className="flex items-center relative overflow-x-hidden">
            {(formName === "formLogin" || formName === "formSignup") ? <div className="absolute top-15 left-15 z-20"><Logo /></div> : null}
            <div className="w-[58.7%] bg-background z-10 relative">
                <img src={coverImgUrl} alt="" className={`object-cover transition-opacity ${coverImgClassName}`} />
            </div>
            <div className={`grow mx-12.5 max-w-[445px] transition-all duration-300 ${formClassName}`}>
                {form}
            </div>
        </div>
    )
}

export default AuthPage