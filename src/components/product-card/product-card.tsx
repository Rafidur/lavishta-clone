import { Product } from "@/app/models/type";
import { PullUpWhite } from "./addCart-quickView-pullUp";
import PercentageTag from "./percentage-tag";

const ProductCard: React.FC<Product> = ({
  title,
  image,
  category,
  description,
  price,
}) => {
  const percentage =
    price && price ? Math.round(((price - price) / price) * 100) : 0;
  return (
    <div className=" p-2 group">
      <div className="relative ">
        <img className="w-full h-auto" src={image} alt="image" />
        <PercentageTag percentage={percentage} />
        <PullUpWhite />
      </div>
      <div className="text-center text-xs">
        <div className=" font-semibold text-gray-800 mb-2">{title}</div>
        <div className="text-slate-400 mb-1">{description}</div>
        <div className="text-slate-400 mb-1">{category}</div>
        <div className="flex flex-row justify-center gap-1 font-semibold">
          <div
            className={price ? " text-pink-500 line-through" : "text-pink-500"}
          >
            {price}৳
          </div>
          <div className="text-pink-500">{price}৳</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
