import { BannerSwiper } from "./BannerSwiper";
import { InfiniteMovingCard } from "./InfiniteMovingCard";
export const Banner = () => {
  return (
    <div className="h-full">
      <BannerSwiper />
      <InfiniteMovingCard />
    </div>
  );
};
