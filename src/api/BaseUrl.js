
import axios from "axios";

const API = axios.create({
  baseURL: "https://demo.madurasoft.in",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;