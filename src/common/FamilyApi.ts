import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY4MDExNDk0OX0.4044g8mWxRtpfcJgUF2h0-OY008H3buS_XTOKo7VQO8"

export const createFamily = async(
  password : string
) => {
  const params = {
    "password" : password
  }
    try {
      console.log("api 호출 전", password)
      const response = await axios.post(
        `http://3.37.21.121:8080/api/user/createFamily`,params,
        {
          headers: {
            jwt_token: accessToken,
          }
        },
      );
      console.log("가족생성 OK", response)
      return response.data;
    } catch (e: any) {
        console.log("가족생성 api", e)
        return e.response;
    }
}

export const getUserInfo = async(
) => {
    try {
      const response = await axios.get(
        `http://3.37.21.121:8080/api/user/getUserInfo`,
        {
          headers: {
            jwt_token:accessToken,
          }
        },
      );
      const data = response.data;
      return data;
    } catch (e: any) {
        return e.response;
    }
}

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
          `http://3.37.21.121:8080/api/user/modifyUserInfo`,params,
          {
            headers: {
              jwt_token:accessToken,
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
