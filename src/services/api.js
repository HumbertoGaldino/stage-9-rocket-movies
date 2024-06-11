import axios from "axios";

export const api = axios.create({
  baseURL: "https://stage-8-movie-api.onrender.com",
});
