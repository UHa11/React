import { create } from 'zustand';

const useUserStore = create((set) => ({
  loginUser: null,
  setLoginUser: () => {
    const saved = localStorage.getItem('loginUser');
    const user = saved ? JSON.parse(saved) : null;
    set({ loginUser: user });
  },
  logout: () => {
    localStorage.removeItem('loginUser');
    set({ loginUser: null });
  },
}));

export default useUserStore;
