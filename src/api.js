import axios from "axios"

const baseUrl = `http://localhost:3003`

export const login = (advertiser) => {
    return axios.post(`${baseUrl}/advertiser/getByEmail&Password`, advertiser)
}
export const signIn = (advertiser) => {
    return axios.post(`${baseUrl}/advertiser`, advertiser)
}

export const getApartmentById = (id) => {
    return axios.get(`${baseUrl}/apartment/getbyid/${id}`)
}

export const getAllApartments = () => {
    return axios.get(`${baseUrl}/apartment`)
}
export const getApartmentByCategory = (id) => {
    return axios.get(`${baseUrl}/apartment/getByCategory/${id}`)
}
export const getApartmentByCity = (id) => {
    return axios.get(`${baseUrl}/apartment/getByCity/${id}`)
}
export const getApartmentByBeds = (bed, num) => {
    return axios.get(`${baseUrl}/apartment/getByNumBeds/${bed}/${num}`)
}
export const getApartmentByPrice = (price,num) => {
    return axios.get(`${baseUrl}/apartment/getByPrice/${price}/${num}`)
}

export const getApartmentByAdvertiser = (id, token) => {
    return axios.get(`${baseUrl}/apartment/getByAdvertiser/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createApartment = (apartment, token, id) => {
    return axios.post(`${baseUrl}/apartment`, apartment, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }

    }
    )
}
export const updateApartment = (id, apartment, token) => {
    return axios.patch(`${baseUrl}/apartment`, apartment,
        {
            headers: {
                'Content-Type':'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })

}
export const delApartment = (id, idA, token) => {
    return axios.delete(`${baseUrl}/apartment/${id}/${idA}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const getAllCategory = () => {
    return axios.get(`${baseUrl}/category`)
}

export const createCategory = (category, token) => {
    return axios.post(`${baseUrl}/category`,category,{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }}
    )
}

export const getAllCity = () => {
    return axios.get(`${baseUrl}/city`)
}

export const createCity = (city, token) => {
    return axios.post(`${baseUrl}/city`,city,
         {headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }}
      
    )

 
}
export const sendMail=()=>{

}