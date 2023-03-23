import axios from 'axios';
import { API_BASE_URL, JWT_TOKEN } from '../..';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY4MDE0NjAwMX0.YZp0AUy5guQEj6l_J2vFetFyHZx1kk1yw6omtQZnEQc"

export const getHomeInfo = async(
) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/user/getHomeInfo`,
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