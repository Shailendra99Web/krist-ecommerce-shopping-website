interface SelectFieldWithTitleProps {
  reactHookFormRegister: any;
  htmlFor_Id_Name: string;
  title: string;
  type: string;
  inputPlaceholder: string;
  stateName: string;
  inputError: any;
  inputRequired: boolean;
  options: any[];
  className?: string;
}

function SelectFieldWithTitle({
  reactHookFormRegister,
  htmlFor_Id_Name,
  type,
  title,
  inputPlaceholder,
  stateName,
  inputError,
  inputRequired,
  options,
  className
}: SelectFieldWithTitleProps) {
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={htmlFor_Id_Name} className="text-xs">
        {title}
      </label>
      <select
        {...reactHookFormRegister(stateName, { required: inputRequired })}
        type={type}
        name={htmlFor_Id_Name}
        id={htmlFor_Id_Name}
        placeholder={inputPlaceholder}
        className={`border-primary-500 rounded-lg2 border-1 p-4 ${className}`}
      >
        {options.map((option, i) => (
          <option value={option} key={i}>{option}</option>
        ))}
      </select>
      {inputError ? <p>{inputError}</p> : null}
    </div>
  );
}

export default SelectFieldWithTitle;
