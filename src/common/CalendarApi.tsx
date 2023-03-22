import axios from 'axios';

let accessToken = ""
accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY4MDA2NTYyOX0.79ZWsEVsA9BV1nnRQO-I8rJTJ9Ss95phZHPFOiS3cjQ"


export const getScheduleList = async(
  year: number,
  month: number
) => {
    try {
      console.log("#####", year, month)
      const response = await axios.get(
        `http://3.37.21.121:8080/api/schedule/getScheduleList?year=${year}&month=${month}`,
        {
          headers: {
            jwt_token:accessToken,
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
        id: number
        ) => {
          console.log(id)
            try {
              const response = await axios.delete(
                `http://3.37.21.121:8080/api/schedule/deleteSchedule?scheduleId=`+id,
                {
                  headers: {
                    jwt_token:accessToken,
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