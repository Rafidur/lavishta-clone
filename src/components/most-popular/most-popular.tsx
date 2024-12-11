import ProductCard from "../product-card/product-card";
import SectionSeparator from "./section-separator";

export default function MostPopular() {
  const products = [
    {
      image: "/logo.webp",
      title: "Dummy Product One",
      label: "Hot Deal",
      tags: ["Category1", "Feature1"],
      price: 100,
      discount: 90,
    },
    {
      image: "/1.webp",
      title: "Dummy Product Two",
      label: "Special Offer",
      tags: ["Category2", "Feature2"],
      price: 150,
      discount: 140,
    },
    {
      image: "/3.webp",
      title: "Dummy Product Three",
      label: "Exclusive",
      tags: ["Category3", "Feature3"],
      price: 200,
      discount: 180,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Four",
      label: "Best Seller",
      tags: ["Category4", "Feature4"],
      price: 250,
      discount: 230,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Five",
      label: "Limited Time",
      tags: ["Category5", "Feature5"],
      price: 300,
      discount: 270,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Six",
      label: "Trending",
      tags: ["Category6", "Feature6"],
      price: 350,
      discount: 320,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Seven",
      label: "Seasonal",
      tags: ["Category7", "Feature7"],
      price: 400,
      discount: 370,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Eight",
      label: "Flash Sale",
      tags: ["Category8", "Feature8"],
      price: 450,
      discount: 420,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Nine",
      label: "Featured",
      tags: ["Category9", "Feature9"],
      price: 500,
      discount: 480,
    },
    {
      image: "/logo.webp",
      title: "Dummy Product Ten",
      label: "Top Rated",
      tags: ["Category10", "Feature10"],
      price: 550,
      discount: 530,
    },
  ];

  return (
    <div className="mt-24">
      <SectionSeparator sectionText="Most Popular" />
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            label={product.label}
            tags={product.tags}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
}
