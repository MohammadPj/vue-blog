import axios from "axios";

export const http = axios.create({
  baseURL: `https://api.realworld.io/api/`,
});
const token = localStorage.getItem("token");
if (token) {
  http.defaults.headers.common = { Authorization: `Token ${token}` };
}
