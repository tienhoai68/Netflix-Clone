import axios from "axios";
import { Authorization, BASE_URL } from "../constants/api";

const requestApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: Authorization,
  }
})



export { requestApi };
