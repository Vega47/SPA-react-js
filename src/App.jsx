import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/home";
import Layout from "./layout/Layout";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Recipes from "./Recipes/Recipes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "recipes", element: <Recipes /> },
      ],
    },
  ],
  {
    basename: "/SPA-react-js", // تأكد من مطابقة اسم المستودع
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
