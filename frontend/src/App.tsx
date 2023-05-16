import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import "./App.css";

import Login from "./components/Login";
import HomeView from "./view/HomeView";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <Login />, path: "/login" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
