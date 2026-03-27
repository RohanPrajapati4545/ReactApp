import React from 'react'
import NewArrival from '../components/NewArrival'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <> <div className="bg-danger py-5 text-center">
        <h1 className="text-white fw-bold">Contact us</h1>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form>
              <input
                type="text"
                className="form-control  mb-4 py-3 rounded-0" 
                placeholder="Enter Your Full Name"
              />

              <input
                type="email"
                className="form-control mb-4 py-3 rounded-0"
                placeholder="Enter Your Email Address"
              />

              <input
                type="text"
                className="form-control mb-4 py-3 rounded-0"
                placeholder="Enter Subject"
              />

              <textarea
                className="form-control mb-4 py-3 rounded-0"
                
                placeholder="Enter Your Message"
              ></textarea>

              <div className="text-center">
                <button className="btn btn-dark px-5 py-2 rounded-0 fw-semibold">
                  Submit
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
      
      <NewArrival />
     
      
      </>
  )
}

export default Contact