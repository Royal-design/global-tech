import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./Context/Theme/ThemeProvider.tsx";
import { AuthProvider } from "./Context/Auth/AuthProvider.tsx";
import { CartContextProvider } from "./Context/Cart/CartContext.tsx";
import { ProductProvider } from "./Context/Products/ProductProvider.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <AuthProvider>
          <ProductProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </ProductProvider>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
