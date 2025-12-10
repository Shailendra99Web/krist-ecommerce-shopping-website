import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  imageUrlProfilePicture?: string;
  addresses?: {
    individualName: string;
    flatHouseBuildingCompanyApartment: string;
    areaColonyStreetSectorVillage: string;
    city: string;
    state: string;
    pinCode: string;
    _id: string;
  }[];
}

const initialState: AuthState = {
  isLoggedIn: false,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  addresses: undefined,
  imageUrlProfilePicture: undefined
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer(state, action: PayloadAction<AuthState>) {
      console.log("authSlice logged In", action.payload.isLoggedIn);
      console.log('updating with:', {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        addresses: action.payload.addresses
      });
      state.isLoggedIn = action.payload.isLoggedIn;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.addresses = action.payload.addresses;
      state.imageUrlProfilePicture = action.payload.imageUrlProfilePicture
    },
    logout(state) {
      state.isLoggedIn = false;
    }
    // setUser(state, action: PayloadAction<any>) {
    //   state.user = action.payload;
    // },
  }
});

export const { loginReducer, logout } = authSlice.actions;
export default authSlice.reducer;
