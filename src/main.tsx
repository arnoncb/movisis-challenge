import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./routes/Home.tsx"
import { NotFound } from "./routes/NotFound.tsx"
import { QueryClientProvider, QueryClient } from "react-query"
import { Catalogue } from "./routes/Catalogue.tsx"
import { InstrumentDetails } from "./routes/ProductDetails.tsx"
import { GlobalStyle } from "./styles/global.ts"
import { StrictMode } from "react"

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instrumentos",
        element: <Catalogue />,
      },
      {
        path: "/instrumentos/:id",
        element: <InstrumentDetails />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
