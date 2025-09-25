interface ButtonProps {
    Btntext: string;
    onClick: () => void;
}

function Button({ Btntext, onClick }: ButtonProps) {
    return (
        <button className="w-full bg-primary-500 text-white rounded-lg2 p-4 cursor-pointer" onClick={onClick}>
            {Btntext}
        </button>
    )
}

export default Button;