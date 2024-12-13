import SectionSeparator from "../most-popular/section-separator";

export default async function CategoryCard() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories: string[] = await res.json();
  return (
    <div>
      <SectionSeparator sectionText="Category" />
      <div className="grid grid-cols-8 gap-8 mt-10 mb-10">
        {categories.map((category) => (
          <div className="flex flex-col items-center " key={category}>
            {/* Image */}
            <div className="shadow overflow-hidden">
              <img
                className="rounded-full hover:scale-110 transition duration-700 ease-in-out"
                src="/1.webp"
                alt={category}
              />
            </div>
            <div>
              {/* Name */}
              <div className="font-medium">{category}</div>
              {/* Number */}
              <div className="text-sm text-gray-500">{category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
