import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../Api/api'
import '../styles/admin/AdminHome.css'

const AdminHome = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    sizes: "",
    stock: "",
    // images: ""
  })

  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {
      const res = await addProduct(data)
      if (res.data.success) {
        console.log("Product Added Successfully");
        navigate('/list-products')
        alert("Product Added Successfully")
        setData({
          name:"",
          brand:"",
          price:"",
          description:"",
          sizes: data.sizes.split(","),
          stock: ""
        })
      } else {
        console.log("Error in Creating Product");
      }
    }catch(error){
      console.log(error);
      alert("Product Creation Failed")
      
    }
  }
  return (
    <div className='container'>
      <div className="card">
        <div className="head">
          <h2>Add Product</h2>
        </div>
        <form className='add-item' onSubmit={handleSubmit}>
          <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Enter the product name' />
          <input type="text" name='brand' value={data.brand} onChange={handleChange} placeholder='Enter the brand name' />
          <input type="number" name='price' value={data.price} onChange={handleChange} placeholder='Enter the product price' />
          <input type="text" name='description' value={data.description} onChange={handleChange} placeholder='Enter a product description' />
          <input type="text" name='sizes' value={data.sizes} onChange={handleChange} placeholder='Enter the sizes'/>
          <input type="number" name='stock' value={data.stock} onChange={handleChange} placeholder='Enter the available stock'/>
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AdminHome