interface ButtonRoundWithIconProps {
  className?: string;
  icon: any;
  onClick?: () => void;
}

function ButtonRoundWithIcon({
  className,
  icon,
  onClick
}: ButtonRoundWithIconProps) {
  return (
    <button
      className={`hover:fill-primary-500 hover:bg-primary-500 cursor-pointer rounded-full bg-white p-1.5 hover:text-white ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ButtonRoundWithIcon;
