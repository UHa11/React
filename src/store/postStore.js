import axios from "axios";
import { create } from "zustand";

// 이 코드는 zustand를 이용해서 "posts" 데이터를 관리하는 전역 상태를 만들고 있음.

// ✅ 상태 항목:
// posts: 글(post) 목록 배열
// loading: 서버 작업 중이면 true
// error: 에러가 나면 에러 메시지 저장

// ✅ 상태를 바꾸는 함수들:
// getPosts: 서버에서 글 목록을 가져오는 함수
// deletePost: 서버에서 글을 삭제하고 로컬 상태에서도 지우는 함수
const usePostStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,
    //객체 만듬.
    getPosts: async () => {
        set({ loading: true, error: null });

        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
            set({posts: response.data, loading: false});
        } catch(error){
            set({ loading: false, error: error.message });
        }
    },
    deletePost: async (id) => {
        set({ loading: true, error: null });

        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
            set((state) => ({
                posts: state.posts.filter(post => post.id !== id),
                loading: false,
            }));
        } catch(error){
            set({ loading: false, error: error.message });
        }
    }
}));

export default usePostStore;