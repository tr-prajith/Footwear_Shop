const baseurl = "http://localhost:5000"

// Showing the product datas
export const getData = async () => {
    const api = await fetch(`${baseurl}/admin/show`)
    return api.json()
}

export const userLogin = async () => {
    const res= await fetch (`${baseurl}/user/login`,
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify (postdata)
        })
        return res.json()
}
// Admin Login
export const login = async () => {
    const api = await fetch(`${baseurl}/admin/login`)
    return api.json()
}