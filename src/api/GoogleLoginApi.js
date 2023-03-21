import axios from 'axios';

function GoogleLoginApi(token) {
  const url = 'http://10.0.2.2:8080/api/auth/googleLogin';
  //const url = 'http://localhost:8080/api/auth/googleLogin';
  return axios.post(url, token);
  //.then(res => console.log(res));
}

export {GoogleLoginApi};
