import axios from "axios";
const tmdbAgent = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * @override to manipulate the the axios configuration for request handlers
 */
tmdbAgent.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`;
    return config;
  },
  function error(error) {
    console.log(error, "error request data");

    return Promise.reject(error);
  }
);

/**
 * @override to manipulate the response data
 */
tmdbAgent.interceptors.response.use(
 async function (response) {
    const { data } = response;
    return data;
  },
  async  function (error) {
    // const {
    //   config,
    //   response: { status },
    // } = error;
    // const originalRequest = config;
    // originalRequest._retry = true;
    // if (!originalRequest._retryCount) {
    //   originalRequest._retryCount = 1;
    // }
    // if (originalRequest._retryCount < MAX_RETRIES) {
    //   originalRequest._retryCount += 1;
    //   await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
    //   console.log("originalRequest", originalRequest._retryCount);      
    //   return tmdbAgent(originalRequest);
    // }
    return Promise.reject(error);
  }
);
export default tmdbAgent;
