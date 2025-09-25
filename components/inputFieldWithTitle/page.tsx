interface InputFieldWithTitleProps {
    htmlFor_Id_Name: string;
    title: string;
    type: string;
    inputPlaceholder: string;
}


function InputFieldWithTitle({ htmlFor_Id_Name, type, title, inputPlaceholder }: InputFieldWithTitleProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={htmlFor_Id_Name} className="text-xs">{title}</label>
            <input type={type} name={htmlFor_Id_Name} id={htmlFor_Id_Name} placeholder={inputPlaceholder} className="p-4 border-primary-500 rounded-lg2 border-1"></input>
        </div>
    )
}

export default InputFieldWithTitle;