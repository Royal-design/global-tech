import { Separator } from "@/components/ui/separator";
import headphone from "../assets/category/headphone.jpeg";
import homeGadgets from "../assets/category/home-appliances.jpg";
import kitchenGadgets from "../assets/category/kitchen-appliances.webp";
import phoneAccessories from "../assets/category/phone-accessories.webp";
import laptopPc from "../assets/category/pc-laptop.webp";
import vrCamera from "../assets/category/vr-camera.webp";

export const CategorySession = () => {
  const categories = [
    {
      img: phoneAccessories,
      name: "Phone & Accessories"
    },
    {
      img: laptopPc,
      name: "Pc & Laptop"
    },
    {
      img: vrCamera,
      name: "VR & Camera"
    },
    {
      img: homeGadgets,
      name: "Home Appliances"
    },
    {
      img: kitchenGadgets,
      name: "Kitchen Appliances"
    },
    {
      img: headphone,
      name: "Headphones"
    }
  ];
  return (
    <div className=" font-rajdhani ">
      <div className="flex mt-4 items-center justify-between px-8 max-sm:px-4">
        <Separator className="flex-1" />
        <p className="px-5 text-2xl max-sm:text-lg">Popular Category</p>
        <Separator className="flex-1" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-sm:grid-cols-6 h-full max-sm:gap-2  mt-4 gap-4 max-sm:px-4 px-8">
        {categories.map((category, i) => (
          <div className="flex flex-col items-center h-full w-full " key={i}>
            <img
              src={category.img}
              className="w-[5rem] max-sm:h-[3rem] max-sm:w-[3rem] h-[5rem]  border duration-200 hover:scale-[1.02] hover:border-green-500 object-cover bg-background-navbar rounded-full"
              alt={category.name}
            />
            <p className="max-sm:text-xs text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
