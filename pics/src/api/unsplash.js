import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CPXUoX5lXxr_4aHNzhCO4fb22UgB9OfFEXwmTdNwF2I",
  },
});
