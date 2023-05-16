import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import "./App.css";

import Loggin from "./components/Loggin";
import HomeView from "./view/HomeView";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <Loggin />, path: "/loggin" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
