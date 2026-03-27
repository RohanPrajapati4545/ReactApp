import React from 'react'
import newArrivals from '../images/arrival-bg.png'

const NewArrival = () => {
  return (
    <section
      className="new-arrival d-flex align-items-center"
      style={{
        backgroundImage: `url(${newArrivals})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '90vh'
      }}
    >
      <div className="container">
        <div className="row new-arrival-row">
          <div className="col-md-6 new-arrival-content">
            <h1 className="fw-bold display-3 new-arr-head">New Arrivals</h1>
            <p>DON'T BLINK!!</p>
            <p className="fs-7">
              Shop our latest collection and grab your favorites <br />
              Cause every season calls for a whole new wardrobe
            </p>
            <button className="btn btn-danger allbuttons">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrival
