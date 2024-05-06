import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import Error from "./Component/Error";
import RestaurentMenu from "./Component/RestaurentMenu";
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./Component/Grocery"));
const About = lazy(() => import("./Component/About"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const AppLoader = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading ,pls wait">
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <ContactUs name="contatct" /> },
      { path: "/Restaurent/:resId", element: <RestaurentMenu /> },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback="Loading ,pls wait">
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppLoader} />);
