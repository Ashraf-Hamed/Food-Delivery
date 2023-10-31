import React from 'react'
import products from '../../assets/data/products'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/cartSlice';
import { useEffect } from 'react';
import PopularFood from '../../Components/UI/PopularFood';

export default function FoodDetails() {

  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  let {id} = useParams()
  let dispatch = useDispatch()

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;


  function addToCart() {
    dispatch(addItem({id, title, price,image01} ))
    console.log('added to cart');
 }

 useEffect(() => {
  setPreviewImg(product.image01);
}, [product]);

useEffect(() => {
  window.scrollTo(0, 0);
}, [product]);


const submitHandler = (e) => {
  e.preventDefault();
};


const relatedProduct = products.filter((item) => category === item.category);
  return (
    <>
    <Helmet>
    
    <meta charSet="utf-8" />
        <title>Food-Details</title>    
   </Helmet> 

   <section>
      <div className="container">
          <div className="row">
              <div className="col-lg-2 col-md-2">
              <div className="product__images ">
              <div
                className="img__item mb-3"
                onClick={() => setPreviewImg(product.image01)}
              >
                <img src={product.image01} alt="" className="w-50" />
              </div>
              <div
                className="img__item mb-3"
                onClick={() => setPreviewImg(product.image02)}
              >
                <img src={product.image02} alt="" className="w-50" />
              </div>

              <div
                className="img__item"
                onClick={() => setPreviewImg(product.image03)}
              >
                <img src={product.image03} alt="" className="w-50" />
              </div>
            </div>
              </div>

              <div className='col-lg-4 col-md-4'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </div>


            <div className='col-lg-6 col-md-6'>
            <div className="single__product-content">
              <h2 className="product__title mb-3">{title}</h2>
              <p className="product__price">
                
                Price: <span>${price}</span>
              </p>
              <p className="category mb-5">
                Category: <span>{category}</span>
              </p>

              <button onClick={() => addToCart()}  className="addTOCart__btn">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="col-lg-12">
              <div className="tabs d-flex align-items-center gap-5 py-3 ">
              <h6
              className={` ${tab === "desc" ? "tab__active" : ""}`}
              onClick={() => setTab("desc")}
            >
              Description
            </h6>
            <h6
              className={` ${tab === "rev" ? "tab__active" : ""}`}
              onClick={() => setTab("rev")}
            >
              Review
            </h6>
              </div>



              {tab === 'desc' ? <div className="tab__content">
              <p>{desc}</p>
            </div> : 
            <>
            
            <div className="review pt-5">
            <p className="user__name mb-0">ashraf mhmd</p>
            <p className="user__email">ashraf1@gmail.com</p>
            <p className="feedback__text">great product</p>
          </div>

          <div className="review">
            <p className="user__name mb-0">abdallah</p>
            <p className="user__email">body2@gmail.com</p>
            <p className="feedback__text">great product</p>
          </div>

          <div className="review">
            <p className="user__name mb-0">nour</p>
            <p className="user__email">nour1@gmail.com</p>
            <p className="feedback__text">great product</p>
          </div>

          <form className="form" onSubmit={submitHandler}>
          <div className="form__group">
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setEnteredName(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEnteredEmail(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <textarea
              rows={5}
              type="text"
              placeholder="Write your review"
              onChange={(e) => setReviewMsg(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="addTOCart__btn">
            Submit
          </button>
        </form>



            </>
          
          }
          </div>

          <div className="col-lg-12 mb-5 mt-4" >
          <h2 className="related__Product-title">You might also like</h2>
        </div>


        {relatedProduct.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex" key={item.id}>
            <PopularFood item={item} />
          </div>
        ))}


        <Link to={'/allfood'} className='btn btn-warning text-white mx-auto w-100 mt-5 d-block'>Back Home</Link>
          </div>
      </div>
   </section>
    </>
  )
}
