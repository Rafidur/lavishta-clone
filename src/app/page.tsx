import Navbar from "@/components/navbar/navbar";
import ProductCard from "@/components/product-card/product-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-24">
      <ProductCard image="/logo.webp" title="Product One" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/1.webp" title="Product Two" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/3.webp" title="Product Three" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Four" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Five" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Six" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Seven" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Eight" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Nine" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>
      <ProductCard image="/logo.webp" title="Product Ten" label="Clearance" tags={["Tools", "Brush" ]} price={200} discount={180}/>

     
    </div>
  );
}
