import { Product } from "@/app/models/type";
import { PullUpWhite } from "./addCart-quickView-pullUp";
import PercentageTag from "./percentage-tag";
import LabelTag from "./label-tag";
import Link from "next/link";

const ProductCard: React.FC<Product> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  const percentage =
    price && price ? Math.round(((price - price) / price) * 100) : 0;
  return (
    <article className=" p-2 group" aria-labelledby={`product-title-${id}`}>
      <div className="relative ">
        <Link href={`/Product/${id}`} passHref>
          <img
            className="w-full h-auto"
            src={image}
            alt={`Image of ${title}`}
          />
        </Link>
        <PercentageTag percentage={percentage} />
        <LabelTag label="NEW" />
        <PullUpWhite />
      </div>
      <section className="text-center text-xs">
        <h2 className=" font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-slate-400 mb-1">{description}</p>
        <p className="text-slate-400 mb-1">{category}</p>
        <div className="flex flex-row justify-center gap-1 font-semibold">
          <span
            className={price ? " text-pink-500 line-through" : "text-pink-500"}
            aria-label="Original Price"
          >
            {price}৳
          </span>
          <div className="text-pink-500" aria-label="Discounted Price">
            {price}৳
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
