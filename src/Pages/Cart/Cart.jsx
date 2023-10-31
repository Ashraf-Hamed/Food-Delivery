import React from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../Redux/cartSlice';
import DetailsCart from '../DetailsCart/DetailsCart';
import { Link } from 'react-router-dom';

export default function Cart() {


  let {cartItems , totalQuantity , totalAmount} = useSelector((state) => state.cart)





  return (
    <>

    <Helmet>
    <meta charSet="utf-8" />
    <title>Cart Page</title>
  </Helmet>
     

  <section>
      <div className="container">
          <div className="row">

          <div className="mb-5 border p-4 w-50">
          <h6>
            Subtotal: $
            <span className="cart__subtotal">{totalAmount}</span>
          </h6>
          <p>Taxes and shipping will calculate at checkout</p>
          <div className="cart__page-btn d-flex gap-5">
            <button className="addTOCart__btn me-4">
              <Link to="/allfood">Continue Shopping</Link>
            </button>
            <button className="addTOCart__btn">
              <Link to="/checkout">Proceed to checkout</Link>
            </button>
          </div>
        </div>
              <div className="col-lg-12">
                {

                  cartItems.length === 0 ? <h5 className='text-center'>Your Cart is Empty</h5>  : <>

                  <table className='table table-borderd'>
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItems.map((item) => 
                            <DetailsCart item={item} key={item.id}/>
                          )}
                    </tbody>
                  </table>
                  
                  </>
                }

              
              </div>
          </div>
      </div>
  </section>
      
    </>
  )
}
