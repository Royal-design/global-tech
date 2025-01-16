import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import { ErrorPage } from "./Pages/ErrorPage";
import { PublicLayout } from "./Layout/PublicLayout";

import { PrivateLayout } from "./Layout/PrivateLayout";
import "react-toastify/dist/ReactToastify.css";
import { RootLayout } from "./Layout/RootLayout";
import { SpinnerLoader } from "./components/SpinnerLoader";

const HomePage = lazy(() =>
  import("./Pages/HomePage").then(({ HomePage }) => ({ default: HomePage }))
);
const ShopPage = lazy(() =>
  import("./Pages/ShopPage").then(({ ShopPage }) => ({ default: ShopPage }))
);
const BlogPage = lazy(() =>
  import("./Pages/BlogPage").then(({ BlogPage }) => ({ default: BlogPage }))
);
const BlogDetailPage = lazy(() =>
  import("./Pages/BlogDetailPage").then(({ BlogDetailPage }) => ({
    default: BlogDetailPage
  }))
);
const AboutPage = lazy(() =>
  import("./Pages/AboutPage").then(({ AboutPage }) => ({ default: AboutPage }))
);
const ContactPage = lazy(() =>
  import("./Pages/ContactPage").then(({ ContactPage }) => ({
    default: ContactPage
  }))
);
const CartPage = lazy(() =>
  import("./Pages/CartPage").then(({ CartPage }) => ({ default: CartPage }))
);
const Login = lazy(() =>
  import("./components/Auth/Login").then(({ Login }) => ({ default: Login }))
);
const Register = lazy(() =>
  import("./components/Auth/Register").then(({ Register }) => ({
    default: Register
  }))
);
const ProfilePage = lazy(() =>
  import("./Pages/ProfilePage").then(({ ProfilePage }) => ({
    default: ProfilePage
  }))
);
const EditProfile = lazy(() =>
  import("./Pages/EditProfile").then(({ EditProfile }) => ({
    default: EditProfile
  }))
);
const ProductPage = lazy(() =>
  import("./Pages/ProductPage").then(({ ProductPage }) => ({
    default: ProductPage
  }))
);
const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<SpinnerLoader />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<SpinnerLoader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/product",
        element: <ShopPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      {
        path: "/shopping-cart",
        element: <CartPage />
      },
      {
        path: "/product",
        children: [
          {
            path: ":productid",
            element: <ProductPage />
          }
        ]
      },
      {
        path: "/blog",
        element: <BlogPage />
      },
      {
        path: "/blog",
        children: [
          {
            path: ":blogid",
            element: <BlogDetailPage />
          }
        ]
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },

      {
        element: <PublicLayout />,
        children: [
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/register",
            element: <Register />
          }
        ]
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "/editprofile",
            element: <EditProfile />
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
