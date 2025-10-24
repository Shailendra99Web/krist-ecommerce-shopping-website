import FooterItemsHeader from "@/components/headers/footerItemsHeader/page";

interface FooterNavListBlockProps {
  title: string;
  navItems: string[];
}

function FooterNavListBlock({ title, navItems }: FooterNavListBlockProps) {
  return (
    <div className="flex w-35 flex-col items-start justify-center">
      <FooterItemsHeader btnText={title} />
      <ul className="flex flex-col gap-3">
        {navItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNavListBlock;
