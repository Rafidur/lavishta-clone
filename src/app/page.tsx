import CarouselCall from "@/components/carousal/carousel-call";
import Carousal from "@/components/carousal/carousel-call";
import CategoryCard from "@/components/category-box/category-card";
import MostPopular from "@/components/most-popular/most-popular";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <MostPopular />
      <CategoryCard />
      <CarouselCall />
    </div>
  );
}
