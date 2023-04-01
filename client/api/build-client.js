import axios from 'axios';

export default ({ req }) => {
  // check if on server or browser
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://www.ticketing-app-prod-jjw.xyz/',
      headers: req.headers
    });
  } else {
    return axios.create({
      baseURL: '/'
    });
  }
};
