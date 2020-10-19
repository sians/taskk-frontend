import axios from "axios";
import CONFIG from "../config";
import useStorage from "../hooks/useStorage";

const { clientHeaders, setStorageAuthToken } = useStorage();
const instance = axios.create({
  baseURL: CONFIG.apiOrigin,
  headers: clientHeaders
});

//on successful response
instance.interceptors.response.use(
  res => {
    console.log('hanging out in client', res.headers)

    if (res.headers["authorization"]) {
      instance.defaults.headers.common["authorization"] =
        res.headers["authorization"];
      setStorageAuthToken({
        token: res.headers["authorization"],
        tokenDate: new Date(),
        user: res.data
      });
    }
    return res;
  },
  error => {
    const fallbackValue = [
      {
        userId: "Not authorized",
        id: "aerw15311sq",
        title: "Please try     again",
        completed: false
      }
    ];
    return Promise.reject(fallbackValue);
  }
);
/*
export const setAuthToken = token => {
  if (token) {
    //applying token
    instance.defaults.headers.common["Authorization"] = 'Bearer ' + token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};
*/

export default instance;
