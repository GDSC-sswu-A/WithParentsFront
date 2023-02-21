import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3NzQ1ODExM30.6wcjJi0d6d0tOwlFr_psOHQ-NH311CF5zF3_l6RRpaM"


export const getScheduleList = async(
) => {
    try {
      const response = await axios.get(
        `http://3.37.21.121:8080/api/schedule/getScheduleList?year=2023&month=2`,
        {
          headers: {
            jwt_token:accessToken,
          }
        },
      );
      const data = response.data;
      console.log("get !!")
      return data;
    } catch (e: any) {
        return e.response;
    }
}

export const getTodaySchedule = async(
    ) => {
        try {
          const response = await axios.get(
            `http://3.37.21.121:8080/api/schedule/getTodayScheduleList`,
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
          `http://3.37.21.121:8080/api/schedule/createSchedule`,params,
          {
            headers: {
              jwt_token:accessToken,
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

    export const putModifySchedule = async(
        id: number,
        date: string,
        time: string,
        title: string,
      ) => {
        var params = {
          "memberId": id,
          "date" : date,
          "time" : time,
          "title" : title
        }
          try {
            const response = await axios.put(
              `http://3.37.21.121:8080/api/schedule/modifySchedule`,params,
              {
                headers: {
                  jwt_token:accessToken,
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
        ) => {
            try {
              const response = await axios.delete(
                `http://3.37.21.121:8080/api/schedule/deleteSchedule`,
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