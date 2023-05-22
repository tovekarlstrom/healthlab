import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import "./App.css";

import Login from "./components/Login";
import HomeView from "./view/HomeView";
import HomePage from "./view/HomePage";
import RegisterAccount from "./components/RegisterAccount";
import RecipeView from "./view/RecipeView";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <Login />, path: "/login" },
        { element: <HomePage />, path: "/homepage" },
        { element: <RegisterAccount />, path: "/register" },
        { element: <RecipeView />, path: "/recipe/:recipeName" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
