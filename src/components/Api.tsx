// src/api.js
import axios from "axios";

const BASE_URL = "https://portfolio-1itw.onrender.com";

// Email Subscription API
export const subscribeEmail = (email: string) =>
  axios.post(`${BASE_URL}/subscribe`, { email });

export const getAllPosts = () => axios.get(`${BASE_URL}/posts`)