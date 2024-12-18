import ProductCard from "../product-card/product-card";
import SectionSeparator from "./section-separator";
import { Product } from "@/app/models/type";

export default async function MostPopular() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products = await res.json();
  return (
    <section className="mt-24">
      <header>
        <SectionSeparator sectionText="Most Popular" />
      </header>
      <div
        className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 divide-x divide-y border"
        role="list"
      >
        {products.map((product: Product) => (
          <article key={product.id} role="listitem">
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
