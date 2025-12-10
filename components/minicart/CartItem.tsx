import { addCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { apiDeleteCartItem } from "@/utils/GlobalApi";
import { Trash2 } from "lucide-react";

interface CartItemProps {
  cartItemId: string;
  imageUrl: string;
  shortDescription: string;
  quantity: number;
  discountPrice: number;
  size: string;
}

function CartItem({
  cartItemId,
  imageUrl,
  shortDescription,
  quantity,
  discountPrice,
  size
}: CartItemProps) {
  const dispatch = useAppDispatch();

  async function deleteCartItem() {
    if (cartItemId) {
      const deleteCartItemResult = await apiDeleteCartItem(cartItemId);
      // deleteCartItemResult

      dispatch(
        addCart({
          cartItems: deleteCartItemResult.data.cartItems,
          totalAmount: deleteCartItemResult.data.totalAmount
            ? deleteCartItemResult.data.totalAmount
            : 0
        })
      );
    }
  }

  return (
    <div className="flex w-full gap-x-2.5 py-4.5">
      <div>
        <img src={imageUrl} alt="img" className="min-h-17.5 min-w-17.5 h-17.5 w-17.5 object-contain" />
      </div>
      <div className="relative truncate grow">
        <div className="w-full truncate">{shortDescription}</div>
        <div className="font-bold">
          {quantity} x ${discountPrice?.toFixed(2)}
        </div>
        <div>Size: {size}</div>
        <div className="absolute right-1 bottom-1 size-5">
          <Trash2
            className="cursor-pointer text-red-400 hover:text-red-300"
            onClick={() => deleteCartItem()}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
