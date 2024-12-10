interface CardProps {
  image: string;
  title: string;
  label?: string;
  tags?: string[];
  price?: number;
  discount?: number;
}

const ProductCard: React.FC<CardProps> = ({ title,  image,label, tags, price, discount }) => {
  return (
    <div className=" p-2 border-2 ">
    <div>
        <img src={image} alt="image" />
    </div>
    <div className="text-center">
    <div className=" font-semibold text-gray-800 mb-2">{title}</div>
    <div className="text-slate-300">{label}</div>
    <div className="text-slate-300">{tags?.join(",")}</div>
    <div className="text-pink-500">{price}</div>
    <div className="text-pink-500">{discount}</div>
    </div>
  </div>
  );
}

export default ProductCard;
