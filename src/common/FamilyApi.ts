import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3NTIzNzIwM30.8bTAxzC1FTYXTpuci5N2KxEclYbcKvLakD9Km5HQ_zw"

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
      return response.data.password;
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
  id : string,
  password : string,
  user : any
  ) => {
    var params = {
      "nickname": user.nickname,
      "family_password" : password,
      "familyId" : id,
      "isParent" : user.isParent
    }
      try {
        const response = await axios.post(
          `http://3.37.21.121:8080/api/user/modifyUserInfo`,params,
          {
            headers: {
              jwt_token:accessToken,
            },
            
          },
        );
        console.log("유저정보 수정 OK")
        return response;
      } catch (e: any) {
        console.log("유저정보 수정 API error")
          return e.response;
      }
  }
