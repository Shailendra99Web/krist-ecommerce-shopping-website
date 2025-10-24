interface Header1Props {
  text: string;
}

function Header1({ text }: Header1Props) {
  return <h1 className="text-3xl font-bold">{text}</h1>;
}

export default Header1;
