import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
const Product = () => {
  const [data, setData] = useState([])
  const navigate=useNavigate();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return (

    <>
     <div className='container'>
        <h1 className='text-center mt-5 mb-5' style={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold" }}>All <span style={{ color: 'red' }}>Products</span></h1>
        <div className='row'>
          {
            data.map((value) => {
              return <div className='col-md-3'>
                <div className='card m-2 mb-4 card-edit '>
                  <div className='card-body'>
                    <img src={value.image} height="180px" width="100%" alt='img' />
                    <h4>{value.category}</h4>
                    <h5>$ {value.price}</h5>
                     <button className='btn btn-danger allbuttons' onClick={()=>navigate(`/product/${value.id}`)}>See More</button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className='text-center mt-3'>
        <button className=' btn btn-danger allbuttons'>View All Product</button>
      </div>
      
    </>

    
  )
}

export default Product
