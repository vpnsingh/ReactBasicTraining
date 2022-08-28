import { JSON_SERVER } from './apiurl'
import axios from 'axios'

// getting all mobiles data
export const getMobiles = () => {
    return axios.get(JSON_SERVER)
}

// fetch single mobile data
export const getSingleMobile = (id) => {
    return axios.get(`${JSON_SERVER}${id}`)
}

// add new mobile data
export const addMobile = (data) => {
    return axios.post(JSON_SERVER, data)
}

// update mobile data
export const updateMobile = (id,data) => {
    return axios.put(`${JSON_SERVER}${id}`, data)
}

// delete mobile data
export const deleteMobile = (id) => {
    return axios.delete(`${JSON_SERVER}${id}`)
}