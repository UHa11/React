import axios from 'axios';
import { create } from 'zustand';

const useBoardsStore = create((set) => ({
  boardList: [],
  setBoardList: async () => {
    set({ boardList: [] });
    const res = await axios.get('http://localhost:3001/boards');
    set({ boardList: res.data });
  },
}));

export default useBoardsStore;
