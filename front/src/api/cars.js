import axios from "axios";
const API = "https://my-json-server.typicode.com/Feverup/fever_pets_data";

// export const getCars = () => axios.get(`${API}/cars`);
// export const getCar = (id) => axios.get(`${API}/cars/${id}`);
const getPets = (filter) => axios.get(`${API}/pets/`, { params: { _page: filter.page, kind: filter.kind, name: filter.name, weight: filter.weight, length: filter.length, height: filter.height } });
const getPetDetail = (id) => axios.get(`${API}/pets/${id}`);

export default {
  getPets,
  getPetDetail
}
