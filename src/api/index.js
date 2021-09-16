import request from '../utils/request';

export const getPictures = (data) => {
  return request({
    url: '/pictures',
    method: 'GET',
    data
  });
};

export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  });
};

export const upload = (data) => {
  return request({
    url: '/upload',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  });
};
