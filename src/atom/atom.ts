import {atom} from 'recoil';

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
