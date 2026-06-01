import React from 'react'
import { useState, useEffect } from 'react'
import { getCart } from '../Api/api'
import '../styles/user/Cart.css'

const Cart = () => {

    const [cart, setCart] = useState([])

      useEffect(() => {
        const fetchcart = async () => {
            const res = await getCart()
            setCart(res.data.products)
            console.log(res);
            
        }
        fetchcart()
      }, [])
      console.log(cart);
      

    return (
        <div>Cart

            {cart.map((item)=>(

                <div key={item._id}>
                    <img className='cart-image'
                    src={`http://localhost:5000/uploads/${item.productId.image}`} alt={item.productId.name} width="150" />
                    <h3>{item.productId.name}</h3>
                    <h3>{item.productId.price}</h3>
                    <h3>{item.size}</h3>
                    <h3>{item.productId.stock}</h3>

                    <div className="quantity">
                    <button>-</button>
                        <span>{item.quantity}</span>
                        <button>+</button>
                    </div>
                    
                </div>
                
            ))}
        </div>
  )
}

export default Cart