import axios from 'axios';
import router from '../router';

const baseUrl = 'http://localhost:3000/api';

const request = (params) => {
  const { method, url, data, headers } = params;
  let newHeaders = {
    token: localStorage.getItem('token')
  };
  if (headers) {
    newHeaders = { ...newHeaders, ...headers };
  }
  return new Promise((resolve, reject) => {
    axios({
      url: `${baseUrl}${url}`,
      method,
      data,
      headers: newHeaders
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const {
          response: { status }
        } = err;
        if (status === 401) {
          router.push({
            path: '/login'
          });
          resolve();
          return;
        }
        reject(err);
      });
  });
};

export default request;