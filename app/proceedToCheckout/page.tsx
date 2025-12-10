"use client";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import CheckButtonWithText from "@/components/checkButtonWithText/page";
import Header1 from "@/components/headers/h1/page";
import Header4Bold from "@/components/headers/Header4Bold";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import InputFieldWithTitleAndButton from "@/components/inputFieldWithTitleAndButton/page";
import AddNewAddressForm from "@/sections/addNewAddressForm/page";
import DebitCreditCardForm from "@/sections/debitCreditCardForm/page";
import Footer from "@/sections/footer/page";
import Navbar from "@/sections/navbar/page";
import { apiAddOrder, apiUserInfo } from "@/utils/GlobalApi";
import {
  CreditCard,
  Home,
  Square,
  SquareChartGantt,
  SquarePen,
  Trash2
} from "lucide-react";
import { useEffect, useState } from "react";
import SavedAddressCard, { SavedAddressCardProps } from "./savedAddressCard";
import { jost } from "../layout";
import { useAppSelector } from "@/redux/hooks";

function ProceedToCheckout() {
  const [onStep, setOnStep] = useState<number>(1);
  const [subTotal, setSubTotal] = useState<number>(75);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "debitCreditCard" | "google-pay" | "paypal" | "cash-on-delivery" | ""
  >("");
  const [selectedAddress, setselectedAddress] = useState<
    SavedAddressCardProps | undefined
  >(undefined);
  const cart = useAppSelector((state: any) => state.cart);
  const [savedAddresses, setSavedAddresses] = useState<any[]>();

  async function fetchUserInfo() {
    const res = await apiUserInfo();
    if (res.success) {
      setSavedAddresses(res.data.addresses);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {}, [savedAddresses]);

  useEffect(() => {
    if (selectedAddress && Object.keys(selectedAddress).length > 0) {
      setOnStep(2);
    }
  }, [selectedAddress]);

  async function placeOrder() {
    // if (selectedPaymentMethod === "google-pay") {

    // }

    const order = {
      cartItems: cart.cartItems,
      status: "inprocess",
      address: selectedAddress,
      paymentmethod: { name: selectedPaymentMethod }
    };

    const res = await apiAddOrder(order);
    console.log("added order", res);
  }

  useEffect(() => {}, [cart]);

  return (
    <div className={jost.className}>
      <Navbar />
      <div className="mx-auto mt-17 max-w-[1140px]">
        <div className="mb-9 text-4xl">Shipping Address</div>
        {/* <div className="mb-9 text-4xl">Payment Method</div> */}
        {/* <div className="mb-9 text-4xl">Review Your Order</div> */}

        <div className="flex items-start justify-between">
          {/*  */}
          <div className="flex w-full max-w-[700px] flex-col gap-7.5">
            {/* Steps Icons */}
            <div className="relative">
              <div className="flex justify-between">
                <div
                  className="flex-center cursor-pointer flex-col"
                  onClick={() => {
                    setOnStep(1);
                  }}
                >
                  <Home className="bg-primary-500 size-10 rounded-md p-2 text-white" />
                  <div>Address</div>
                </div>
                <div
                  className="flex-center cursor-pointer flex-col"
                  onClick={() => {
                    if (
                      selectedAddress &&
                      Object.keys(selectedAddress).length > 0
                    ) {
                      setOnStep(2);
                    }
                  }}
                >
                  <CreditCard
                    className={`size-10 rounded-md bg-[#f1f1f3] p-2 ${onStep > 1 && "bg-primary-500 text-white"}`}
                  />
                  <div>Payment Method</div>
                </div>
                <div
                  className="flex-center cursor-pointer flex-col"
                  onClick={() => {
                    setOnStep(3);
                  }}
                >
                  <SquareChartGantt
                    className={`size-10 rounded-md bg-[#f1f1f3] p-2 ${onStep > 2 && "bg-primary-500 text-white"}`}
                  />
                  <div>Review</div>
                </div>
              </div>
              <div className="-translate-t-5 absolute top-5 right-1/2 left-0 -z-10 px-4">
                <div
                  className={`h-0.5 ${onStep === 2 || onStep === 3 ? "bg-primary-500" : "bg-gray-100"} transition-all`}
                ></div>
              </div>
              <div className="-translate-t-5 absolute top-5 right-0 left-1/2 -z-10 px-4">
                <div
                  className={`h-0.5 ${onStep === 3 ? "bg-primary-500" : "bg-gray-100"} transition-all`}
                ></div>
              </div>
            </div>

            {/* Step1 - Saved Address / New Address */}
            <div
              className={`flex-col gap-7.5 ${onStep === 1 ? "flex" : "hidden"}`}
            >
              {/* Header */}
              <div className="flex flex-col gap-1">
                <div className="text-xl font-bold">
                  Select a delivery address
                </div>
                <div className="text-sm">
                  Is the address you'd like to use displayed below? If so, click
                  the corresponding "Deliver to this address" button. Or you can
                  enter a new delivery address.
                </div>
              </div>
              {/* Carousel - Saved Address Cards*/}
              <div className="flex gap-7.5 overflow-x-auto border-b-2 border-gray-200 pb-7.5">
                <>
                  {/* Cards */}
                  {savedAddresses?.map((address, i) => (
                    <SavedAddressCard
                      key={i}
                      individualName={address.individualName}
                      city={address.city}
                      flatHouseBuildingCompanyApartment={
                        address.flatHouseBuildingCompanyApartment
                      }
                      areaColonyStreetSectorVillage={
                        address.areaColonyStreetSectorVillage
                      }
                      pinCode={address.pinCode}
                      state={address.state}
                      setselectedAddress={setselectedAddress}
                    />
                  ))}
                </>
              </div>

              {/* Add New Address Form */}
              <div className="flex flex-col">
                <div className="pb-5 text-xl font-bold">Add a new address</div>
                <div>
                  <AddNewAddressForm />
                </div>
              </div>
            </div>

            {/* Step2 - Payment Method */}
            <div className={`${onStep === 2 ? "block" : "hidden"}`}>
              <fieldset className="">
                {/* Header */}
                <legend className="py-3 text-xl font-bold">
                  Select a payment method
                </legend>

                <div className="border-b-1 border-gray-200">
                  <div className="flex items-center gap-4 py-5">
                    <input
                      type="radio"
                      id="debitCreditCard"
                      name="debitCreditCard"
                      value="debitCreditCard"
                      className="size-4.5 accent-black"
                      checked={selectedPaymentMethod === "debitCreditCard"}
                      onChange={(e) => {
                        setSelectedPaymentMethod("debitCreditCard");
                      }}
                    />
                    <label htmlFor="debitCreditCard">
                      <div className="text-xl font-bold">Debit/Credit Card</div>
                    </label>
                  </div>
                  <div
                    className={`flx-col flex gap-5 overflow-hidden transition-all duration-500 ease-in-out ${selectedPaymentMethod === "debitCreditCard" ? "max-h-[768px]" : "max-h-0"}`}
                  >
                    <div className="pb-5">
                      <DebitCreditCardForm />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b-1 border-gray-200 py-5">
                  <input
                    type="radio"
                    id="google-pay"
                    name="google-pay"
                    value="google-pay"
                    className="size-4.5 accent-black"
                    checked={selectedPaymentMethod === "google-pay"}
                    onChange={(e) => {
                      setSelectedPaymentMethod("google-pay");
                    }}
                  />
                  <label htmlFor="google-pay">
                    <div className="text-xl font-bold">Google Pay</div>
                  </label>
                </div>
                <div className="flex items-center gap-4 border-b-1 border-gray-200 py-5">
                  <input
                    type="radio"
                    id="paypal"
                    name="paypal"
                    value="paypal"
                    className="size-4.5 accent-black"
                    checked={selectedPaymentMethod === "paypal"}
                    onChange={(e) => {
                      setSelectedPaymentMethod("paypal");
                    }}
                  />
                  <label htmlFor="paypal">
                    <div className="text-xl font-bold">Paypal</div>
                  </label>
                </div>
                <div className="flex items-center gap-4 py-5">
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="cash-on-delivery"
                    value="cash-on-delivery"
                    className="size-4.5 accent-black"
                    checked={selectedPaymentMethod === "cash-on-delivery"}
                    onChange={(e) => {
                      setSelectedPaymentMethod("cash-on-delivery");
                    }}
                  />
                  <label htmlFor="cash-on-delivery">
                    <div className="text-xl font-bold">Cash on Delivery</div>
                  </label>
                </div>
              </fieldset>

              <div className="py-2">
                <ButtonWithBlackBg
                  btntext="Continue"
                  className="!w-80"
                  onClick={() => {
                    if (selectedPaymentMethod) setOnStep(3);
                  }}
                />
              </div>
            </div>

            {/* Step3 - Review Your Orders */}
            <div className={`${onStep === 3 ? "block" : "hidden"}`}>
              <div className="">
                <div className="pb-5 text-xl font-bold">
                  Estimated delivery: 22 Feb 2022
                </div>
                <div>
                  {cart.cartItems.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex gap-2 border-b-1 border-gray-200 py-5"
                    >
                      <img
                        src={item.product.imageUrl}
                        alt=""
                        className="size-19.5"
                      />
                      <div className="flex flex-col justify-between">
                        <div>{item.product.shortDescription}</div>
                        <div>
                          $
                          {item.product.discountPrice
                            ? item.product.discountPrice.toFixed(2)
                            : item.product.price.toFixed(2)}
                        </div>
                        <div>Size: S</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedAddress && (
                <div className="border-b-1 border-gray-200 py-5">
                  <div className="pb-5 text-xl font-bold">Shipping Address</div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="text-lg font-bold">
                        {selectedAddress.individualName}
                      </div>
                      <div>
                        {selectedAddress.flatHouseBuildingCompanyApartment},{" "}
                        {selectedAddress.areaColonyStreetSectorVillage},{" "}
                        {selectedAddress.city}, {selectedAddress.state},{" "}
                        {selectedAddress.pinCode}
                      </div>
                    </div>
                    <div className="rounded-xl bg-gray-100 p-2.5">
                      <SquarePen size={20} />
                    </div>
                  </div>
                </div>
              )}
              {selectedPaymentMethod && (
                <div className="flex items-center justify-between border-b-1 border-gray-200 py-5">
                  <div>
                    <div className="pb-5 text-xl font-bold">Payment Method</div>
                    <div className="pb-5 text-lg font-bold">
                      {selectedPaymentMethod
                        .split("-")
                        .map(
                          (le: string) =>
                            le.charAt(0).toUpperCase() + le.slice(1)
                        )
                        .join(" ")}
                    </div>
                  </div>
                  <div className="rounded-xl bg-gray-100 p-2.5">
                    <SquarePen size={20} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Subtotal Block*/}
          <div className="flex min-w-80 flex-col gap-4 border-1 border-gray-200 p-4">
            {/* SubTotal */}
            <div className="flex justify-between border-b-1 border-gray-200 pb-4">
              <Header4Bold text="Subtotal" />
              <Header4Bold text={"$" + cart.totalAmount.toFixed(2)} />
            </div>
            {/* Discount Input Box */}
            <div className="flex flex-col gap-3 border-b-1 border-gray-200 pb-4">
              <div>
                <InputFieldWithTitleAndButton
                  title="Enter Discount Code"
                  type="text"
                  htmlFor_Id_Name="review"
                  inputPlaceholder="FLAT50"
                  inputError={<></>}
                  // reactHookFormRegister={}
                  // inputRequired={true}
                  // stateName={"review"}
                />
                {/* <InputFieldWithTitleAndButton reactHookFormRegister={register} /> */}
              </div>
              {/* Delivery Charge */}
              <div className="flex justify-between">
                <div>Delivery Charge</div>
                <div>$5.00</div>
              </div>
            </div>
            {/* Grand Total */}
            <div className="flex justify-between">
              <Header4Bold text="Grand Total" />
              <Header4Bold
                text={
                  "$" + (Number(cart.totalAmount.toFixed(2)) + 5).toFixed(2)
                }
              />
            </div>
            {/* Button - Proceed to Checkout */}
            {onStep === 3 && (
              <div>
                <ButtonWithBlackBg
                  btntext="Place Order"
                  onClick={() => placeOrder()}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProceedToCheckout;
