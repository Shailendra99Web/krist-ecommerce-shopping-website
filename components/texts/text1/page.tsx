interface Text1Props {
    text: string
};

function Text1({ text }: Text1Props) {
    return (
        <p className="text-[#A4A1AA]">{text}</p>
    )
}

export default Text1;