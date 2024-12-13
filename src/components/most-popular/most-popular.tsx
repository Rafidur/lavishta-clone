import { json } from "stream/consumers";
import ProductCard from "../product-card/product-card";
import SectionSeparator from "./section-separator";
import { Product } from "@/app/models/type";

export default async function MostPopular() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products = await res.json();
  return (
    <div className="mt-24">
      <SectionSeparator sectionText="Most Popular" />
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 divide-x divide-y border">
        {products.map((product: Product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
