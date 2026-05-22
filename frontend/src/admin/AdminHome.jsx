import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../Api/api'
import '../styles/admin/AdminHome.css'

const AdminHome = () => {

  const navigate = useNavigate()
  const [form,setForm] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    sizes: "",
    stock: "",
  })

  // image upload
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => formData.append(key, value))
    if (image) formData.append('image', image)

    try {
      const res = await addProduct(formData)
      if (res.success) {
        console.log("Product Added Successfully");
        alert("Product Added Successfully")
        navigate('/list-products')

        setForm({
          name: "",
          brand: "",
          price: "",
          description: "",
          sizes: "",
          stock: "",

        })
        setImage(null)

      } else {
        console.log("Error in Creating Product");
      }
    } catch (error) {
      console.log(error);
      alert("Product Creation Failed")

    }
  }
  return (
    <div className='admin-container'>
      <div className="admin-card">
        <div className="admin-head">
          <h2>Add Product</h2>
        </div>
        <form className='add-item' onSubmit={handleSubmit} >
          <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter the product name' required/>
          <input type="text" name='brand' value={form.brand} onChange={handleChange} placeholder='Enter the brand name' required/>
          <input type="number" name='price' value={form.price} onChange={handleChange} placeholder='Enter the product price' required/>
          <input type="text" name='description' value={form.description} onChange={handleChange} placeholder='Enter a product description' required/>
          <input type="text" name='sizes' value={form.sizes} onChange={handleChange} placeholder='Enter the sizes' required/>
          <input type="number" name='stock' value={form.stock} onChange={handleChange} placeholder='Enter the available stock' required/>
          <input type="file" name='image' onChange={handleImage} accept='image/*' required/>
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AdminHome