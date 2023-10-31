import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className=" footer__logo text-start">
                <img src={logo} alt="logo" />
                <h5>Tasty Treat</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt pariatur accusamus
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
            <h5 className="footer__title">Delivery Time</h5>
            <h3 className="deliver__time-list">
              <h4 className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </h4>

              <h4 className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </h4>
            </h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
            <h5 className="footer__title">Contact</h5>
            <h3 className="deliver__time-list">
              <h4 className=" delivery__time-item border-0 ps-0">
                <p>Location: Cairo, Mansoura</p>
              </h4>
              <h4 className=" delivery__time-item border-0 ps-0">
                <span>Phone: 01026760747</span>
              </h4>

              <h4 className=" delivery__time-item border-0 ps-0">
                <span>Email: ashrafmhmd83@gmail.com</span>
              </h4>
            </h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
            </div>
          </div>

          <div className="row mt-5">
          <div className="col-md-6">
            <p className="copyright__text">
              Copyright - 2023, website made by AshrafHamed. All Rights
              Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/ashrafhamed367" target="_blank">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/Ashraf-Hamed" target="_blank">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

             

              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/ashraf-hamed-66581b204/" target="_blank">
                  <i className="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
