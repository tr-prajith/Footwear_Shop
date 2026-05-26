const baseurl = "http://localhost:5000"



// User Registration
export const userRegister = async (postdata) => {
    const res = await fetch(`${baseurl}/user/signup`,
        {
            method: "POST",
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
            credentials: "include",
            body: JSON.stringify(postdata)
        })
    return res.json()
}




// Admin Add product 
export const addProduct = async (addData) => {
    const res = await fetch(`${baseurl}/admin/add`,
        {
            method: "POST",
            credentials: "include",
            body: addData
        })
    return res.json()
}

// Showing the product datas
export const getData = async () => {
    const res = await fetch(`${baseurl}/admin/show`,
        {
            credentials: "include"
        }
    )
    return res.json()
}


// new added api for user home
export const homeProduct = async () => {
    const res = await fetch(`${baseurl}/user/`,
        {
            credentials: "include"
        }
    )
    return res.json()
}

// Add to cart
export const addToCart = async (cartData) => {
    const res = await fetch(`${baseurl}/cart/add-cart`,
        {
            method: "POST",
            headers: {
                "Contend-Type" : "application/json"
            },
            credentials:"include",
            body : JSON.stringify(cartData)
        }
    )
    return res.json()
}


// Cart count
export const cartCount = async () => {
    const res = await fetch(`${baseurl}/cart/count`,
        {
            credentials: "include"
        }
    )
    return res.json()
}