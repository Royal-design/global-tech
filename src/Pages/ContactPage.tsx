import BreadCrumbs from "@/components/BreadCrumbs";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { db } from "@/Config/firebase";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
export const ContactPage = () => {
  const { user } = UseAuthContext();
  const commentSchema = z.object({
    firstname: z
      .string()
      .min(3, { message: "Firstname must be at least 3 characters" }),
    lastname: z
      .string()
      .min(3, { message: "Lastname must be at least 3 characters" }),
    address: z.string().min(1, { message: "Address is required" }),
    email: z
      .string({ invalid_type_error: "Must be a valid email" })
      .email({ message: "It must be a valid email" }),

    message: z
      .string()
      .min(3, { message: "Comment must be at least 3 characters" })
  });
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      email: "",
      address: "",
      firstname: "",
      lastname: "",
      message: ""
    }
  });

  const handleSubmit = async (userData: z.infer<typeof commentSchema>) => {
    if (user) {
      const docRef = collection(db, "messages");
      await addDoc(docRef, {
        userId: user.id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        address: userData.address,
        message: userData.message,
        createdAt: serverTimestamp()
      });
    }
    toast.success("Message has been sent");
    window.scrollTo({ top: 0 });
    form.reset();
    try {
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <main>
        <header className="h-[29rem] max-sm:h-full font-rajdhani relative w-full">
          <img
            src="https://media.istockphoto.com/id/1557118047/photo/a-concept-that-expresses-the-hyper-connected-society-of-modern-society-by-connecting-people.jpg?s=612x612&w=0&k=20&c=Nz995FbXj8Xd34c_wsbAJoQcc_dWpGsm648kZIh8bz8="
            alt="cover"
            className="h-full w-full object-cover"
          />
          <article className="absolute max-sm:text-center max-sm:px-2 h-full w-full  top-0 bg-background-banner ">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <h1 className="text-4xl font-extrabold text-white dark:text-gray-100">
                Contact Us
              </h1>
              <p className="text-lg max-sm:text-[16px] text-center max-md:w-full max-md:px-4 max-sm:w-full max-sm:px-4  w-[50%] text-gray-300 dark:text-gray-300 mt-4">
                We’d love to hear from you! Fill out the form below, and our
                team will get back to you as soon as possible.
              </p>
              <div className="bg-background-banner rounded-full px-2">
                <BreadCrumbs />
              </div>
            </div>
          </article>
        </header>
        <div className="flex container max-sm:flex-col gap-8 w-full max-sm:px-4 justify-center  mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" flex-1"
            >
              <Card className="bg-background overflow-hidden text-primary max-sm:w-full ">
                <CardHeader>
                  <CardTitle className=" text-2xl text-center">
                    Leave your message
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
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
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="require">Address</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            className="focus:border-green-400 border-primary focus:border-1 duration-150"
                            placeholder="Enter your address"
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="require">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className=" focus:border-green-400 h-[5rem] border-primary focus:border-1 duration-150"
                            placeholder="Leave a message..."
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
                    disabled={form.formState.isLoading}
                    type="submit"
                    className="w-full text-white dark:text-primary transition  bg-slate-600 hover:bg-slate-700 duration-200"
                  >
                    Post
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
          <div className="space-y-4 flex-1  pb-6">
            <h2 className="text-2xl mb-6 max-sm:text-2xl text-center font-semibold">
              Contact Details
            </h2>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-slate-600 mt-1" size={18} />
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-100 ">
                  Phone
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  +234 123 456 7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-slate-600 mt-1" size={18} />
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-100">
                  Email
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  support@furniturestore.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-slate-600 mt-1" size={18} />
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-100">
                  Address
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  12, Victoria Island, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
