import axios from 'axios';

export default ({ req }) => {
  // check if on server or browser
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    return axios.create({
      baseURL: '/'
    });
  }
};
