"use client";
import ButtonWhiteWithBlackBorder from "@/components/buttons/ButtonWhiteWithBlackBorder";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import Header1 from "@/components/headers/h1/page";
import Header4Bold from "@/components/headers/Header4Bold";
import InputFieldWithTitleAndButton from "@/components/inputFieldWithTitleAndButton/page";
import { addCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Footer from "@/sections/footer/page";
import Navbar from "@/sections/navbar/page";
import { apiFetchCart } from "@/utils/GlobalApi";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function CheckoutPage() {
  const [quantity, setQuantity] = useState<number>(1);
  const [cartData, setCartData] = useState();
  const router = useRouter();

  const cart = useAppSelector((state: any) => state.cart);

  const dispatch = useAppDispatch();

  async function fetchUserCart() {
    try {
      const data = await apiFetchCart();
      dispatch(
        addCart({
          cartItems: data.data.cartItems,
          totalAmount: data.totalAmount
        })
      );
    } catch (error) {
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-17 max-w-[1140px]">
        <div className="text-4xl">Checkout</div>
        <div className="flex items-start justify-between">
          {/* Products Tables */}
          <table className="border-separate border-spacing-6">
            <thead>
              <tr className="">
                <th className="ml-0 flex">Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart?.cartItems?.map((item: any, index: number) => {
                let price = item.product.discountPrice
                  ? item.product.discountPrice
                  : item.product.price;
                let subTotalprice = price * item.quantity;
                return (
                  <tr key={index} className="">
                    <td className="flex items-center gap-6.5">
                      <img
                        src={item.product.imageUrl}
                        alt="item_img"
                        className="h-17.5 w-17.5"
                      />
                      <div className="flex flex-col">
                        <Header4Bold text={item.product.shortDescription} />
                        <div>Size: M</div>
                      </div>
                    </td>
                    <td>${price.toFixed(2)}</td>
                    <td>
                      <div className="flex-center border-primary-500 gap-1 rounded-xl border-1 px-1 py-1">
                        <ButtonWhiteWithBlackBorder
                          icon={<Minus className="size-4" />}
                          btnColorType="white"
                          className="border-white !p-2"
                          onClick={() => {
                            quantity != 0 && setQuantity((pre) => pre - 1);
                          }}
                        />
                        {/* <ButtonWithBlackBg icon={<Minus className="size-4" />} btnColorType="gray"/> */}
                        <div>{item.quantity}</div>
                        <ButtonWhiteWithBlackBorder
                          icon={<Plus className="size-4" />}
                          btnColorType="white"
                          className="border-white !p-2"
                          onClick={() => {
                            setQuantity((pre) => pre + 1);
                          }}
                        />
                        {/* <ButtonWithBlackBg /> */}
                      </div>
                    </td>
                    <td>${subTotalprice.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Subtotal Block*/}
          <div className="flex min-w-80 flex-col gap-6.5">
            {/* SubTotal */}
            <div className="flex justify-between">
              <Header4Bold text="Subtotal" />
              <Header4Bold text={"$" + cart?.totalAmount} />
            </div>
            {/* Discount Input Box */}
            <div className="flex flex-col gap-3">
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
                text={"$" + (Number(cart?.totalAmount) + 5).toFixed(2)}
              />
            </div>
            {/* Button - Proceed to Checkout */}
            <div>
              <ButtonWithBlackBg
                btntext="Proceed to Checkout"
                onClick={() => router.push("/proceedToCheckout")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CheckoutPage;
