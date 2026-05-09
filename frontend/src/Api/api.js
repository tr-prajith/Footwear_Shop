const baseurl = "http://localhost:5000"

// Showing the product datas
export const getData= async()=>{
    const api = await fetch(`${baseurl}/admin/show`)
    return api.json()
}


export const login= async()=>{
    const api = await fetch(`${baseurl}/admin/login`)
    return api.json()
}