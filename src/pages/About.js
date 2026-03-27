import React from 'react'
import Shopping from '../components/Shopping'
import NewArrival from '../components/NewArrival'
import Footer from '../components/Footer'

const About = () => {
  return (
   <>
   <div className="bg-danger py-5 text-center">
        <h1 className="text-white fw-bold">About Us</h1>
      </div>
   <Shopping />
   <NewArrival />
   
   </>
  )
}

export default About