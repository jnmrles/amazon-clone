import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-c271c/us-central1/api", // THE API URL (CLOUD FUNCTION)
});

export default instance;
