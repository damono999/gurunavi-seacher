import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: API_BASE_URL,
  });
};
