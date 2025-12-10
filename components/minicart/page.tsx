// Minicart
"use client";
import { useAppSelector } from "@/redux/hooks";
import ButtonWhiteWithBlackBorder from "../buttons/ButtonWhiteWithBlackBorder";
import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { apiFetchCart } from "@/utils/GlobalApi";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";

function MiniCart() {
  const cart = useAppSelector((state: any) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();

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
      console.log("Fetch error :", error);
    }
  }

  useEffect(() => {
    fetchUserCart();
  }, []);

  return (
    <div className="max-h-[590px] w-[350px] rounded-sm bg-white p-4.5">
      <div className="py-1.5">
        You have {cart.cartItems.length ? cart.cartItems.length : 0} items in
        your cart
      </div>
      <div className="max-h-[300px] overflow-y-auto">
        {cart?.cartItems.length > 0 &&
          cart.cartItems.map((cartItem: any, index: number) => (
            <CartItem
              key={index}
              cartItemId={cartItem._id}
              imageUrl={cartItem.product.imageUrl}
              shortDescription={cartItem.product.shortDescription}
              discountPrice={
                cartItem.product.discountPrice
                  ? cartItem.product.discountPrice
                  : cartItem.product.price
              }
              quantity={cartItem.quantity}
              size="M"
            />
          ))}
      </div>
      <div className="flex justify-between py-4.5 font-bold">
        <div>Subtotal</div>
        <div>${cart.totalAmount}</div>
      </div>
      <div className="flex flex-col gap-y-2.5 font-bold">
        <ButtonWhiteWithBlackBorder btnColorType="white" btntext="View Cart" />
        <ButtonWithBlackBg
          btntext="Checkout"
          onClick={() => {
            router.push("/checkout");
          }}
        />
      </div>
    </div>
  );
}

export default MiniCart;
