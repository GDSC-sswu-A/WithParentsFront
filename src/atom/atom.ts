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
