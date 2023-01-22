import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3NTAwODMxNn0.SS9hmkAKYrIgnSvEvN7XuuKIdVsgclUb3u75nPcJHNU"

export const createFamily = async(
  password : string
) => {
    try {
      // console.log("api 호출 전", password)
      const response = await axios.post(
        `http://3.37.21.121:8080/api/user/createFamily`,
        {
          headers: {
            jwt_token: accessToken,
          },
          params : {
            password : password
          }
        },
      );
      return response.data.data;
    } catch (e: any) {
        // console.log("가족생성 api", e)
        return e.response;
    }
}

export const getFamilycode = async(
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
      const code = response.data.familyId;
      return code;
    } catch (e: any) {
        return e.response;
    }
}

