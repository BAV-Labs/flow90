import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/landing/Layout";

import Home from "@/pages/home";
import FAQ from "@/pages/faq";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "faq", element: <FAQ /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
],
{
  basename: "/flow90/",
}
);
