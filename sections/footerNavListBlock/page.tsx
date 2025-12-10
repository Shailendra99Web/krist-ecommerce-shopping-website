import FooterItemsHeader from "@/components/headers/footerItemsHeader/page";
import Link from "next/link";

interface FooterNavListBlockProps {
  title: string;
  navItems: {
    title: string;
    url: string;
  }[];
}

function FooterNavListBlock({ title, navItems }: FooterNavListBlockProps) {
  return (
    <div className="flex w-35 flex-col items-start justify-center">
      <FooterItemsHeader btnText={title} />
      <ul className="flex flex-col gap-3">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNavListBlock;
