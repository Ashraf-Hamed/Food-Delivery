import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

import AllFood from './Pages/AllFood/AllFood'
import Checkout from './Pages/Checkout/Checkout'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Food from './Pages/Food/Food'
import FoodDetails from './Pages/FoodDetails/FoodDetails'
import Profile from './Pages/Profile/Profile'

export default function App() {


   
  let routes = createHashRouter( [ 
    {path : '/' , element : <Layout/> , children : [
      {index : true , element : <Home/>},  
      {path : 'cart' , element : <Cart/>}, 
      {path : 'contact' , element : <Contact/>}, 
      {path : 'profile' , element : <Profile/>}, 
      {path : 'allfood' , element : <AllFood/>}, 
      {path : 'food/:id' , element : <FoodDetails/>}, 
      {path : 'checkout' , element : <Checkout/>}, 
      {path : 'login' , element : <Login/>}, 
      {path : 'register' , element : <Register/>}, 
    ] }
  ])







  return (
    <div>
      
       <RouterProvider router={routes}></RouterProvider>

    </div>
  )
}
