import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/Config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import logo from "../../assets/gtech logo1.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { registerUser } from "@/redux/slice/authSlice";

export const Register = () => {
  const dispatch: AppDispatch = useDispatch();

  const userSchema = z.object({
    firstname: z
      .string()
      .min(3, { message: "Firstname must be at least 3 characters" }),
    lastname: z
      .string()
      .min(3, { message: "Lastname must be at least 3 characters" }),
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
      password: "",
      firstname: "",
      lastname: ""
    }
  });
  const navigate = useNavigate();
  const handleSubmit = async (userData: z.infer<typeof userSchema>) => {
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    dispatch(registerUser(userData.email, userData.password));
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        photo: null,
        photoPath: null,
        isAdmin: false
      });
    }
    toast.success("Account created successfully!");
    navigate("/login");
    form.reset();
    try {
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="bg-background max-sm:px-4 flex justify-center w-full items-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-sm:w-full"
        >
          <Card className="bg-background overflow-hidden max-sm:w-full text-primary w-[25rem]">
            <CardHeader className="flex items-center justify-center">
              <img src={logo} className="w-[3rem]" />
              <CardTitle className="text-center text-2xl">
                Create your account
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="require">First Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="focus:border-green-400 border-primary focus:border-1 duration-150"
                        placeholder="Enter your firstname"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="require">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="focus:border-green-400 border-primary focus:border-1 duration-150"
                        placeholder="Enter your lastname"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="require">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="focus:border-green-400 border-primary focus:border-1 duration-150"
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
            <CardFooter className="flex flex-col bg-background justify-center items-center">
              <Button
                type="submit"
                className="w-full text-white dark:text-primary transition  bg-slate-600 hover:bg-slate-700 duration-200"
              >
                Register
              </Button>
              <p className="text-primary mt-2">
                {" "}
                You have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-500 transition"
                >
                  Sign-In
                </Link>
              </p>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
