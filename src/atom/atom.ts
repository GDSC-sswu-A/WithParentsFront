import {atom} from 'recoil';

export const buttonValueAtom = atom<any>({
  key: 'buttonValueAtom',
  default: [],
});

export const CheckModalAtom = atom<any>({
  key: 'CheckModalAtom',
  default: false,
});
export const mediNameAtom = atom<any>({
  key: 'mediNameAtom/${v1()}',
  default: '',
});
export const mediWeekBtnAtom = atom<any>({
  key: 'mediWeekBtnAtom',
  default: [false, false, false, false, false, false, false],
});

export const mediTimeAtom1 = atom<any>({
  key: 'mediTimeAtom/${v1()}',
  default: [],
});
export const mediTimeAtom2 = atom<any>({
  key: 'mediTimeAtom2/${v1()}',
  default: [],
});
export const mediTimeAtom3 = atom<any>({
  key: 'mediTimeAtom3/${v1()}',
  default: [],
});

//medicine 추가 타입
export interface mediType {
  id: number;
  task: string;
  completed: boolean;
}
// 업데이트 시킬 medi atom 배열
//임의의 데이터
export const mediListAtom = atom<mediType[]>({
  key: 'mediListAtom',

  // default에는 임의의 데이터를 넣어줍시다.
  default: [],
});
