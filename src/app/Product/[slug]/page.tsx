import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { SheetCart } from "@/components/cart/cart-pop";
import { Button } from "@/components/ui/button";
import { SelectVariants } from "@/components/product-page/select-variants";
import { BreadcrumbWithCustomSeparator } from "@/components/product-page/product-breadcrumb";

export default async function ProductDemo({ params }: any) {
  const { slug } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const product = await res.json();
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="p-4 mx-4">
          <img src={product.image} alt="img" />
        </div>
        <div className="flex flex-col items-start p-4 gap-8 mx-4">
          <BreadcrumbWithCustomSeparator
            category={product.category}
            title={product.title}
          />
          <div className="text-4xl">{product.title}</div>
          <div className="text-2xl text-pink-600 font-semibold">
            ${product.price}
          </div>
          <div className="text-slate-500">{product.description}</div>
          <div className="flex flex-row gap-2 items-center">
            <div className="font-semibold p-2">Variant:</div>
            <div>
              <SelectVariants />
            </div>
          </div>
          <div className="flex flex-row gap-3 hover:cursor-pointer items-center">
            <div className="flex flex-row ">
              <Button className="border rounded-none h-14 w-3">
                <FiMinus />
              </Button>
              <div className="border-y h-14 items-center justify-center py-3.5 px-1">
                count
              </div>
              <Button className="border rounded-none h-14 w-3">
                <GoPlus />
              </Button>
            </div>
            <div>
              <SheetCart
                triggerContent={
                  <Button className="bg-pink-600 text-white hover:bg-pink-500 hover:text-white ">
                    Add to Cart
                  </Button>
                }
              />
            </div>
            <div>
              <Button className="bg-pink-600 text-white hover:bg-pink-500 hover:text-white">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div>SKU: </div>
            <div className="flex flex-row gap-1">
              <div>Categories:</div>

              <div className="text-slate-400 font-normal">
                {product.category}
              </div>
            </div>
            <div>Tags: </div>
            <div>Brand: </div>
            <div className="flex flex-row items-center gap-1">
              <div>Share:</div>
              <div className="text-slate-500 hover:cursor-pointer hover:text-black ">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>description</div>
    </div>
  );
}
