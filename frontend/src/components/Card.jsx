import React, { useState, useEffect } from 'react'
import { addToCart, homeProduct } from '../Api/api'


const Card = () => {

  const [data, setdata] = useState([])
  useEffect(() => {

    const fetchdata = async () => {
      const res = await homeProduct()
      setdata(res.data)
    }
    fetchdata()
  }, [])

  const handleCart = async (product) => {
    const cartData = {
      productId: product._id,
      quantity: 1,
      size: product.sizes[0]
    }
    const res = await addToCart(cartData)
    console.log(res);
    
  }
  return (
    <div className="list-container">
      <div className="list-card">
        
        {data.map((i) => (
          
          <div className="card-items" key={i._id}>
            <img src={`http://localhost:5000/uploads/${i.image}`} alt={i.name} width="200" />
            <h1>Type: {i.name}</h1>
            <h1>Brand: {i.brand} </h1>
            <h1>Price: {i.price} </h1>
            <h1>Size: {i.sizes}</h1>
            <h1>Availbale stock: {i.stock}</h1>
            <h1>{i.description}</h1>
          <button type='submit' className='cart-btn' onClick={() => handleCart(i)}>Add to cart</button>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Card