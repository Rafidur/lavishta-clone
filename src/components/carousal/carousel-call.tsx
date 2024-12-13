"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import ProductCard from "../product-card/product-card";
import { Product } from "@/app/models/type";

export default function CarouselCall() {
  const [products, setProducts] = useState<Product[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Fetch products on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=5");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="grid grid-cols-2 mt-10 ">
      <div className="border-2 border-pink-500 p-4 ">
        <div className="text-2xl font-bold mb-6">Sale Product</div>
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <div className="flex gap-1 mb-2 ">
            <Button onClick={() => api?.scrollTo(current - 1)}>
              <AiOutlineLeft />
            </Button>
            <Button onClick={() => api?.scrollTo(current + 1)}>
              <AiOutlineRight />
            </Button>
          </div>
          <CarouselContent>
            {products.map((product: Product, index) => (
              <CarouselItem key={index}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
