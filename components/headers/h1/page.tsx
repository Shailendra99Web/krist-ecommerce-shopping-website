interface Header1Props {
    text: string;
}

function Header1({ text }: Header1Props) {
    return (
        <h1 className="font-bold text-3xl">{text}</h1>
    )
}

export default Header1;