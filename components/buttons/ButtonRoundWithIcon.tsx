interface ButtonRoundWithIconProps {
    className?: string;
    icon: any;
  }
  
  function ButtonRoundWithIcon({className, icon }: ButtonRoundWithIconProps) {
    return (
      <button
        className={`cursor-pointer hover:fill-primary-500 hover:bg-primary-500 rounded-full bg-white p-1.5 hover:text-white ${className}`}
      >
        {icon}
      </button>
    );
  }
  
  export default ButtonRoundWithIcon;
  