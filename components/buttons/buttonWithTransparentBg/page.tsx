interface ButtonProps {
  Btntext: string;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}

function ButtonWithTransparentBackground({
  Btntext,
  onClick,
  className
}: ButtonProps) {
  return (
    <button
      className={`text-primary-500 cursor-pointer text-sm ${className ? className : ""}`}
      onClick={(e) => onClick(e)}
    >
      {Btntext}
    </button>
  );
}

export default ButtonWithTransparentBackground;
