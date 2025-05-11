import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Restaurentlist from "./components/Restaurentlist";
import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";



import { createBrowserRouter, RouterProvider, } from "react-router-dom";



const App = () => {
  const [cart, setcart] = useState([]);

const Addtocart = (item) => {
  setcart((prevcart) => [...prevcart, item])
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <>
        <Navbar/>
        <Home />
        <Restaurentlist setcart={setcart} Addtocart={Addtocart}/>
       
      </>
      )
    },
    {
      path: "/cart",
      element: (
        <>
        <Navbar/>
        <Cart cart={cart} />
        </>
      )
    },
    {
      path: "/restaurant",
      element: (
        <>
        <Navbar/>
        <Restaurant/>
      
        </>
      )
    }
  ])


  return(
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
  
}

export default App