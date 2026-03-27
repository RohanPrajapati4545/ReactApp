import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

      const [product, setProduct] = useState('');
      
    let {id}=useParams();

    const getData= async()=>{
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json()
      console.log(res);
      setProduct(res)
        } catch (error) {
            
        }
    }
useEffect(() => {
    getData();
  });
  return (
    <>
     <div className='container '>
        <div className="row">
              <div className="col-md-8 mt-4 offset-md-2">
                <div className='card  card-edit'>
                  <div className="card-body">
                   <div className='d-flex'>
                    <div>
                         <img src={product.image} width="300px" height="300px" alt="product" />
                    </div>
                    <div className='ms-3'>
                        <h4>{product.category}</h4>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button className='btn btn-danger m-2 allbuttons'>Buy Now</button>
                     <button className='btn btn-warning allbuttons'>Add to Cart</button>
                    </div>
                 
                  </div>
                   </div>
                </div>
              </div>

          
        </div>
      </div>

    </>
  )
}

export default SingleProduct