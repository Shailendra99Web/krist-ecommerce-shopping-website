import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbData: {
    url: string;
    label: string;
  }[];
}

function Breadcrumb({ breadcrumbData }: BreadcrumbProps) {
  return (
    <div className="flex items-center">
      {breadcrumbData.map((breadcru, index) => (
        <div key={index} className="flex items-center">
          {index != 0 ? <ChevronRight className="size-4.5" /> : null}
          <Link href={breadcru.url}>{breadcru.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
