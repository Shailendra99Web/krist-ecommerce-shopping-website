// redux createSlice file is the combination of both Reducers and Actions.
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modal_OneButton: {
    isOpen: boolean;
    heading: string;
    infoText: string;
    btn: {
      text: string;
      url: string;
    };
  };

  modal_AddAddress: {
    isOpen: boolean;
  };

  //   transition: boolean
}

const initialState: ModalState = {
  modal_OneButton: {
    isOpen: false,
    heading: "Successfully",
    infoText: "updated successfully",
    btn: { text: "Back to Home", url: "/" }
  },
  modal_AddAddress: {
    isOpen: false
  }
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modal_OneButtonReducer(
      state,
      action: PayloadAction<{
        isOpen: boolean;
        heading: string;
        infoText: string;
        btn: {
          text: string;
          url: string;
        };
      }>
    ) {
      state.modal_OneButton.isOpen = action.payload.isOpen;
      state.modal_OneButton.heading = action.payload.heading;
      state.modal_OneButton.infoText = action.payload.infoText;
      state.modal_OneButton.btn = action.payload.btn;
    },
    modal_AddAddressToggleReducer(state) {
      console.log('triggered modal_AddAddressToggleReducer....')
      state.modal_AddAddress.isOpen = !state.modal_AddAddress.isOpen;
    }
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },
  }
});

export const { modal_OneButtonReducer, modal_AddAddressToggleReducer } =
  ModalSlice.actions;
export default ModalSlice.reducer;
