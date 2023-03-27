import {atom} from 'recoil';

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
