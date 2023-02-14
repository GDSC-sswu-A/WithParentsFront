import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3Njg1MzY2NX0.IG-XH1Vevpx6iFfKzEw5dzcn9LJERlMoaV_wP5-VcR8"

export const postLocationInfo = async(
  location: any
) => {
  const params = {
    "latitude" : location.latitude,
    "longitude" : location.longitude
  }
    try {
      console.log("api 호출 전", location.latitude, location.longitude)
      const response = await axios.post(
        `http://3.37.21.121:8080/api/user/setLocationInfo`,params,
        {
          headers: {
            jwt_token: accessToken,
          }
        },
      );
      // console.log("위치등록 OK", response)
      return response.data.password;
    } catch (e: any) {
        console.log("위치등록 api", e)
        return e.response;
    }
}

export const getLocationInfo = async(
) => {
    try {
      const response = await axios.get(
        `http://3.37.21.121:8080/api/user/getLocationInfo`,
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
