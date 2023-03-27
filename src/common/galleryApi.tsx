import axios from 'axios';

let accessToken = '';
accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGVzdEB0ZXN0LmNvbSIsImV4cCI6MTY4MDQ1MDg3NH0.Tu5D3RBM8FMweM3MVOHIE2RX1YAsbVRWB7YXSW_-b7A';

//갤러리 등록 api
export const PostGallery = async (imageUrl: string, description: string) => {
  var params = {
    imageUrl: imageUrl,
    description: description,
  };
  try {
    const response = await axios.post(
      `http://3.37.21.121:8080/api/gallery/uploadPhoto`,
      params,
      {
        headers: {
          jwt_token: accessToken,
        },
      },
    );
    console.log('갤러리등록 OK');
    const data = response.data;
    return data;
  } catch (e: any) {
    console.log('갤러리등록 API error', e.response);
    return e.response;
  }
};

//갤러리 조회 api

export const getGalleryInfo = async () => {
  try {
    const response = await axios.get(
      `http://3.37.21.121:8080/api/gallery/getFamilyPhotoList`,

      {
        headers: {
          jwt_token: accessToken,
        },
      },
    );
    const data = response.data;
    return data;
  } catch (e: any) {
    console.log('영양제 조회 Error', e.response);
    return e.response;
  }
};

export const deleteGalleryApi = async photoId => {
  try {
    console.log('삭제 전 photoId값:', photoId);
    const response = axios.delete(
      `http://3.37.21.121:8080/api/gallery/deletePhoto?photoId=${photoId}`,

      {
        headers: {
          jwt_token: accessToken,
        },
      },
    );
    //console.log('갤러리 삭제 OK', response);
    return response;
  } catch (e: any) {
    console.log('갤러리 삭제 Error', e.response);
    return e.response;
  }
};

//갤러리 삭제 api
