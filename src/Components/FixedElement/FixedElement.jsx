import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function FixedElement() {
  

    let [showArrow , setShowArrow] = useState(false);


    useEffect(() => {


        function handleScroll() {
            if(window.scrollY > 100) {
                setShowArrow(true);
            }else {
                setShowArrow(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {window.removeEventListener('scroll', handleScroll)}

    },[])


    function scrollTop() {
        window.scrollTo({
            top :0 ,
            behavior : 'smooth'
        })
    }

  return (
    <>

    {showArrow && (
        <button onClick={scrollTop} className="Up-section fw-bold text-white position-fixed z-1  d-flex  justify-content-center align-items-center  ">
        <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      
    </>
  )
}
