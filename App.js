import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductList from "./components/ProductList";
import React, { Suspense, lazy, useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import AboutUs from "./components/AboutUs";
import Page404 from "./components/Page404";
import ContactUs from "./components/ContactUs";
import Banner from "./components/Banner";
import UserContext from "./utils/UserContext";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const ProductCategory = lazy(() => import("./components/ProductCategory"));

function App() {
  // Authentication code

  const [user, setUser] = useState(null);

  useEffect(() => {
    // API to fetch user
    const data = {
      user: "Rosie",
    };
    setUser(data.user);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: user }}>
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    // parent route component
    element: <App />,
    errorElement: <Page404 />,
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
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/ProductCategory",
        // Wrap the lazy loaded component using suspense.
        element: (
          <Suspense>
            <ProductCategory />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
