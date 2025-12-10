import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";

interface InputFieldWithTitleAndButtonProps {
  // reactHookFormRegister: any;
  htmlFor_Id_Name: string;
  title: string;
  type: string;
  inputPlaceholder: string;
  inputError: any;
  // stateName: string;
  // inputRequired: boolean;
}

function InputFieldWithTitleAndButton({
  // reactHookFormRegister,
  htmlFor_Id_Name,
  type,
  title,
  inputPlaceholder,
  inputError
  // stateName,
  // inputRequired
}: InputFieldWithTitleAndButtonProps) {
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={htmlFor_Id_Name} className="text-xs">
        {title}
      </label>
      <div className="flex">
        <input
          //   {...reactHookFormRegister(stateName, { required: inputRequired })}
          type={type}
          name={htmlFor_Id_Name}
          id={htmlFor_Id_Name}
          placeholder={inputPlaceholder}
          className="border-primary-500 rounded-lg2 border-1 p-4 rounded-br-none rounded-tr-none"
        ></input>
        <ButtonWithBlackBg btntext="Apply" className="rounded-bl-none rounded-tl-none border-1 border-primary-500"/>
      </div>
      {inputError ? <p>{inputError}</p> : null}
    </div>
  );
}

export default InputFieldWithTitleAndButton;
