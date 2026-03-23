import { create } from "apisauce";

const env = import.meta.env;
const apiUrl = env.VITE_API_URL;

const apiClient = create({
  baseURL: apiUrl,
});

export default apiClient;
