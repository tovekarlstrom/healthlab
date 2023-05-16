<<<<<<< HEAD
import React from 'react';
import Footer from './components/Footer';
import MicroNutrient from './components/MicroNutrients';
import './App.css';

function App() {
  return (
    <div className="App">
      <MicroNutrient></MicroNutrient>
     <Footer></Footer>
    </div>
  );
import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"
import Root from "./Root"
import "./App.css"
=======
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import "./App.css";
>>>>>>> 2a711fcc78730458e2b5b699ef309408ad8318a7

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
