import axios from 'axios'
const API="http://localhost:3000"

export const getCars = () => axios.get(`${API}/cars`)
export const getCar = (id) => axios.get(`${API}/cars/${id}`)