import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getData } from '../Api/api';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Card = styled.div`
  margin: 2px;
  border-radius: 10px;
  background: linear-gradient(#abf160, #c4f3c4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Text = styled.h1`
  text-decoration: 5px underline red;
  margin-bottom: 10px;
`;
const Section = styled.div``;
const SubHead = styled.h3`
  color: grey;
  font-family: "arial";
`;

const ProductList = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const api = await getData(data)
      setData(api.data)
      console.log(api)
    }
    fetchData()
  }, [])

  
  return (
   <Section>
    <GridContainer>
      {data.map((i) =>(
        <Card key ={i._id}>
          <h1>{i.name}</h1>
          <h1>{i.brand} </h1>
          <h1>{i.price} </h1>
          <h1>{i.sizes}</h1>
          <h1>{i.stock}</h1>
          <h1>{i.description}</h1>

        </Card>
      ))}
    </GridContainer>
   </Section>
  )
}

export default ProductList