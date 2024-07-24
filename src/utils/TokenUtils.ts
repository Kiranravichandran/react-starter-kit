import { LOCAL_STORAGE } from '../constants/TokenConstants';

export const isAuthenticated = (): boolean => {
  return (
    !!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN) &&
    !!localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN) &&
    !!localStorage.getItem(LOCAL_STORAGE.ID_TOKEN)
  );
};
