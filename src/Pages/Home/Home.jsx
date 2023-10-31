import React from "react";
import { Helmet } from "react-helmet";
import heroImg from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../../Components/Category/Category";
import featureImg01 from "../../assets/images/service-01.png";
import featureImg02 from "../../assets/images/service-02.png";
import featureImg03 from "../../assets/images/service-03.png";
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";
import foodCategoryImg04 from "../../assets/images/soda.png";
import { useState } from "react";
import products from "../../assets/data/products";
import PopularFood from "../../Components/UI/PopularFood";
import { useEffect } from "react";
import whyimg from '../../assets/images/location.png'
import TestemonialSlider from "../../Components/UI/TestemonialSlider";
import networkImg from '../../assets/images/network.png'
import FixedElement from "../../Components/FixedElement/FixedElement";


export default function Home() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Drink") {
      const filteredProducts = products.filter(
        (item) => item.category === "drink"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

 
  



  

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5">
                  <button className="order__btn d-flex justify-content-center align-items-center">
                    Order now{" "}
                    <i className="ri-arrow-right-s-line text-center ms-2"></i>
                  </button>

                  <button className="all__food-btn">
                    <Link to={"allfood"}>See all foods</Link>
                  </button>
                </div>

                <div className="hero__service  d-flex align-items-center gap-5 mt-5">
                  <p>
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="hero__img">
                <img src={heroImg} alt="" className="w-100  " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src={featureImg01}
                  className="w-25 mb-3"
                  alt="featureImg01"
                />
                <h5 className=" fw-bold mb-3">Quick Delivery</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus, doloremque
                </p>
              </div>
              <h5></h5>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src={featureImg02}
                  className="w-25 mb-3"
                  alt="featureImg01"
                />
                <h5 className=" fw-bold mb-3">Super Dine In</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus, doloremque
                </p>
              </div>
              <h5></h5>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src={featureImg03}
                  className="w-25 mb-3"
                  alt="featureImg01"
                />
                <h5 className=" fw-bold mb-3">Easy Pick Up</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus, doloremque
                </p>
              </div>
              <h5></h5>
            </div>
          </div>
        </div>
      </section>

      <section className="popularFood">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <h2 className="title">Popular Foods</h2>
            </div>

            <div className="col-lg-12 text-center ">
              <div className=" food__category d-flex align-items-center justify-content-center gap-3">
              <button
              className={`all__btn  ${
                category === "ALL" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("ALL")}
            >
              All
            </button>
            <button
              className={`d-flex align-items-center gap-2  typebtn ${
                category === "BURGER" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("BURGER")}
            >
              <img src={foodCategoryImg01} alt="" />
              Burger
            </button>

            <button
              className={`d-flex align-items-center gap-2 typebtn ${
                category === "PIZZA" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("PIZZA")}
            >
              <img src={foodCategoryImg02} alt="" />
              Pizza
            </button>

            <button
              className={`d-flex align-items-center gap-2 typebtn ${
                category === "BREAD" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("BREAD")}
            >
              <img src={foodCategoryImg03} alt="" />
              Bread
            </button>

            <button
              className={`d-flex align-items-center gap-2 typebtn ${
                category === "Drink" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("Drink")}
            >
              <img src={foodCategoryImg04} alt="" style={{width : '30px' , height : '30px'}} className="imgDrink"/>
              Drink
            </button>


              </div>
            </div>
           
            {allProducts.map((item) => (
              <div className ="col-lg-3 col-md-4 col-sm-6 mt-5"  key={item.id} >
                <PopularFood item={item} />
              </div>
            ))}
            

          
          </div>
        </div>
      </section>


      <section className="why__choose-us">
      
              <div className="container">
              <div className="row">
              
                  <div className="col-md-6">
                      <img src={whyimg} className="w-100" alt="whyimg" />
                  </div>
                  <div className="col-md-6">
                      <div className="why__tasty-treat mt-4">
                      <h2 className="tasty__treat-title mb-4">
                          Why <span>Tasty Treat?</span>
                       </h2>

                        <p className="tasty__treat-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, minus. Tempora reprehenderit a corporis velit,
                        laboriosam vitae ullam, repellat illo sequi odio esse iste
                        fugiat dolor, optio incidunt eligendi deleniti!
                      </p>


                  <div className="mt-4">
                  <div className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </div>

                      </div>
                      <div className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2 ">
                        <i className="ri-checkbox-circle-line"></i> Quality support
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, earum.
                      </p>
                    </div>
  
                    <div className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2 ">
                        <i className="ri-checkbox-circle-line"></i>Order from any
                        location{" "}
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, earum.
                      </p>
                    </div>
                  </div>
              </div>

              </div>
              </div>
      </section>

      <section>
      <div className="container hotPizza">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <h2 className="title">Hot Pizza</h2>
                    </div>

                    {hotPizza.map((item) => (
                      <div className ="col-lg-3 col-md-4 col-sm-6 mt-5"  key={item.id} >
                        <PopularFood item={item} />
                      </div>
                    ))}
                </div>
      </div>
      </section>

      <section>
              <div className="container network">
              
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="testimonial">
                              <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                              <h2 className="testimonial__title mb-4">
                              What our <span>customers</span> are saying
                            </h2>
                            <p className="testimonial__desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Distinctio quasi qui minus quos sit perspiciatis inventore
                            quis provident placeat fugiat!
                          </p>

                            <TestemonialSlider/>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <img src={networkImg}  alt="" className="w-100 networkImg"/>
                          </div>
                        </div>
              </div>
      </section>

      <FixedElement/>
    </>
  );
}
