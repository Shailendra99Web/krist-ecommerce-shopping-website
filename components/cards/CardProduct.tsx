import { ArrowRightLeft, Eye, Star } from "lucide-react";
import ButtonRoundWithIcon from "../buttons/ButtonRoundWithIcon2";
import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";
import { useAppDispatch } from "@/redux/hooks";
import { addCart, addCartItem } from "@/redux/features/cart/cartSlice";
import { apiAddCartItem } from "@/utils/GlobalApi";
import { useRouter } from "next/navigation";
import CartItem from "../minicart/CartItem";

interface Product {
  _id: string;
  productName: string;
  price: number;
  discountPrice: number;
  shortDescription: string;
  longDescription: string;
  ratings: number;
  reviews: {
    name: string;
    ratings: number;
    comment: string;
    date: string;
  }[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  category: string[];
  imageUrl?: string;
}

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  async function addToCart(productId: string, quantity: number) {
    // For backend
    const addingToDbResult = await apiAddCartItem({
      product: productId,
      quantity: quantity,
    });

    // For frontend
    dispatch(
      addCart({
        cartItems: addingToDbResult.data.cartItems,
        totalAmount: addingToDbResult.data.totalAmount
          ? addingToDbResult.data.totalAmount
          : 0
      })
    );
    // dispatch(addCartItem({ product: product._id, quantity: 1 }));
  }

  return (
    <div
      key={product._id}
      className="item group mb-6 inline-block h-110 w-[262px] rounded-sm"
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.productName}
          // className="item-image h-82 w-full bg-gray-50 object-contain"
          className="item-image h-82 w-full bg-white object-contain rounded-lg"
        />

        {/* Buttons - Right Side Options */}
        <div className="absolute top-5 right-5 hidden flex-col gap-3 group-hover:flex">
          <ButtonRoundWithIcon icon={<Star />} />
          <ButtonRoundWithIcon icon={<ArrowRightLeft />} />
          <ButtonRoundWithIcon
            icon={<Eye />}
            onClick={() => {
              router.push(`/shop/${product.productName}`);
            }}
          />
        </div>

        {/* Button - Add to cart */}
        <div className="absolute inset-x-5 bottom-5 hidden group-hover:block">
          <ButtonWithBlackBg
            btnColorType="gray"
            btntext="Add to Cart"
            onClick={() => {
              addToCart(product._id, 1);
            }}
          />
        </div>
      </div>
      <div className="item-info p-4">
        <div className="item-title text-lg font-medium">
          {product.productName}
        </div>
        <div className="item-description truncate text-gray-700">
          {product.shortDescription}
        </div>
        <div className="item-price mt-2 flex gap-2">
          {product.discountPrice ? (
            <>
              <div className="current-price">
                ${product.discountPrice.toFixed(2)}
              </div>
              <div className="real-price text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </div>
            </>
          ) : (
            <div className="current-price">${product.price.toFixed(2)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
