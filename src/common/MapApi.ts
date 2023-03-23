import axios from 'axios';
import { API_BASE_URL, JWT_TOKEN } from '../..';

export const postLocationInfo = async(
  location: any
) => {
  const params = {
    "latitude" : location.latitude,
    "longitude" : location.longitude
  }
    try {
      // console.log("api 호출 전", location.latitude, location.longitude)
      const response = await axios.post(
        `${API_BASE_URL}/user/setLocationInfo`,params,
        {
          headers: {
            jwt_token:JWT_TOKEN,
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
        `${API_BASE_URL}/user/getLocationInfo`,
        {
          headers: {
            jwt_token:JWT_TOKEN,
          }
        },
      );
      const data = response.data;
      return data;
    } catch (e: any) {
        return e.response;
    }
}

export const getLastTime = async(
  ) => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/user/getParentsLastApiCallTime`,
          {
            headers: {
              jwt_token:JWT_TOKEN,
            }
          },
        );
        const data = response.data;
        return data;
      } catch (e: any) {
          return e.response;
      }
  }
