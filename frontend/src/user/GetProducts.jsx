import { useEffect } from "react"
import { useState } from "react"
import { getData } from "../Api/api"
import styled from 'styled-components'

// const Card = styled.div`
// background-color:yellow; `


// const GetProducts = () => {

//     const [data, setdata] = useState([])
//     useEffect(() => {

//         const fetchdata = async () => {
//             const res = await getData()
//             setdata(res.data)
//         }
//         fetchdata()
//     }, [])
//     return (
//         <>Products
//             {data.map((i) => (
//                 <Card key={i._id }>

//                     <h1>{i.name}</h1>
//                     <h1>{i.brand}</h1>
//                     <h1>{i.price}</h1>

//                 </Card>
//             ))}



//         </>
//     )
// }
// export default GetProducts



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

const GetProducts = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await getData(data);
      setdata(res.data);
      console.log(res);
    };
    fetchdata();
  }, []);

  const handledelete = async (id) => {
    window.confirm("Are you sure?");

    try {
      const res = await deletepost(id);

      if (res.success) {
        setdata(data.filter((post) => post._id !== id));

        alert("Deleted successfully ✅");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Section>
      <GridContainer>
        {data.map((e, index) => (
          <Card key={e._id || index}>
            <Text>{e.name}</Text>
            <p>{e.description}</p>
            <SubHead>{e.price}</SubHead>
            {/* <Link to={`/edit/${e._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handledelete(e._id)}>Delete</button> */}
          </Card>
        ))}
      </GridContainer>
    </Section>
  );
};

export default GetProducts;