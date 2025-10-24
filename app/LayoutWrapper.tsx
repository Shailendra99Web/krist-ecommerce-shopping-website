"use client";
import { useState, type ReactNode } from "react";
import ModalOneButton from "@/components/modals/modalOneButton/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { displayReducer } from "@/redux/features/modal_OneButton/modal_OneButtonSlice";

type Props = { children: ReactNode };

function LayoutWrapper({ children }: Props) {
  const modal_OneButtonIsOpen = useAppSelector(
    (state) => state.modal_OneButton.display
  );
  const modal_OneButtonIsHeading = useAppSelector(
    (state) => state.modal_OneButton.heading
  );
  const modal_OneButtonIsInfoText = useAppSelector(
    (state) => state.modal_OneButton.infoText
  );
  const modal_OneButtonIsbtnText = useAppSelector(
    (state) => state.modal_OneButton.btnText
  );
  const dispatch = useAppDispatch();
  return (
    <>
      {children}
      <ModalOneButton
        isOpen={modal_OneButtonIsOpen}
        btnText={modal_OneButtonIsbtnText}
        heading={modal_OneButtonIsHeading}
        onButtonClick={(event) => {
          dispatch(displayReducer(!modal_OneButtonIsOpen));
        }}
        infoText={modal_OneButtonIsInfoText}
        imgAlt="tick-icon"
        imgSrc="/icons/checked-circle-white.svg"
      />
    </>
  );
}

export default LayoutWrapper;
