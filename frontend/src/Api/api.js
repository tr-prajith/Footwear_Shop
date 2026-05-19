const baseurl = "http://localhost:5000"

// Showing the product datas
export const getData = async () => {
    const api = await fetch(`${baseurl}/admin/show`,
        {
            credentials:"include"
        }
    )
    return api.json()
}

// User Registration
export const userRegister = async (postdata) => {
    const res = await fetch(`${baseurl}/user/signup`,
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(postdata)
        })
        return res.json()
}

// User Login
export const userLogin = async (postdata) => {
    const res = await fetch(`${baseurl}/user/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify(postdata)
        })
    return res.json()
}




// Admin Add product 
export const addProduct =async (addData) => {
    const res = await fetch(`${baseurl}/admin/add`,
        {
            method:"POST",
            headers: {
                
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(addData)
        })
        return res.json()
}