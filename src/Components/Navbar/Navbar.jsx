import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { handleuserToken } from "../../Redux/userSlicer";
import { useRef } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";



export default function Navbar() {



  let {totalQuantity} = useSelector((state) => state.cart)
  console.log(totalQuantity);

 let handlenav = useRef()
  let {userToken} = useSelector((state) => state.user)

  let dispatch = useDispatch()

let navigate = useNavigate()
  function logOut() {
    localStorage.removeItem("userToken");
    dispatch(handleuserToken(null))
    navigate("/login");
  }


  useEffect(() => {

    window.addEventListener("scroll", () => {


      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        handlenav.current.classList.add('header__shrink')
      }
      else {
        handlenav.current.classList.remove('header__shrink')
      }

    })


    
  } ,[])

  return (
    <>
    <nav ref={handlenav} className="navbar navbar-expand-md navbar-light ">
    <div className="container">
    <Link className="navbar-brand" to="/">
    <img src={logo} alt="tasty treat" className="custom-style-logo" />
    </Link>
    <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              
            {userToken !== null ? <>
              
              <li className="nav-item">
              <NavLink className="nav-link me-2" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link me-2" to="allfood">
                Food
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link me-2" to="contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="cart">
                <i className="fa-solid fa-cart-shopping fs-5   mx-2  position-relative">
                <span className="position-absolute top-0 numItem  start-100 translate-middle badge rounded-pill bg-danger">
                   {totalQuantity}
              </span>
                </i>
              </NavLink>
              </li>
           
              </> : ""}
             
                 
               
             
            </ul>

            <ul className="navbar-nav icon_opration  ms-auto mt-2 mt-lg-0 d-flex align-items-center">
              
            {userToken !== null ? <>
              
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
              <i className="fa-solid fa-circle-user fs-5 me-2"></i> 
     
              </NavLink>
              </li>

              <li className="nav-item cursor-pointer">
                <span
                  className="nav-link cursor-pointer fw-bold "
                  onClick={() => logOut()}
                >
                 Logout
                 <i className=" fa-solid fa-arrow-right-from-bracket ms-2"></i>
                </span>
              </li>
              
              </> : 
            
            <>
            
            <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="register">
              Register
            </NavLink>
          </li>
            </>
            } 
           
               
         
             
             
              
                 
             
           
            </ul>
          </div>
    </div>
  </nav>
         
    </>
  );
}
