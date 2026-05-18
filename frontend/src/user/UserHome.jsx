import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const UserHome = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await getData()
      setData(res.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <Navbar />
      <Card />
    </div>


  )
}

export default UserHome