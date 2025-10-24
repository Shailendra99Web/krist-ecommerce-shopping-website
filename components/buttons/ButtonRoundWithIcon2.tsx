interface ButtonRoundWithIcon2Props {
  className?: string;
  icon: any;
}

function ButtonRoundWithIcon2({className, icon }: ButtonRoundWithIcon2Props) {
  return (
    <button
      className={`hover:fill-primary-500 hover:bg-primary-500 rounded-full bg-white p-2.5 hover:text-white ${className}`}
    >
      {icon}
    </button>
  );
}

export default ButtonRoundWithIcon2;
