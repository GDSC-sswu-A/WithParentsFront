import axios from 'axios';
import { API_BASE_URL, JWT_TOKEN } from '../..';

export const createFamily = async (password: string) => {
  const params = {
    password: password,
  };
  try {
    console.log('api 호출 전', password);
    const response = await axios.post(
      `${API_BASE_URL}/user/createFamily`,
      params,
      {
        headers: {
          jwt_token: JWT_TOKEN,
        },
      },
    );
    console.log("가족생성 OK", response)
      return response.data;
    } catch (e: any) {
        console.log("가족생성 api", e)
        return e.response;
    }
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/getUserInfo`,
      {
        headers: {
          jwt_token: JWT_TOKEN,
        },
      },
    );
    const data = response.data;
    return data;
  } catch (e: any) {
    return e.response;
  }
};

export const postModifyUser = async(
  id : number,
  password : string,
  user : any
  ) => {
    var params = {
      "nickname": user.nickname? user.nickname: null,
      "familyId" : id,
      "familyPassword" : password,
      "isParent" : user.isParent? user.isParent: null
    }
      try {
        console.log("HI",id, password)
        const response = await axios.post(
          `${API_BASE_URL}/user/modifyUserInfo`,params,
          {
            headers: {
              jwt_token:JWT_TOKEN,
            },
            
          },
        );
        console.log("가족 등록 OK", response)
        return response;
      } catch (e: any) {
        console.log("가족등록 API error", e.response)
          return e.response;
      }
  }

export const PostUser = async (nickname: String, isParent: Boolean) => {
  var params = {
    nickname: nickname,
    isParent: isParent,
  };
  try {
    console.log('HI', nickname, isParent);
    const response = await axios.post(
      `${API_BASE_URL}/user/modifyUserInfo`,
      params,
      {
        headers: {
          jwt_token: JWT_TOKEN,
        },
      },
    );
    console.log('유저등록(닉넴,부모여부) OK', response.request._headers.jwt_token);
    return response;
  } catch (e: any) {
    console.log('유저등록 API error', e.response);
    return e.response;
  }
};
