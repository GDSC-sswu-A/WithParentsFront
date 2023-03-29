import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../..';

export const getHomeInfo = async(
) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/user/getHomeInfo`,
        {
          headers: {
            jwt_token:await AsyncStorage.getItem('token'),
          }
        },
      );
      const data = response.data;
      return data;
    } catch (e: any) {
        return e.response;
    }
}