import axios from "axios";
import { setLoading } from "../store/loadingSlice"; 
import store from "../store/store";
const axiosInterceptor = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInterceptor.interceptors.request.use((config) => {
  store.dispatch(setLoading(true));
  return config;
}, (error) => {
  store.dispatch(setLoading(false));
  return Promise.reject(error);
});

axiosInterceptor.interceptors.response.use((response) => {
  store.dispatch(setLoading(false));
  return response;
}, (error) => {
  store.dispatch(setLoading(false));
  return Promise.reject(error);
});

export default axiosInterceptor;
