import React, { useEffect } from 'react'
import { getData } from '../Api/api'

const Card = () => {
    
        const [data, setdata] = useState([])
        useEffect(() => {
    
            const fetchdata = async () => {
                const res = await getData()
                setdata(res.data)
            }
            fetchdata()
        }, [])
  return (
    <div className='container'>
      <div className="card">
        {data.map((i, index) => (
          <div className="card-items">
            <h1>{i.name}</h1>
            <h1>{i.brand} </h1>
            <h1>{i.price} </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card