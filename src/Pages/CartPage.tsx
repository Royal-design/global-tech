import BreadCrumbs from "@/components/BreadCrumbs";
import { formatPrice } from "@/components/CartSheet";
import { Footer } from "@/components/Footer";
import { TableItem } from "@/components/TableItem";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { functions } from "@/Config/firebase";
import { clearCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { httpsCallable } from "firebase/functions";
import { useEffect, useState } from "react";

// Add a type definition for the Stripe property on the window object
declare global {
  interface Window {
    Stripe: any;
  }
}
import { useDispatch, useSelector } from "react-redux";

export const CartPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      // Call the createStripeCheckout function
      const createCheckout = httpsCallable(functions, "createStripeCheckout");

      const result = await createCheckout({
        // Optional data, if needed (e.g., cart items or user details)
        items: [
          {
            product_id: "camera123",
            quantity: 1
          }
        ]
      });

      // Get the Stripe session ID from the response
      const sessionId = (result.data as { id: string }).id;
      console.log("Checkout session ID:", sessionId);

      // Redirect the user to the Stripe checkout page
      const stripe = window.Stripe(
        "pk_test_51QgifwGHD8Z3pchEINTT3eDRIAsHyy4HuYoK5ehEjFo0XVFj9HKe5zCKafAf86s2sO8yZ11P1xrztlVSDZ9tfn2900WNS0RbJ9"
      );
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Error redirecting to checkout:", error);
        setError(error.message);
      }
    } catch (err) {
      console.error("Error creating checkout session:", err);
      setError("An error occurred while creating the checkout session.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="">
      {totalQuantity === 0 ? (
        <p className="p-8">Cart is empty</p>
      ) : (
        <section className="h-auto">
          <div className="flex flex-col gap-4 my-4 bg-background-card max-sm:p-4 px-8 py-4">
            <BreadCrumbs />
            <h2 className="font-bold">Shopping Cart</h2>
          </div>

          <div className="flex max-sm:flex-col gap-[4rem]  p-8 max-sm:p-4">
            <div className="w-full">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Products</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Subtotal</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableItem item={item} key={item.id} />
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>

            <div className="flex w-[20rem] max-sm:w-full  flex-col gap-5">
              <article className="flex justify-between">
                <p>Subtotal</p>
                <p>{formatPrice(totalPrice)}</p>
              </article>
              <article className="flex justify-between">
                <p>Shipping</p>
                <p>Free</p>
              </article>
              <article className="flex justify-between">
                <p>Total</p>
                <p>{formatPrice(totalPrice)}</p>
              </article>
              <Button className="w-full" onClick={handleCheckOut}>
                {loading ? "Loading..." : "Checkout"}
              </Button>
            </div>
          </div>
        </section>
      )}

      <div className="p-8">
        <Footer />
      </div>
    </main>
  );
};
