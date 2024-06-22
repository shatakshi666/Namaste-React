"use strict";
import { ContextAPI } from "../utils/MockContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header";
// import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
// import RestaurantMenu from "./RestaurentMenu";
import { lazy, Suspense } from 'react';

const Body = lazy(() => import('./Body'));
const RestaurantMenu = lazy(() => import('./RestaurentMenu'));

const AppLayout = () => {
  return (
    <div className="app">

      <Header />
      <Outlet />
    </div>
  );
};


const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", element:
          <Suspense fallback={<h1> Body component is loading </h1>}>
            <Body />
          </Suspense>
      },
      {
        path: "/about", element:

          <About />

      },
      {
        path: "/contact", element:
          <ContextAPI.Provider value={
            {
              name: 'Raghav',
              age: 25
            }
          }>
            <Contact />
          </ContextAPI.Provider>
      },
      {
        path: "/restaurants/:restaurantId", element:
          <Suspense fallback={<h1> RestaurantMenu component is loading </h1>}>
            <RestaurantMenu />
          </Suspense>
      },
    ],
    errorElement: <Error />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);