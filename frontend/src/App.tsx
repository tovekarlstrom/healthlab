import React, { useEffect, useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import "./App.css";
import Login from "./components/Login";
import HomeView from "./view/HomeView";
import HomePage from "./view/HomePage";
import RegisterAccount from "./components/RegisterAccount";
import RecipeView from "./view/RecipeView";
import { LoggedInContext } from "./LoggedInContext";
import LoggedInHomePage from "./view/LoggedInHomePage";

function App() {
  const [loggedIn, setLoggedIn] = useState({
    id: "",
    full_name: "",
    email: "",
    img: "",
  });
  useEffect(() => {
    const storedLoggedInUser = localStorage.getItem("loggedInUser");
    if (storedLoggedInUser) {
      const parsedLoggedInUser = JSON.parse(storedLoggedInUser);
      setLoggedIn(parsedLoggedInUser);
    }
  }, []);
  useEffect(() => {
    console.log("loggedIn", loggedIn);
  }, [loggedIn]);
  localStorage.clear();
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <Login />, path: "/login" },
        { element: <HomePage />, path: "/homepage" },
        { element: <RegisterAccount />, path: "/register" },
        { element: <RecipeView />, path: "/recipe/:recipeName" },
        { element: <LoggedInHomePage />, path: "/loggedInHomePage" },
      ],
      element: <Root />,
    },
  ]);
  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <RouterProvider router={router} />
    </LoggedInContext.Provider>
  );
}

export default App;
