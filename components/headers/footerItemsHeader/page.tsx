interface FooterItemsHeaderProps {
  btnText: string;
}

function FooterItemsHeader({ btnText }: FooterItemsHeaderProps) {
  return <div className="mb-3.5 font-semibold">{btnText}</div>;
}

export default FooterItemsHeader;
