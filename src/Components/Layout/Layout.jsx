import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { handleuserToken } from '../../Redux/userSlicer'
import { useDispatch } from 'react-redux'

export default function Layout() {

handleuserToken

  
 let dispatch = useDispatch()


  useEffect(() => {
    if(localStorage.getItem('userToken') !== null ) {
        dispatch(  handleuserToken(localStorage.getItem('userToken')))
    }
  } , [])
  return (
    <>


    <div className="parent">

    <Navbar/>

    <div className="">
    
    <Outlet/>
    </div>

    <Footer/>
    </div>
    
      
    </>
  )
}
