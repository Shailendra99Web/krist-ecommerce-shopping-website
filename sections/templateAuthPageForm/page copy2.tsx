import Button from "@/components/buttons/buttonWithBlackBg/page";
import ButtonWithTransparentBackground from "@/components/buttons/buttonWithTransparentBg/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import Header1 from "@/components/headers/h1/page";
import Text1 from "@/components/texts/text1/page";

interface TemplateAuthPageFormProps {
    formName: string;
    btnBackOnClick?: ()=> void;
    inputFields: React.ReactNode;
    heading: string;
    subheading: string;
    options: React.ReactNode;
    btnText: string;
    btnOnClick: () => void
}

function TemplateAuthPageForm({ formName, btnBackOnClick, heading, subheading, inputFields, options, btnText, btnOnClick }: TemplateAuthPageFormProps) {
    return (
        <div className="w-full">
            {(formName !== "formLogin" && formName !== "formSignup") ? <div className="flex gap-1 items-center mb-7.5 cursor-pointer" onClick={btnBackOnClick}>
                <img src="/icons/arrow-left.svg" alt="left-arrow" />
                <div className="text-primary-500">Back</div>
            </div> : null}

            {/* Heading */}
            <div className="flex flex-col gap-y-1 mb-7.5">
                <Header1 text={heading} />
                <Text1 text={subheading} />
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-4 mb-4">
                {inputFields}
            </div>

            {/* Options */}
            <div className="flex items-center justify-between mb-7.5">
                {options}
            </div>

            {/* CTA button */}
            <Button Btntext={btnText} onClick={btnOnClick} />
        </div>
    )
}

export default TemplateAuthPageForm;