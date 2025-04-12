import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { NewDeals } from "@/components/NewDeals";
import { ScrollToTop } from "@/components/ScrollToTop";

import { BestSellingProduct } from "@/Sessions/BestSellingProduct";
import { BlogSession } from "@/Sessions/BlogSession";
import { Brands } from "@/Sessions/Brands";
import { CategorySession } from "@/Sessions/CategorySession";
import { RecommendedProducts } from "@/Sessions/RecommendedProducts";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <NewDeals />
      <CategorySession />
      <RecommendedProducts />
      <BestSellingProduct />
      <Brands />
      <BlogSession />
      <ScrollToTop />
      <Footer />
    </div>
  );
};
