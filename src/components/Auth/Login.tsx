import { Link } from "react-router-dom";
import googleImage from "../../assets/google.webp";
import { auth, db, googleProvider } from "@/Config/firebase";
import { FormEvent } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/gtech logo1.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { loginUser, loginWithGoogle } from "@/redux/slice/authSlice";
import { AppDispatch } from "@/redux/store";

export const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  const userSchema = z.object({
    email: z
      .string({ invalid_type_error: "Must be a valid email" })
      .email({ message: "It must be a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
  });
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const navigate = useNavigate();

  const handleSubmit = async (userData: z.infer<typeof userSchema>) => {
    dispatch(loginUser(userData.email, userData.password));
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      console.log(userData);
      toast.success("User login successfully!");
      form.reset();
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const handleGoogleLogin = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
    try {
      await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      toast.success("User login successfully!");
      navigate("/");
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, {
          firstname: user.displayName,
          lastname: "",
          email: user.email,
          photo: user.photoURL,
          isAdmin: false
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  return (
    <div className=" bg-background max-sm:p-4 max-sm:w-full text-primary justify-center flex  items-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-sm:w-full "
        >
          <Card className="p-0 bg-background text-primary w-[25rem]  max-sm:w-full ">
            <CardHeader className=" p-0 flex items-center justify-center">
              <img src={logo} className="w-[3rem]" />
              <CardTitle className="text-2xl text-center">Login </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="require">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="focus:border-green-400 focus:border-1 border-primary duration-150"
                        placeholder="Enter a valid email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="require">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className=" focus:border-green-400 border-primary focus:border-1 duration-150"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-3 items-center">
              <Button
                type="submit"
                className="w-full text-white dark:text-primary bg-slate-600 hover:bg-slate-700 duration-200 hover:outline-green-500 hover:outline-1 outline outline-1"
              >
                Sign In
              </Button>
              <p className="text-center text-sm mt-2">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-500 transition"
                >
                  Sign Up
                </Link>
              </p>
              <p className="text-center text-sm mb-2">Or With</p>
              <Button
                type="submit"
                onClick={handleGoogleLogin}
                className="w-full bg-slate-600 hover:bg-slate-700 duration-200 hover:outline-green-500 hover:outline-1 outline outline-1"
              >
                <div className="items-center  flex text-white dark:text-primary">
                  <img src={googleImage} className="w-[2rem]" />
                  <p>Google</p>
                </div>
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
