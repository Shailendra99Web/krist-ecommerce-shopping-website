import { z } from "zod";
// import {z} from "../node_modules/zod/index.cjs";

export const signupSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
});

export const personalInformationSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  // password: z.string().min(5, "Password must be at least 5 characters"),
  address: z.string().min(3, "Address must be at least 5 characters"),
  phoneNumber: z.string().min(10, "Phone number must be of 10 digits"),
  // profileImage: z.any()
});

export const addNewAddressSchema = z.object({
  individualName: z.string().min(3, "Name must be at least 3 characters"),
  mobileNumber: z
    .string()
    .min(10, "Mobile Number must be of 10 digits")
    .max(10, "Mobile Number must be of 10 digits"),
  // .regex(/^[0-9]+$/, "Mobile Number must contain only digits"),
  flatHouseBuildingCompanyApartment: z.string(),
  areaColonyStreetSectorVillage: z.string(),
  city: z.string().min(1, "City must be selected"),
  pinCode: z
    .string()
    .min(6, "Pin Code must be 6 digits")
    .max(6, "Pin Code must be 6 digits"),
  // .regex(/^[0-9]+$/, "Pin Code must contain only digits"),
  state: z.string().min(1, "State must be selected")
});
