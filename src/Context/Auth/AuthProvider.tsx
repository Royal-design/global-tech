import { createContext, ReactElement, useEffect, useState } from "react";
import { auth, db } from "@/Config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { toast } from "sonner";

export type UserType = {
  firstname: string;
  lastname: string;
  email: string;
  photo?: string;
  photoPath: string | null;
  id: string;
  isAdmin: boolean;
  description: string;
  updatedAt: any;
};
type AuthStateType = {
  user: UserType | null;
  users: UserType[] | null;
  userLoading: boolean;
  signOut: () => void;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getUserData: () => void;
};
const useAuthState: any = {};

export const AuthContext = createContext<AuthStateType>(useAuthState);

export type ChildrenType = {
  children?: ReactElement;
};
export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const getUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const result = await getDoc(docRef);
          setUser({ id: user.uid, ...result.data() } as UserType);
          setUserLoading(false);
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
      } else {
        setUserLoading(true);
      }
    });
  };
  const getUsers = async () => {
    const userRef = collection(db, "users");
    const data = await getDocs(userRef);
    const result = data.docs.map((user) => ({
      ...user.data(),
      id: user.id
    })) as UserType[];
    setUsers(result);
  };
  const signOut = () => {
    auth.signOut();
    toast.success("User sign out successully!");
    setUser(null);
    setUserLoading(false);
  };
  useEffect(() => {
    getUserData();
    getUsers();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, userLoading, signOut, setUserLoading, getUserData, users }}
    >
      {children}
    </AuthContext.Provider>
  );
};
