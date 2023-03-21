import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3NzkxNDQzM30.-M46T0TACZYmQF0X1O46iyLNlpb8WhNcIwH_NZp8HBw"

export const getHomeInfo = async(
) => {
    try {
      const response = await axios.get(
        `http://3.37.21.121:8080/api/user/getHomeInfo`,
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