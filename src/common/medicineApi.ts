import axios from 'axios';

let accessToken = '';
accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3NzQ1ODExM30.6wcjJi0d6d0tOwlFr_psOHQ-NH311CF5zF3_l6RRpaM';
let accessToken2 =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdDNAdGVzdC5jb20iLCJleHAiOjE2NzYzNTI3NTV9.5Lh3hY-UsfPkNDPUE9b0ByiXZtW6kuhLv-hW9iydAME';
let accessToken3 =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdDNAdGVzdC5jb20iLCJleHAiOjE2NzYzNTI3NTV9.5Lh3hY-UsfPkNDPUE9b0ByiXZtW6kuhLv-hW9iydAME';

//영양제 추가 api
export const createMedicationApi = async (
  userId: Long,
  description: String,
  dayOfTheWeekList: String,
  dosingTimeList: [LocalTime],
  notificationStatus: Boolean,
) => {
  var params = {
    userId: userId,
    description: description,
    dayOfTheWeekList: dayOfTheWeekList,
    dosingTimeList: dosingTimeList,
    notificationStatus: notificationStatus,
  };
  try {
    console.log(params);
    const response = await axios.post(
      'http://3.37.21.121:8080/api/medication/createMedication',
      params,
      {
        headers: {
          jwt_token: accessToken3,
        },
      },
    );
    console.log('영양제 추가 OK', response);
    return response;
  } catch (e: any) {
    console.log('영양제 추가 API error', e);
    return e.response;
  }
};

//영양제 조회 api

export const getMedicineInfo = async (userId: Long) => {
  try {
    //console.log('api 호출 전 userId값:', userId);
    return await axios.get(
      `http://3.37.21.121:8080/api/medication/getMedicationList?userId=${userId}`,

      {
        headers: {
          jwt_token: accessToken3,
        },
      },
    );
    //   console.log('영양제 조회 OK', response.request._response);

    //return response;
  } catch (e: any) {
    console.log('영양제 조회 Error', e.response);
    return e.response;
  }
};

export const deleteMedicineApi = async (medicationId: Long) => {
  try {
    console.log('삭제 전 mediId값:', medicationId);
    const response = axios.delete(
      `http://3.37.21.121:8080/api/medication/deleteMedication?medicationId=${medicationId}`,

      {
        headers: {
          jwt_token: accessToken,
        },
      },
    );
    console.log('영양제 삭제 OK', response);
    return response;
  } catch (e: any) {
    console.log('영양제 조회 Error', e.response);
    return e.response;
  }
};
