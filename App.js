import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Banner from "./components/Banner";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    // parent route component
    element: <App />,
    // child route components
    children: [
      {
        path: "/",
        element: (
          <>
            <Banner />,
            <ProductList />,
          </>
        ),
      },
      // other pages....
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
