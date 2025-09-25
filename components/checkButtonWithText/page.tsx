'use client'
import { useEffect, useRef, useState } from "react";

interface CheckButtonWithTextProps {
    label: string;
    value: string;
    text: string;
}

function CheckButtonWithText({ label, value, text }: CheckButtonWithTextProps) {
    const [checked, setChecked] = useState<boolean>(false);
    const refInputCheckbox = useRef<HTMLInputElement | null>(null)

    return (
        <div className=" flex gap-2.5 items-center select-none">
            <div className="flex items-center">
                <input
                    ref={refInputCheckbox}
                    type="checkbox"
                    id={label}
                    name={label}
                    value={value}
                    className="invisible w-0 h-0 accent-primary-500 size-5"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <img
                    src={`${checked ? "/icons/checked-box.svg" : "/icons/unchecked-box.svg"}`}
                    alt="checkbox"
                    className="p-1 cursor-pointer"
                    onClick={() => refInputCheckbox.current?.click()}
                />
            </div>
            <label htmlFor={label} className="cursor-pointer">
                {text}
            </label>
        </div>
    )
}

export default CheckButtonWithText;