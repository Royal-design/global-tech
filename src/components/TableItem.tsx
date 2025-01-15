import { TableCell, TableRow } from "@/components/ui/table";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { CartItem, removeFromCart, updateCart } from "@/redux/slice/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "./CartSheet";
interface ItemType {
  item: CartItem;
}
export const TableItem = ({ item }: ItemType) => {
  const [updateQuantity, setupdateQuantity] = useState<number>(item.qty);
  const dispatch = useDispatch();

  const handleIncrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    const newQuantity = updateQuantity + 1;
    setupdateQuantity(newQuantity);
    dispatch(updateCart({ id, qty: newQuantity }));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    if (updateQuantity > 1) {
      const newQuantity = updateQuantity - 1;
      setupdateQuantity(newQuantity);
      dispatch(updateCart({ id, qty: newQuantity }));
    }
  };
  return (
    <TableRow className="h-[1rem]">
      <TableCell className="font-medium  w-[20rem]">
        <figure className="flex items-center  gap-3">
          <img src={item.image} alt="image" className="w-[3rem] h-[3rem] " />
          <p>{item.name}</p>
        </figure>
      </TableCell>
      <TableCell>{item.newPrice}</TableCell>
      <TableCell>
        <div className="w-[5rem] dark:bg-transparent flex h-[3rem] justify-around items-center bg-white border">
          <Button
            onClick={(e) => handleDecrement(e, item.id)}
            variant="ghost"
            className="cursor-pointer dark:hover:bg-transparent hover:bg-transparent"
          >
            -
          </Button>
          <p>{updateQuantity}</p>
          <Button
            onClick={(e) => handleIncrement(e, item.id)}
            variant="ghost"
            className="cursor-pointer dark:hover:bg-transparent hover:bg-transparent"
          >
            +
          </Button>
        </div>
      </TableCell>
      <TableCell>{formatPrice(item.totalPrice)}</TableCell>
      <TableCell className="flex justify-end items-center h-[4rem] ">
        <X
          onClick={() => handleRemoveFromCart(item.id)}
          className="w-[1.3rem] cursor-pointer h-[1.3rem] bg-gray-300 rounded-full p-1"
        />
      </TableCell>
    </TableRow>
  );
};
