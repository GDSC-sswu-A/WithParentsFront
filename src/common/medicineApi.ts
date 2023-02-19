import axios from 'axios';

let accessToken = '';
accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3Njg1MzY2NX0.IG-XH1Vevpx6iFfKzEw5dzcn9LJERlMoaV_wP5-VcR8';
let accessToken2 =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY3NTc3MDI2Nn0.dg0n-066S6F_UWl2y0R_ATJ9ShgJ7iNga_lIP4Bp_gw';
/*function createMedicationApi(mediData) {
  const url = 'http://3.37.21.121:8080/api/medication/createMedication';
  return axios.post(url, mediData, {
    headers: {
      jwt_token: accessToken,
    },
  });
}*/

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
          jwt_token: accessToken,
        },
      },
    );
    console.log('영양제 추가 OK', response);
    return response;
  } catch (e: any) {
    console.log('영양제 추가 API error', e.response);
    return e.response;
  }
};

//영양제 조회 api

export const getMedicineInfo = async (userId: Long) => {
  /*const params = {
    userId: userId,
  };*/
  try {
    //  console.log('api 호출 전', userId);
    const response = await axios.get(
      `http://3.37.21.121:8080/api/medication/getMedicationList?userId=${userId}`,
      {
        headers: {
          jwt_token: accessToken,
        },
      },
    );
    /*console.log('영양제 조회 OK', response);
    return response;*/
    console.log('영양제 조회 OK', response);
  } catch (e: any) {
    console.log('영양제 조회 Error', e.response.data);
    return e.response;
  }
};
