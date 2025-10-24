"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/buttons/buttonWithBlackBg/page";

interface ModalOneButtonProps {
  isOpen: boolean;
  heading: string;
  infoText: string;
  imgSrc?: string;
  imgAlt?: string;
  btnText: string;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ModalOneButton({
  isOpen = false,
  heading,
  infoText,
  imgSrc = "",
  imgAlt = "",
  btnText,
  onButtonClick
}: ModalOneButtonProps) {
  const [display, setDisplay] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
      setTimeout(() => {
        setTransition(true);
      }, 30);
    } else {
      setTransition(false);
      setTimeout(() => {
        setDisplay(false);
      }, 200);
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-lightgray/20 fixed top-0 left-0 z-30 h-screen w-screen backdrop-blur-sm ${display ? "block" : "hidden"} ${transition ? "opacity-100" : "opacity-0"} transition-all duration-200`}
    >
      <div
        className={`flex-center fixed left-1/2 z-10 h-[332px] w-[432px] -translate-x-1/2 -translate-y-2/5 flex-col rounded-md bg-white p-5 shadow ${transition ? "top-1/2 -translate-y-1/2 opacity-100" : "top-2/5 -translate-y-2/5 opacity-0"} transition-all duration-200`}
      >
        <div className="flex-center bg-primary-500/5 mx-auto mb-5 size-[108px] rounded-full">
          <div className="flex-center bg-primary-500/10 size-[86px] rounded-full">
            <div className="bg-primary-500 flex-center h-16 w-16 rounded-full">
              <img src={imgSrc} alt={imgAlt} />
            </div>
          </div>
        </div>
        <div className="mb-[30px] flex flex-col gap-2.5">
          <div className="text-2xl font-bold">{heading}</div>
          <div className="">{infoText}</div>
        </div>
        <Button
          btntext={btnText}
          onClick={(event: React.MouseEvent) =>
            onButtonClick(event as React.MouseEvent<HTMLButtonElement>)
          }
        ></Button>
      </div>
    </div>
  );
}

export default ModalOneButton;
