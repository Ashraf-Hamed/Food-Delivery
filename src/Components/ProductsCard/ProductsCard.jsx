import React from 'react'

export default function ProductsCard(props) {

 
    const { id, title, image01, price } =  props.product;
   
  return (
    <>
      
    <div className="product__item">
    <div className="product__img">
      <img src={image01} alt="product-img" className="w-50" />
    </div>

    <div className="product__content">
      <h5>
        <Link to={`/allfood/${id}`}>{title}</Link>
      </h5>
      <div className=" d-flex align-items-center justify-content-between ">
        <span className="product__price">${price}</span>
        <button className="addTOCart__btn" >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
    </>
  )
}
