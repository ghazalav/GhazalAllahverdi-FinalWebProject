import axios from 'axios';
import { MainUrl } from './urls';
import { toast } from 'react-toastify';

export const MovieURL = axios.create({
  baseURL: MainUrl,
});

MovieURL.interceptors.response.use(undefined, (error) => {
  const exp =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!exp) {
    toast.error('Error');
  }
  return Promise.reject(error);
});
