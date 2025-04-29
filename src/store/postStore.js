import axios from "axios";
import { create } from "zustand";
import PostList from "../components/PostList";

const usePostStore = create((set)=>({
    
    posts:[],
    loading: false,
    error:null,

    getPosts: async() => {
        set({loading: true, error:null})

        
        try{
            const response = await axios("https://jsonplaceholder.typicode.com/posts");
            set({loading:false, posts: response.data})
        } catch(error){
            set({loading:false, error: error.message});
        }
    }
}))

export default usePostStore

