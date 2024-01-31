import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./routes/Home.tsx"
import { Products } from "./routes/Products.tsx"
import { NotFound } from "./routes/NotFound.tsx"
import { ProductDetails } from "./routes/ProductDetails.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Products />,
      },
      {
        path: "/produto/:id",
        element: <ProductDetails />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
