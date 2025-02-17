import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { RootState } from "@/redux/store";
import { Separator } from "@radix-ui/react-separator";
import { Heart, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFavourite, removeFavorite } from "@/redux/slice/favouriteSlice";
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};

const WishListSheet = () => {
  const [open, setOpen] = useState<boolean>(false);
  const favourite = useSelector((state: RootState) => state.favourite.items);
  const totalFavourite = useSelector(
    (state: RootState) => state.favourite.totalFavourite
  );
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFavorite(id));
  };
  const handleClear = () => {
    dispatch(clearFavourite());
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!open ? (
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Heart size={20} strokeWidth={1.5} />
          </div>
        ) : (
          <div onClick={() => setOpen(!open)}>
            <Heart size={20} strokeWidth={1.5} />
          </div>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="overflow-auto scrollbar-hidden">
        <SheetTitle />
        <SheetDescription />
        <div className="flex items-center gap-2">
          <p className="text-lg">Wishlist</p>
          <div className="rounded-full bg-background-banner flex items-center justify-center p-[10px] h-[1rem] w-[1rem]">
            {totalFavourite}
          </div>
        </div>

        <div className=" flex flex-col gap-2 mt-4 h-screen justify-between">
          <div className="h-[25rem]">
            {totalFavourite === 0 && (
              <p className="text-center">No wishlist added</p>
            )}
            {favourite.map((item) => (
              <div className="font-rajdhani p-2" key={item.id}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image}
                      className="h-[2rem] w-[2rem] rounded-full"
                      alt="image"
                    />
                    <div className="flex gap-2">
                      <p>{item.name}</p>
                    </div>
                  </div>

                  <X
                    size={22}
                    onClick={() => handleRemove(item.id)}
                    className="bg-gray-400 rounded-full p-1 "
                  />
                </div>
                <Separator className="border-[1px]" />
              </div>
            ))}
          </div>
          <Button onClick={handleClear} className="w-full mb-[6rem]">
            Clear Wishlist
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WishListSheet;
