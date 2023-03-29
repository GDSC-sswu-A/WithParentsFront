import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../..';

export const getScheduleList = async(
  year: number,
  month: number
) => {
    try {
      console.log("#####", year, month)
      const response = await axios.get(
        `${API_BASE_URL}/schedule/getScheduleList?year=${year}&month=${month}`,
        {
          headers: {
            jwt_token:await AsyncStorage.getItem('token'),
          }
        },
      );
      const data = response.data;
      // console.log("get")
      return data;
    } catch (e: any) {
        return e.response;
    }
}

export const getTodaySchedule = async(
    ) => {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/schedule/getTodayScheduleList`,
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

export const postCreatSchedule = async(
    title: string,
    day: string,
    time: string,
    alert: boolean,
  ) => {
    var params = {
      "title" : title? title: null,
      "date" : day? day: null,
      "time" : time? time: null,
      "notificationStatus": alert? alert:null
    }
      try {
        const response = await axios.post(
          `${API_BASE_URL}/schedule/createSchedule`,params,
          {
            headers: {
              jwt_token:await AsyncStorage.getItem('token'),
            },
            
          },
        );
        console.log("일정등록 OK")
        return response;
      } catch (e: any) {
        console.log("일정등록 API error", e.response)
          return e.response;
      }
    }

    export const patchModifySchedule = async(
      postId:number,
      title: string,
      day: string,
      time: string,
      alert: boolean,
      ) => {
        var params = {
          "scheduleId": postId? postId:null,
          "title" : title? title: null,
          "date" : day? day: null,
          "time" : time? time: null,
          "notificationStatus": alert? alert:null
        }
          try {
            const response = await axios.patch(
              `${API_BASE_URL}/schedule/modifySchedule`,params,
              {
                headers: {
                  jwt_token:await AsyncStorage.getItem('token'),
                },
                
              },
            );
            console.log("일정수정 OK")
            return response;
          } catch (e: any) {
            console.log("일정수정 API error", e.response)
              return e.response;
          }
      }

      export const deleteSchedule = async(
        id: number
        ) => {
          console.log(id)
            try {
              const response = await axios.delete(
                `${API_BASE_URL}/schedule/deleteSchedule?scheduleId=`+id,
                {
                  headers: {
                    jwt_token:await AsyncStorage.getItem('token'),
                  }
                },
              );
              const data = response.data;
              console.log("삭제성공")
              return data;
            } catch (e: any) {
                return e.response;
            }
    }