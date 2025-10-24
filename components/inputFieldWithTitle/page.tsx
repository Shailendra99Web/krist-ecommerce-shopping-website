interface InputFieldWithTitleProps {
  reactHookFormRegister: any;
  htmlFor_Id_Name: string;
  title: string;
  type: string;
  inputPlaceholder: string;
  stateName: string;
  inputError: any;
  inputRequired: boolean;
}

function InputFieldWithTitle({
  reactHookFormRegister,
  htmlFor_Id_Name,
  type,
  title,
  inputPlaceholder,
  stateName,
  inputError,
  inputRequired
}: InputFieldWithTitleProps) {
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={htmlFor_Id_Name} className="text-xs">
        {title}
      </label>
      <input
        {...reactHookFormRegister(stateName, { required: inputRequired })}
        type={type}
        name={htmlFor_Id_Name}
        id={htmlFor_Id_Name}
        placeholder={inputPlaceholder}
        className="border-primary-500 rounded-lg2 border-1 p-4"
      ></input>
      {inputError ? <p>{inputError}</p> : null}
    </div>
  );
}

export default InputFieldWithTitle;

{
  /* <div className="flex flex-col gap-1">
            <label htmlFor={htmlFor_Id_Name} className="text-xs">{title}</label>
            <input {...reactHookFormRegister("email", { required: true })} onChange={(event) => setState(event.target.value)} type={type} name={htmlFor_Id_Name} id={htmlFor_Id_Name} placeholder={inputPlaceholder} className="p-4 border-primary-500 rounded-lg2 border-1"></input>
        </div> */
}
