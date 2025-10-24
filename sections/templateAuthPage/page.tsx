// Login / Signup page template.
"use client";

import Logo from "@/components/logo/page";

interface TemplateAuthPageProps {
  formName: string;
  coverImgUrl: string;
  coverImgClassName: string;
  form: React.ReactNode;
  formClassName?: string;
}

function TemplateAuthPage({
  formName,
  coverImgUrl,
  coverImgClassName,
  form,
  formClassName
}: TemplateAuthPageProps) {
  return (
    <div className="relative flex items-center overflow-x-hidden">
      {formName === "formLogin" || formName === "formSignup" ? (
        <div className="absolute top-15 left-15 z-20">
          <Logo />
        </div>
      ) : null}
      <div className="bg-background relative z-10 w-[58.7%]">
        <img
          src={coverImgUrl}
          alt=""
          className={`object-cover transition-opacity ${coverImgClassName}`}
        />
      </div>
      <div
        className={`mx-12.5 max-w-[445px] grow transition-all ${formClassName}`}
      >
        {form}
      </div>
    </div>
  );
}

export default TemplateAuthPage;
