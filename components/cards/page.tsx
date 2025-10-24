import { ArrowRightLeft, Eye, Star } from "lucide-react";
import ButtonRoundWithIcon from "../buttons/ButtonRoundWithIcon2";
import ButtonWithBlackBg from "../buttons/buttonWithBlackBg/page";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  realPrice: number;
  imageUrl: string;
}

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="item group mb-6 inline-block h-110 w-[262px] rounded-sm"
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="item-image h-82 w-full bg-gray-50"
        />

        {/* Buttons - Right Side Options */}
        <div className="absolute hidden group-hover:flex flex-col gap-3 right-5 top-5">
            <ButtonRoundWithIcon icon={<Star/>}/>
            <ButtonRoundWithIcon icon={<ArrowRightLeft/>}/>
            <ButtonRoundWithIcon icon={<Eye/>}/>
        </div>

        {/* Button - Add to cart */}
        <div className="absolute hidden group-hover:block inset-x-5 bottom-5">
          <ButtonWithBlackBg btnColorType="gray" btntext="Add to Cart" />
        </div>
      </div>
      <div className="item-info p-4">
        <div className="item-title text-lg font-medium">{product.title}</div>
        <div className="item-description text-gray-700">
          {product.description}
        </div>
        <div className="item-price mt-2 flex gap-2">
          <div className="current-price font-bold text-black">
            ${product.price.toFixed(2)}
          </div>
          <div className="real-price text-gray-500 line-through">
            ${product.realPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
