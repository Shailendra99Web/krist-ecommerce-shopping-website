interface ButtonRoundWithIcon2Props {
  className?: string;
  icon: any;
  onClick?: ()=>void;
}

function ButtonRoundWithIcon2({
  className,
  icon,
  onClick = () => {}
}: ButtonRoundWithIcon2Props) {
  return (
    <button
      className={`hover:fill-primary-500 hover:bg-primary-500 cursor-pointer rounded-full bg-white p-2.5 hover:text-white ${className}`}
      onClick={() => onClick()}
    >
      {icon}
    </button>
  );
}

export default ButtonRoundWithIcon2;
