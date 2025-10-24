import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  breadcrumbData: string[];
}

function Breadcrumb({ breadcrumbData }: BreadcrumbProps) {
  return (
    <div className="flex items-center">
      {breadcrumbData.map((breadcru, index) => (
        <div key={index} className="flex items-center">
          {index != 0 ? <ChevronRight className="size-4.5"/> : null}
          <div>{breadcru}</div>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
