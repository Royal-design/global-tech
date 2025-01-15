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
import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/redux/slice/cartSlice";
import { Link } from "react-router-dom";
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};

const CartSheet = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!open ? (
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <ShoppingCart size={20} strokeWidth={1.5} />
          </div>
        ) : (
          <div onClick={() => setOpen(!open)}>
            <ShoppingCart size={20} strokeWidth={1.5} />
          </div>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="">
        <SheetTitle />
        <SheetDescription />
        <div className="flex items-center gap-2">
          <p className="text-lg">Shopping Cart</p>
          <div className="rounded-full bg-background-banner flex items-center justify-center p-[10px] h-[1rem] w-[1rem]">
            {totalQuantity}
          </div>
        </div>

        <div className=" flex flex-col gap-2 mt-4 h-screen justify-between">
          <div className="h-[25rem]">
            {totalQuantity === 0 && (
              <p className="text-center">The cart is empty</p>
            )}
            {cartItems.map((item) => (
              <div className="font-rajdhani p-2" key={item.id}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image}
                      className="h-[2rem] w-[2rem] rounded-full"
                      alt="image"
                    />
                    <div className="flex gap-2">
                      <p>{item.qty}</p>
                      <p>x</p>
                      <p>{item.newPrice}</p>
                    </div>
                  </div>

                  <X
                    size={22}
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-gray-400 rounded-full p-1 "
                  />
                </div>
                <Separator className="border-[1px]" />
              </div>
            ))}
          </div>

          <div className="">
            <div className="flex justify-between ">
              <p>Sub Total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <Link
              to="/shopping-cart"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Button className="w-full mb-[6rem]">View Cart</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
