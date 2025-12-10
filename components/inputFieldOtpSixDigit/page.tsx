"use client";
import { InputEvent, useEffect, useRef, useState } from "react";

interface InputFieldOtpSixDigitProps {}

function InputFieldOtpSixDigit({}: InputFieldOtpSixDigitProps) {
  const inputElementsClassName =
    "size-15 px-[21px] py-4 hover:border-primary-500 focus:border-primary-500 border-lightgray/20 rounded-lg2 border-1 text-2xl font-bold no-increase-decrease-arrows"; // Input element's classes
  const [inputValues, setinputValues] = useState(["", "", "", "", ""]); // Input element's values.

  function changeCursorPositionToNextBox(inputElementNumber: number) {
    const nextInput = document.querySelector(
      `#digit-box-${inputElementNumber}`
    ) as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  }
  function changeCursorPositionToPreviousBox(inputElementNumber: number) {
    const previousInput = document.querySelector(
      `#digit-box-${inputElementNumber}`
    ) as HTMLInputElement;
    if (previousInput) {
      previousInput.focus();
    }
  }
  function inputElementOnKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (event.key === "Backspace") {
      let newInputValues = inputValues.slice();
      newInputValues[index] = "";
      setinputValues(newInputValues);
      changeCursorPositionToPreviousBox(index - 1);
    } else {
      let newInputValues = inputValues.slice();
      if (event.key.length !== 0) {
        newInputValues[index] = event.key.toString().slice(-1);
        setinputValues(newInputValues);
        changeCursorPositionToNextBox(index + 1);
      }
      if (event.key.length === 0) {
        newInputValues[index] = event.key;
        setinputValues(newInputValues);
        changeCursorPositionToPreviousBox(index - 1);
      }
    }
  }

  return (
    <div className="flex gap-5">
      <input
        value={inputValues[0]}
        onKeyDown={(event) => inputElementOnKeyDown(event, 0)}
        type="number"
        inputMode="numeric"
        name={"digit-box-0"}
        id={"digit-box-0"}
        placeholder={""}
        className={inputElementsClassName}
      ></input>
      <input
        value={inputValues[1]}
        onKeyDown={(event) => inputElementOnKeyDown(event, 1)}
        type="number"
        inputMode="numeric"
        name={"digit-box-1"}
        id={"digit-box-1"}
        placeholder={""}
        className={inputElementsClassName}
      ></input>
      <input
        value={inputValues[2]}
        onKeyDown={(event) => inputElementOnKeyDown(event, 2)}
        type="number"
        inputMode="numeric"
        name={"digit-box-2"}
        id={"digit-box-2"}
        placeholder={""}
        className={inputElementsClassName}
      ></input>
      <input
        value={inputValues[3]}
        onKeyDown={(event) => inputElementOnKeyDown(event, 3)}
        type="number"
        inputMode="numeric"
        name={"digit-box-3"}
        id={"digit-box-3"}
        placeholder={""}
        className={inputElementsClassName}
      ></input>
      <input
        value={inputValues[4]}
        onKeyDown={(event) => inputElementOnKeyDown(event, 4)}
        type="number"
        inputMode="numeric"
        name={"digit-box-4"}
        id={"digit-box-4"}
        placeholder={""}
        className={inputElementsClassName}
      ></input>
    </div>
  );
}

export default InputFieldOtpSixDigit;
