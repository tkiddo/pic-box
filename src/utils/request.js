import axios from 'axios';
import router from '../router';

const baseUrl = 'https://tkiddo-8gkkh0chf3632274-1256164626.ap-shanghai.app.tcloudbase.com/api';

const request = (params) => {
  const { method, url, data } = params;
  const headers = {
    token: localStorage.getItem('token') || null
  };
  return new Promise((resolve, reject) => {
    axios({
      url: `${baseUrl}${url}`,
      method,
      data,
      headers
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
