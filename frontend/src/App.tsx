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

import HomeView from "./view/HomeView"

function App() {
  const router = createHashRouter([
    {
      children: [{ element: <HomeView />, path: "/" }],
      element: <Root />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App;
