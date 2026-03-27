import React from 'react'

const Shopping = () => {
  return (
 <>
 <div className="container my-5 text-center">
      <h2 className="fw-bold fs-1">Why Shop With Us</h2>
      <div style={{ width: 80, height: 4, background: "#ff4d4d", margin: "10px auto 40px" }} />

      <div className="row">
        <div className="col-md-4 box">
          <div className="p-5 text-white rounded" style={{ background: "#022b3a" }}>
            <i className="bi bi-truck fs-1"></i>
            <h4 className="fw-bold mt-3">Fast Delivery</h4>
            <p>within 2-3 days at your doorstep</p>
          </div>
        </div>

        <div className="col-md-4 box">
          <div className="p-5 text-white rounded" style={{ background: "#022b3a" }}>
            <i className="bi bi-box fs-1"></i>
            <h4 className="fw-bold mt-3">Free Shipping</h4>
            <p>free delivery for every product</p>
          </div>
        </div>

        <div className="col-md-4 box">
          <div className="p-5 text-white rounded" style={{ background: "#022b3a" }}>
            <i className="bi bi-award fs-1"></i>
            <h4 className="fw-bold mt-3">Best Quality</h4>
            <p>100% verified best products</p>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default Shopping