"use client";
import { useState } from "react";

function ButtonToggle() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div
      className={`relative h-7.5 w-12.5 cursor-pointer rounded-full transition-colors ${
        enabled ? "bg-green-500" : "bg-gray-300"
      } p-0.5`}
      onClick={() => setEnabled((prev) => !prev)}
      role="switch"
      aria-checked={enabled}
    //   tabIndex={0}
    >
      <div
        className={`absolute top-0.5 size-6.5 rounded-full bg-white shadow transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}

export default ButtonToggle;
