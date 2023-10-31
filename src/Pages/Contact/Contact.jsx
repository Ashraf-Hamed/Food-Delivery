import React from 'react'
import { Helmet } from 'react-helmet'
import img from '../../assets/images/contact.png'

export default function Contact() {
  return (
    <div>
    <header className="contact ">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact Us</title>
    </Helmet>
    <div className="container  pt-5">
      <div className="row justify-content-center align-items-center gx-3">
        <div className="col-lg-7 col-md-12">
          <div className="image animate__animated animate__backInLeft animate-duration animate-delay ">
            <img src={img} className="w-75" alt="contact Us Image" />
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="info animate__animated  animate__backInRight d-flex justify-content-start flex-column align-items-start ">
            <h5 className="fw-bold  ">
              Get in <br />
              Touch
            </h5>
          <p className="fs-5  text-muted ">
              Call, email, text me — whatever works for you. I'll be here.{" "}
              <br /> Let's Talk!
            </p>

            <table className="table table-bordered table-striped mt-3">
              <thead>
                <tr>
                  <th scope="row">
                    Name
                  </th>
                  <td scope="col" className='fw-bold'> Ashraf Mohamed Ahmed Hamed</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row ">
                     Date
                    of birth
                  </th>
                  <td scope="col" className='fw-bold'>April 17, 2000.</td>
                </tr>

                <tr>
                  <th scope="row">
                  
                    Address
                  </th>
                  <td scope="col" className='fw-bold'>Mansoura, Egypt.</td>
                </tr>
                <tr>
                  <th scope="row">
                  
                    Phone
                  </th>
                  <td scope="col">
                    <a  href="tel:+20 106 4146 193">+20 1026760747</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    
                    Email
                  </th>
                  <td scope="col">
                    <a  href="mailto:ashrafmhmd83@gmail.com">
                      ashrafmhmd83@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />

        
          </div>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}
