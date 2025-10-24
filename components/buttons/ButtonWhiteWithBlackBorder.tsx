interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  btnColorType?: "black" | "white";
  btntext?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: any;
}

function ButtonWhiteWithBlackBorder({
  type = "button",
  btnColorType = "black",
  btntext,
  onClick,
  className,
  icon
}: ButtonProps) {
  const buttonColorTypeClass = {
    black:
      "bg-primary-500 hover:bg-white text-white group-hover:text-primary-500 hover:text-primary-500",
    white:
      "bg-white hover:bg-primary-500 text-primary-500 group-hover:text-white hover:text-white"
  };

  const buttonColorTypeIconClass = {
    black: "text-white group-hover:text-primary-500",
    white: "text-primary-500 group-hover:text-white"
  };

  return (
    // <button type={type} className="w-full bg-primary-500 text-white rounded-lg2 p-4 cursor-pointer">
    <button
      type={type}
      className={`group border-primary-500 rounded-md flex-center w-full cursor-pointer border-[1px] p-4 ${btnColorType === "black" ? buttonColorTypeClass.black : buttonColorTypeClass.white} ${className}`}
      onClick={onClick}
    >
      {btntext && btntext}
      {icon && (
        <div
          className={
            btnColorType === "black"
              ? buttonColorTypeIconClass.black
              : buttonColorTypeIconClass.white
          }
        >
          {icon}
        </div>
      )}
    </button>
    // <input type={type} className="w-full bg-primary-500 text-white rounded-lg2 p-4 cursor-pointer" />
  );
}

export default ButtonWhiteWithBlackBorder;
