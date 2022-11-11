import axios from "axios";

const BASE_URL = "https://test-quiz-app-backend.herokuapp.com";

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
