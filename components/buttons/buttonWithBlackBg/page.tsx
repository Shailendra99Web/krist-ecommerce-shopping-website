interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  btnColorType?: "black" | "gray";
  btntext?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: any;
}

function ButtonWithBlackBg({
  type = "button",
  btnColorType = "black",
  btntext,
  onClick,
  className,
  icon
}: ButtonProps) {
  const buttonColorTypeClass = {
    black:
      "bg-primary-500 hover:bg-gray-100 !text-gray-100 group-hover:text-primary-500 hover:!text-primary-500",
    gray: "bg-gray-100 hover:bg-primary-500 !text-primary-500 group-hover:text-gray-100 hover:!text-gray-100"
  };

  const buttonColorTypeIconClass = {
    black: "text-gray-100 group-hover:text-primary-500",
    gray: "text-primary-500 group-hover:text-gray-100"
  };

  return (
    // <button type={type} className="w-full bg-primary-500 text-white rounded-lg2 p-4 cursor-pointer">
    <button
      type={type}
      className={`group rounded-lg2 flex-center w-full cursor-pointer p-4 ${btnColorType === "black" ? buttonColorTypeClass.black : buttonColorTypeClass.gray} ${className}`}
      onClick={onClick}
    >
      {btntext && btntext}
      {icon && (
        <div
          className={
            btnColorType === "black"
              ? buttonColorTypeIconClass.black
              : buttonColorTypeIconClass.gray
          }
        >
          {icon}
        </div>
      )}
    </button>
    // <input type={type} className="w-full bg-primary-500 text-white rounded-lg2 p-4 cursor-pointer" />
  );
}

export default ButtonWithBlackBg;
