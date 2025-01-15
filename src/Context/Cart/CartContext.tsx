import React, {
  ReactElement,
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from "react";
import { FormatPrice } from "@/components/FormatPrice";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/Config/firebase";
import { UseAuthContext } from "../Auth/UseAuthContext";
import { toast } from "react-toastify";

export type CartItemType = {
  id: string;
  name: string;
  newPrice: string;
  oldPrice: string;
  image: string;
  images: string[];
  qty: number;
};

export type CartStateType = { cart: CartItemType[]; totalItem: number };

const REDUCE_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR: "CLEAR"
};

export type ReducerActionType = typeof REDUCE_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCE_ACTION_TYPE.ADD: {
      if (!action.payload)
        throw new Error("Payload is required for ADD action");

      const { id, qty = 1 } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        updatedCart = [...state.cart, action.payload];
      }

      const totalItem = updatedCart.reduce(
        (total, item) => total + item.qty,
        0
      );

      return { cart: updatedCart, totalItem };
    }

    case REDUCE_ACTION_TYPE.REMOVE: {
      if (!action.payload)
        throw new Error("Payload is required for REMOVE action");

      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload!.id
      );
      const totalItem = updatedCart.reduce(
        (total, item) => total + item.qty,
        0
      );

      return { cart: updatedCart, totalItem };
    }

    case REDUCE_ACTION_TYPE.UPDATE_QUANTITY: {
      if (!action.payload)
        throw new Error("Payload is required for UPDATE_QUANTITY action");

      const { id, qty } = action.payload;

      if (qty < 1) throw new Error("Quantity must be at least 1");

      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, qty } : item
      );
      const totalItem = updatedCart.reduce(
        (total, item) => total + item.qty,
        0
      );

      return { cart: updatedCart, totalItem };
    }

    case REDUCE_ACTION_TYPE.CLEAR:
      return { cart: [], totalItem: 0 };

    default:
      throw new Error("Invalid action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const { user } = UseAuthContext();
  const [state, dispatch] = useReducer(reducer, initCartState);

  // Persist cart changes to Firebase whenever state updates
  useEffect(() => {
    if (user && state.cart.length > 0) {
      const saveCartToFirebase = async () => {
        const userCartRef = doc(db, "carts", user.id);
        await setDoc(userCartRef, {
          cart: state.cart,
          totalItem: state.totalItem
        });
      };
      saveCartToFirebase();
    }
  }, [state, user]);

  const REDUCER_ACTION = useMemo(() => REDUCE_ACTION_TYPE, []);

  const totalPrice = FormatPrice(
    state.cart.reduce(
      (total, item) => total + item.qty * parseFloat(item.newPrice),
      0
    )
  );

  return {
    dispatch,
    REDUCER_ACTION,
    totalItem: state.totalItem,
    totalPrice,
    cart: state.cart
  };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: CartStateType = { cart: [], totalItem: 0 };

export const CartContext = createContext<UseCartContextType>({
  dispatch: () => {},
  REDUCER_ACTION: REDUCE_ACTION_TYPE,
  totalItem: 0,
  totalPrice: "",
  cart: []
});

type ChildrenType = { children: ReactElement | ReactElement[] };

export const CartContextProvider = ({ children }: ChildrenType) => {
  const { user } = UseAuthContext();
  const [initialCartState, setInitialCartState] =
    useState<CartStateType | null>(null);

  useEffect(() => {
    const fetchCartFromFirebase = async () => {
      if (user) {
        const userCartRef = doc(db, "carts", user.id);
        const cartSnapshot = await getDoc(userCartRef);

        if (cartSnapshot.exists()) {
          const data = cartSnapshot.data();
          setInitialCartState({
            cart: data.cart || [],
            totalItem: data.totalItem || 0
          });
        } else {
          setInitialCartState({ cart: [], totalItem: 0 });
        }
      }
    };

    fetchCartFromFirebase();
  }, [user]);

  const contextValue = useCartContext(initialCartState || initCartContextState);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
