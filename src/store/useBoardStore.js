import { create } from 'zustand';

const useBoardStore = create((set) => ({
  boardDetail: null,
  setBoardDetail: (board) => set({ BoardDetail: board }),
  clearBoardDetail: () => set({ loginUser: null }),
}));

export default useBoardStore;
