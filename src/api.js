import axios from 'axios';

const baseURL = process.env.VUE_APP_API;

export const getUrl = (url) => {
  if (url.startsWith('http')) {
    return url;
  }
  return baseURL + url;
};
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

const HEADERS_MULTIPLE_PART = {
  ...HEADERS,
  'Content-Type': 'multipart/form-data; boundary=something',
  // Accept: "application/json",
  Accept: 'multipart/form-data',
};
const clearToken = () => {
  delete HEADERS.Authorization;
  delete HEADERS_MULTIPLE_PART.Authorization;
};
const setToken = (accessToken) => {
  HEADERS.Authorization = `Bearer ${accessToken}`;
  HEADERS_MULTIPLE_PART.Authorization = `Bearer ${accessToken}`;
};
let validateStatus = (status) => {

};
const api = {
  get: (url, params) => {
    return axios.default
      .get(getUrl(url),
        {
          params,
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        });
  },
  post: (url, params) => {
    return axios.default
      .post(getUrl(url), params,
        {
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        });
  },
  put: (url, params) => {
    return axios.default
      .put(getUrl(url), params,
        {
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        });
  },
  delete: (url, params) => {
    return axios.default
      .delete(getUrl(url),
        {
          params,
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        });
  },
  postMultiplePart: (url, params) => {
    return axios.default
      .post(getUrl(url), params, {
        headers: HEADERS_MULTIPLE_PART,
        validateStatus: (status) => validateStatus(status),
      });
  },
  putMultiplePart: (url, params) => {
    return axios.default
      .put(getUrl(url), params, {
        headers: HEADERS_MULTIPLE_PART,
        validateStatus: (status) => validateStatus(status),
      });
  },
};
export const baseApi = (model) => {
  const getAll = (query) => api.get(`${model}`, query);
  const add = (data) => api.post(`${model}`, data);
  const edit = (id, data) => api.put(`${model}/${id}`, data);
  const remove = (id, query) => api.delete(`${model}/${id}`, query);
  return {
    getAll,
    add,
    edit,
    remove,
  };
};
export default {
  ...api,
  clearToken,
  setToken,
};
