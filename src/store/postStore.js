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

// zustand
// zustand를 쓰지 않아도 전역 상태는 만들 수 있지만  zustand를 쓰면 더 편하고, 깔끔하고, 유지보수가 쉬워짐.
// 안사용하면 Provider 감싸야 하고, 필요한 값 꺼낼 때 useContext() 해야 하고, 상태가 많아지면 복잡하고 지저분해진다.
//const [posts, setPosts] = useState([]);

    // fetch = 브라우저가 기본으로 제공하는 HTTP 요청 함수
    // axios = 추가로 설치해서 사용하는 더 편리한 HTTP 요청 라이브러리
const usePostStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,
    //zustand를 사용하여 객체 만듬. 사용 안할때는 보통 useState를 사용함
    getPosts: async () => {
        set({ loading: true, error: null });

        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            //데이터 가져와 달라 요청 -> 'posts(게시글)' 목록 데이터를 가져와줘 라고 요청
            //axios.get 코드를 실행하면 브라우저가 인터넷을 통해 서버에 요청을 보냄. 근데 답이 바로 오지 않기 때문에 나중에 결과 준다고 promise를 보낸다.
            //결과가 담길 그릇" 같은 Promise가 나오는 것.
            //promise는 성공하거나 실패 했을때 결과가 다르게 나오게 한다. /.than하고 .catch를 사용하거나 await을 사용한다. 

            //axios.get() = 치킨 주문
            // 반환된 Promise = "치킨 배달 기다리는 번호표"
            // then, await = 치킨 배달이 완료될 때까지 기다렸다가 처리하는 방법 //응답이 어떻게 오냐에 따라 다르게 처리
            // 즉, 바로 치킨(데이터)이 오는 게 아니라, "조리 중"이라는 약속(Promise)부터 받고, 조리(서버 응답)가 끝나면 결과(response)가 오는 것!
            
            //await는 Promise가 완료될 때까지 "코드 실행을 잠깐 멈춘다"는 뜻이다. -> 비동기 작업이 끝날 때까지 기다림
            // 하지만 그 동안 화면에 자동으로 무언가 뜨지는 않습니다
            // 비동기 작업 결과가 필요한 다음 코드를 잘못된 값 없이 정확한 순서로 실행하려고 기다리는 것.
            set({posts: response.data, loading: false});
        } catch(error){
            set({ loading: false, error: error.message });
        }
    },
    // axios.get()은 비동기 작업이기 때문에 async를 사용
    // axios.get()은 서버에 HTTP 요청을 보내는 함수.
    // 서버는 바로 응답을 주지 않고, 약간의 시간이 걸린 후 응답. (네트워크 통신이니까)
    // 그래서 axios.get()은 Promise를 반환합니다.
    // Promise는 "미래에 완료되거나 실패할 수 있는 작업을 나타내는 객체 -> 지금은 결과가 없지만,나중에 결과가 생길 거야 하고 약속하는 것.
    deletePost: async (id) => {
        set({ loading: true, error: null });

        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            //서버에 데이터 지워달라고 요청.
            set((state) => ({
                posts: state.posts.filter(post => post.id !== id),
                loading: false,
            }));
        } catch(error){
            set({ loading: false, error: error.message });
        }

        // 메서드	의미
        // GET	데이터 가져오기
        // POST	데이터 추가하기
        // PUT / PATCH	데이터 수정하기
        // DELETE	데이터 삭제하기
    }
}));

export default usePostStore;