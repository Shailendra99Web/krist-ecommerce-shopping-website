// redux createSlice file is the combination of both Reducers and Actions.
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Modal_OneButtonState {
  display: boolean;
  heading: string;
  infoText: string;
  btnText: string;
  //   transition: boolean
}

const initialState: Modal_OneButtonState = {
  display: false,
  heading: "Password Changed Successfully",
  infoText: "Your password has been updated successfully",
  btnText: "Back to Login"
};

const Modal_OneButtonSlice = createSlice({
  name: "modal_OneButton",
  initialState,
  reducers: {
    displayReducer(state, action: PayloadAction<boolean>) {
      state.display = action.payload;
    }
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },
  }
});

export const { displayReducer } = Modal_OneButtonSlice.actions;
export default Modal_OneButtonSlice.reducer;
