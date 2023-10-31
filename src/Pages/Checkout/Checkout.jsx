import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Checkout() {


  let carttotalAmount = useSelector((state) => state.cart.totalAmount)
  console.log(carttotalAmount);
  
    let ShippingCost = 30 
    const totalAmount = carttotalAmount + Number(ShippingCost);
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Check out Page</title>
  </Helmet>


  <section>
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-6">
              <form className="checkout__form" >
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setEnterName(e.target.value)}
                />
              </div>

              <div className="form__group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEnterEmail(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  type="number"
                  placeholder="Phone number"
                  required
                  onChange={(e) => setEnterNumber(e.target.value)}
                />
              </div>
            
              <div className="form__group">
                <input
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) => setEnterCity(e.target.value)}
                />
              </div>
              
             <Link to={'/'}> <button type="submit" className="addTOCart__btn">
             Payment
           </button> </Link>
            </form>
              </div>
              <div className="col-lg-4 col-md-6">
              <div className="checkout__bill">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal: <span>{carttotalAmount} $</span>
              </h6>
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping: <span>{ShippingCost} $</span>
              </h6>
              <div className="checkout__total">
                <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>{totalAmount}$</span>
                </h5>
              </div>
            </div>
              </div>
          </div>
      </div>
  </section>
    </>
  )
}
