import { CreditCard, HandCoins, Headset, Plane, Umbrella } from "lucide-react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export const InfiniteMovingCard = () => {
  const testimonials = [
    {
      icon: <Plane />,
      title: "Free Shipping",
      description: "From $4.00"
    },
    {
      icon: <HandCoins />,
      title: "Money Guarantee",
      description: "10 days back"
    },
    {
      icon: <CreditCard />,
      title: "Payment Method",
      description: "Secure System"
    },
    {
      icon: <Headset />,
      title: "Online Support",
      description: "24hrs-in-a-day"
    },
    {
      icon: <Umbrella />,
      title: "100% Sale",
      description: "Secure Shipping"
    }
  ];
  return (
    <div className=" z-0 rounded-md my-[2rem]  antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
};
