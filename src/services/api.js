import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketnotes-server-leonardosilvabras.onrender.com'
});