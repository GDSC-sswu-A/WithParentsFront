import {atom} from 'recoil';

export const userNameState = atom({
  key: 'userNameState',
  default: '',
});

export const childCheckboxState = atom({
  key: 'childCheckboxState',
  default: false,
});

export const parentCheckboxState = atom({
  key: 'parentCheckboxState',
  default: false,
});

export const LoginAtom = atom({
  key: 'LoginAtom',
  default: false,
});

export const userEmailAtom = atom({
  key: 'userEmailAtom',
  default: {},
});
export const buttonValueAtom = atom<any>({
  key: 'buttonValueAtom',
  default: [],
});

export const CheckModalAtom = atom<boolean>({
  key: 'CheckModalAtom',
  default: false,
});
export const mediNameAtom = atom<any>({
  key: 'mediNameAtom',
  default: '',
});
export const mediWeekBtnAtom = atom<any>({
  key: 'mediWeekBtnAtom',
  default: [false, false, false, false, false, false, false],
});

export const mediTimeAtom1 = atom<any>({
  key: 'mediTimeAtom1',
  default: '',
});
export const mediTimeAtom2 = atom<any>({
  key: 'mediTimeAtom2',
  default: '',
});
export const mediTimeAtom3 = atom<any>({
  key: 'mediTimeAtom3',
  default: '',
});

export const mediTimeBtnAtom = atom<any>({
  key: 'mediTimeBtnAtom',
  default: [],
});
export const clickImageDescription = atom<any>({
  key: 'clickImageDescription',
  default: '',
});

export const clickImageUrl = atom<any>({
  key: 'clickImageUrl',
  default: '',
});
export const clickImageId = atom<Long>({
  key: 'clickImageId',
  default: '',
});
