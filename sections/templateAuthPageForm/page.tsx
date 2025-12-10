// Login / Signup page from template.
import Header1 from "@/components/headers/h1/page";
import Text1 from "@/components/texts/text1/page";

interface TemplateAuthPageFormProps {
  onSubmit: (data: any) => void;
  handleSubmit: any;
  formName: string;
  btnBackOnClick?: () => void;
  inputFields: React.ReactNode;
  heading: string;
  subheading: string;
  options: React.ReactNode;
  btnText: string;
  // btnOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function TemplateAuthPageForm({
  onSubmit,
  handleSubmit,
  formName,
  btnBackOnClick,
  heading,
  subheading,
  inputFields,
  options,
  btnText
}: TemplateAuthPageFormProps) {
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {formName !== "formLogin" && formName !== "formSignup" ? (
        <div
          className="mb-7.5 flex w-max cursor-pointer items-center gap-1"
          onClick={btnBackOnClick}
        >
          <img src="/icons/arrow-left.svg" alt="left-arrow" />
          <div className="text-primary-500">Back</div>
        </div>
      ) : null}

      {/* Heading */}
      <div className="mb-7.5 flex flex-col gap-y-1">
        <Header1 text={heading} />
        <Text1 text={subheading} />
      </div>

      {/* Input Fields */}
      <div className="mb-4 flex flex-col gap-4">{inputFields}</div>

      {/* Options */}
      <div className="mb-7.5 flex items-center justify-between">{options}</div>

      {/* <input type="submit" className="bg-pink-600 text-white" /> */}
      <input
        type={"submit"}
        className="bg-primary-500 rounded-lg2 w-full cursor-pointer p-4 text-white"
      />
      {formName === "formLogin" && (
        <div className="mt-5 text-center text-sm text-gray-500">
          {"Don't have an account? "}
          <a
            href="/auth/signup"
            className="text-primary-500 underline hover:text-primary-600 transition-colors"
          >
            Sign up
          </a>
        </div>
      )}
      {formName === "formSignup" && (
        <div className="mt-5 text-center text-sm text-gray-500">
          {"Already have an account? "}
          <a
            href="/auth/login"
            className="text-primary-500 underline hover:text-primary-600 transition-colors"
          >
            Log in
          </a>
        </div>
      )}

      {/* CTA button */}
      {/* <Button type="submit" btntext={btnText}/> */}
      {/* <Button type="submit" btntext={btnText} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); btnOnClick(event) }} /> */}
    </form>
  );
}

export default TemplateAuthPageForm;
