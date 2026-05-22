import { useState,useEffect } from 'react';
import { getData } from '../Api/api';



const ProductList = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(data)
      setData(res.data)
      console.log(res)
    }
    fetchData()
  }, [])


  return (
    <div className="list-container">
      <div className="list-card">
        {data.map((i) => (
          <div className="card-items" key={i._id}>
            <h1>{i.name}</h1>
            <h1>{i.brand} </h1>
            <h1>{i.price} </h1>
            <h1>{i.sizes}</h1>
            <h1>{i.stock}</h1>
            <h1>{i.description}</h1>
             <img
              src={`http://localhost:5000/uploads/${i.image}`}alt={i.name}width="200"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList