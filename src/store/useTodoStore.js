import { create } from 'zustand'

const useTodoStore = create((set, get) => ({
  // set: 상태(state)를 업데이트하는 함수
  // get: 현재 상태를 가져오는 함수 → getState() 역할을 함
    todos: [{
        id: 1,
        text: "밥먹기",
        completed: false,
    },{
        id: 2,
        text: "잠자기",
        completed: false,
    },{
        id: 3,
        text: "숨쉬기",
        completed: false,
    }],
    filter: 'all', // all, active, completed
    toggleTodo: (id) => set(state => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
    })), 
    //소괄호 ( )로 객체 전체를 감싸면, 이건 "아, 이건 객체를 반환(return)하는 거구나!" 하고 인식
    //중괄호 {}를 "함수 본문"이 아니라 "객체 리터럴"로 정확히 구분하기 위해 ( )가 필요 -> 즉,  객체리터럴을 반환할때에는 ()를 한번더 감싸줘야한다.
    //객체 리터럴 : "key(속성명): value(값)" 쌍으로 구성된 데이터를 중괄호 {} 안에 직접 적는 것
    //여기서는 { todos: [수정된 배열] } 형태로 객체를 "그 자리에서 직접 만드는" 거라서 객체 리터럴이라 함.
    deleteTodo: (id) => set(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    setFilter: (filter) => set({filter}),//{set({filter: filter})} 와 같다.
    
    // 이 함수는 아마 zustand 같은 상태 관리 라이브러리 안에서 정의된 selector 함수
    // 즉, 현재 상태(state) 중에서 필요한 todo 목록만 골라서 반환해주는 역할
    getFilteredTodos: () => {
        const {todos, filter} = get(); //get()은 현재 상태를 불러오는 함수 (zustand에서 제공함) / useTodoStore.getState()와 같음.
        switch(filter){
            case "active": //filter가 ective(진행중 버튼)일 경우 completed: false인 것들만 남긴다
                return todos.filter(todo => !todo.completed); //!todo.completed는 true이고 true인 걸러내고 나머지를 남기는것.
            case "completed":
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }
}))

export default useTodoStore