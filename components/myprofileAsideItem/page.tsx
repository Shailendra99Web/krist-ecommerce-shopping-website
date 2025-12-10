import { LucideIcon } from "lucide-react";

interface MyprofileAsideItemProps {
  icon: any;
  text: string;
  active?: boolean;
  onClick: () => void;
}

function MyprofileAsideItem({
  icon,
  text,
  active,
  onClick
}: MyprofileAsideItemProps) {
  return (
    <div
      className={`hover:bg-primary-500 flex h-14 cursor-pointer items-center gap-4 pl-5 hover:text-white ${active ? "bg-primary-500 text-white" : ""}`}
      onClick={onClick}
    >
      {icon}
      <div>{text}</div>
    </div>
  );
}

export default MyprofileAsideItem;
