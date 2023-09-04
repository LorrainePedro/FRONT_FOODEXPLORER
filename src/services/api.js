import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketfoods-api.onrender.com",
});
//baseURL: "http://localhost:3333",
