"use client";
import { useEffect, useRef, useState } from "react";

interface CheckButtonWithTextProps {
  label: string;
  value: string;
  text: string;
  className?: string;
}

function CheckButtonWithText({
  label,
  value,
  text,
  className
}: CheckButtonWithTextProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const refInputCheckbox = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="flex items-center">
        <input
          ref={refInputCheckbox}
          type="checkbox"
          id={label}
          name={label}
          value={value}
          className="accent-primary-500 invisible size-5 h-0 w-0"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <img
          src={`${checked ? "/icons/checked-box.svg" : "/icons/unchecked-box.svg"}`}
          alt="checkbox"
          className="cursor-pointer p-1"
          onClick={() => refInputCheckbox.current?.click()}
        />
      </div>
      <label htmlFor={label} className={`cursor-pointer ${className}`}>
        {text}
      </label>
    </div>
  );
}

export default CheckButtonWithText;
