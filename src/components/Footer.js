import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import img from "../images/logo.png";

const Footer = () => {

  const navigate=useNavigate();
  return (
    <>
      <footer className="bg-white py-5 footer">
        <div className="container">
          <div className="row gy-4">

            <div className="col-md-3">
              <h4 className="fw-bold mb-3 ">
              <img src={img} alt="logo" className=" logo logofooter" onClick={()=>navigate('/')}  />
              </h4>

              <p className="mb-2">
                <strong>ADDRESS:</strong> Rajendra Nagar, Indore
              </p>

              <p className="mb-2">
                <strong>PHONE:</strong> +91 7415377427
              </p>

              <p>
                <strong>EMAIL:</strong> rohanprajapati@gmail.com
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="fw-bold mb-3">MENU</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink to="/" className="text-decoration-none fw-semibold text-dark">
                    Home
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/about" className="text-decoration-none fw-semibold text-dark">
                    About
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/product" className="text-decoration-none fw-semibold text-dark">
                    Products
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/blog" className="text-decoration-none fw-semibold text-dark">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="text-decoration-none fw-semibold text-dark">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="fw-bold mb-3">ACCOUNT</h5>
              <ul className="list-unstyled">
               
              
                <li className="mb-2">
                  <NavLink to="/login" className="text-decoration-none fw-semibold text-dark">
                    Login
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/register" className="text-decoration-none fw-semibold text-dark">
                    Register
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/product" className="text-decoration-none fw-semibold text-dark">
                    Shopping
                  </NavLink>
                </li>
               
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="fw-bold mb-3">NEWSLETTER</h5>
              <p>Subscribe to our newsletter and get update notifications.</p>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Mail"
                />
                <button className="btn btn-danger allbuttons" >
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <div className="bg-dark text-white text-center py-3">
        Designed By <NavLink to="https://github.com/RohanPrajapati4545" className='text-danger text-decoration-none' >Rohan-Prajapati</NavLink>
      </div>
    </>
  )
}

export default Footer
