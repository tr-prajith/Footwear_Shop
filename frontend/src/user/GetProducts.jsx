import { useEffect } from "react"
import { useState } from "react"
import { getData } from "../Api/api"

const GetProducts = () => {

    const [data, setdata] = useState([])
    useEffect(() => {

        const fetchdata = async () => {
            const res = await getData()
            setdata(res.data)
        }
        fetchdata()
    }, [])
    return (
        <>Products
            {data.map((i, index) => (
                <Card>
                    <h1>{i.name}</h1>
                    <h1>{i.brand}</h1>
                    <h1>{i.price}</h1>

                </Card>
            ))}



        </>
    )
}
export default GetProducts