import { createBrowserRouter } from "react-router-dom";
import Products, { loader as productsLoader, action as updateAvailabilityAction } from "./views/Products";
import Layout from "./layouts/Layout";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction } from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: 'products/:id/edit', // ROA Pattern - Resource-oriented design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: 'products/:id/delete', // ROA Pattern - Resource-oriented design
        action: deleteProductAction, 
      }
    ],
  },
]);
