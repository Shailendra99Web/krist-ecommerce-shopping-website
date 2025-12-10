"use client";
import { type ReactNode } from "react";
import ModalOneButton from "@/components/modals/modalOneButton/page";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ModalAddAddress from "@/components/modals/modalAddAddress/page";

type Props = { children: ReactNode };

function LayoutWrapper({ children }: Props) {
  const modal_OneButtonIsOpen = useAppSelector(
    (state) => state.modal.modal_OneButton.isOpen
  );
  const modal_OneButtonIsHeading = useAppSelector(
    (state) => state.modal.modal_OneButton.heading
  );
  const modal_OneButtonIsInfoText = useAppSelector(
    (state) => state.modal.modal_OneButton.infoText
  );
  const modal_OneButtonIsbtn = useAppSelector(
    (state) => state.modal.modal_OneButton.btn
  );

  const modal_AddAddressIsOpen = useAppSelector(
    (state) => state.modal.modal_AddAddress.isOpen
  );

  const dispatch = useAppDispatch();
  return (
    <>
      {children}
      <ModalOneButton
        isOpen={modal_OneButtonIsOpen}
        btn={modal_OneButtonIsbtn}
        heading={modal_OneButtonIsHeading}
        // onButtonClick={(event) => {
        //   dispatch(
        //     displayReducer({
        //       display: !modal_OneButtonIsOpen,
        //       heading: modal_OneButtonIsHeading,
        //       infoText: modal_OneButtonIsInfoText,
        //       btn: {
        //         text: modal_OneButtonIsbtn.text,
        //         url: modal_OneButtonIsbtn.url
        //       }
        //     })
        //   );
        // }}
        infoText={modal_OneButtonIsInfoText}
        imgAlt="tick-icon"
        imgSrc="/icons/checked-circle-white.svg"
      />

      <ModalAddAddress isOpen={modal_AddAddressIsOpen} />
    </>
  );
}

export default LayoutWrapper;
