import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://123.31.17.35:8098",
  headers: {
    accept: "*/*",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    const { data } = response;
    return { ...data, error: data?.error || "", errors: data?.errors || {} };
  },
  (error) => {
    let data = error?.response?.data || {};
    if (data) {
      data = { data };
    }
    if (data?.error === undefined && error?.message) {
      data.error = `${error?.message}`;
    }
    return Promise.resolve(data);
  }
);

export default axiosClient;
