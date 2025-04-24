import React from 'react'

const UserList = ({userProfile,onIsOnline,onDelete}) => {

    // const idClick = () => {

    // }
    return (
        <div>
            
        <TodoContent>
            <Checkbox 
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(userProfile.id)}
             />
             <select 
             checked={userProfile.isOnline === false ? 'offline':'online'}
             onChange={() => onIsOnline(userProfile.id)}
             >
                <option value="online">온라인</option>
                <option value="offline">오프라인</option>
             </select>
             <TodoText completed = {todo.completed}>
                {todo.text}
             </TodoText>
        </TodoContent>
        <button onClick={() => onDelete(todo.id)}>
            삭제
        </button>
    
        </div>
        // <form onSubmit={}>
        //     {pData.map((data) =>
        //         <ul key={data.id} onClick={idClick}>
        //             <li>이름: {data.name}</li>
        //             <li>나이: {data.age}</li>
        //             <li>{data.isOnline === true ? "🟢 온라인 상태입니다" : "🔴 오프라인 상태입니다"}</li>
        //         </ul>
        //     )}
        // </form>
    )
}

export default UserList