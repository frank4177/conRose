import axios from "axios";


const BASE_URL = "https://okigwecreations.online/api/"


export const request = axios.create({
  baseURL: BASE_URL
});

const dev = {
    url: {
      API_URL: "https://okigwecreations.online/api/",
    },
  };
  
  export const Config = dev;