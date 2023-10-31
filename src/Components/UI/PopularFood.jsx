import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/cartSlice';
import { Link } from 'react-router-dom';

export default function PopularFood(props) {

    const { id, title, image01, price } = props.item;
    
    let dispatch = useDispatch() ;

     function addToCart() {
        dispatch(addItem({id, title, price,image01} ))
        console.log('added to cart');
     }
   
     return (
        <div className="product__item">
        <Link to={`/food/${id}`}>
        <div className="product__img">
        
            <img src={image01} alt="product-img" className="w-50" />
          </div>
          </Link>
          <div className="product__content">
            <h5>
              {title.split(" ").slice(0,2).join(" ")}
            </h5>
            <div className="control d-flex flex-column align-items-center justify-content-between ">
              <span className="product__price my-3">${price}</span>
              <button className="addTOCart__btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
}
