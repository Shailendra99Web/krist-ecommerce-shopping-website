import { ChevronDown } from "lucide-react";
import React from "react";

interface LinkTextProps {
  href: string;
  text: string;
  className?: string;
  icon?: any;
}

function LinkText({ href, text, className, icon }: LinkTextProps) {
  return (
    <a
      href={href}
      className={`text-primary-500 flex items-center gap-0.5 text-sm no-underline ${className}`}
    >
      {text}
      {icon
        ? React.cloneElement(icon, { className: "size-4.5 pt-0.5" })
        : null}
    </a>
  );
}

export default LinkText;
