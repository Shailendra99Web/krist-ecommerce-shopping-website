interface ButtonProps {
    Btntext: string;
    onClick: ()=>void;
    className?: string;
}

function ButtonWithTransparentBackground({ Btntext, onClick, className }: ButtonProps) {
    return (
        <button
            className={`text-primary-500 text-sm cursor-pointer ${className ? className : ''}`}
            onClick={onClick}
        >
            {Btntext}
        </button>
    );
}

export default ButtonWithTransparentBackground;