import { LOAD_DATA } from './action-types';

export const loadData = data => ({
  type: LOAD_DATA,
  data,
});
