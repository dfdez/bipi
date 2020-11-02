import axios from "axios";
const API = "http://localhost:8080";

export const getCars = () => axios.get(`${API}/cars`);
export const getCar = (id) => axios.get(`${API}/cars/${id}`);
