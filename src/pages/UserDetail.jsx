import React from 'react'
import { useUser } from './UserContext';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const { userList } = useUser();
  const user = userList.find(userProfile => userProfile.id === id);
  if (!user) {
    return <div>해당 유저를 찾을 수 없습니다.</div>;
  }
  return (
    <div>UserDetail
      <ul>
        <li>아이디: {user.id}</li>
        <li>이름: {user.name}</li>
        <li>나이: {user.age}</li>
        <li>온라인 상태: {user.isOnline}</li>
        <button>수정</button>
        <button>삭제</button>
      </ul>


    </div>
  )
}

export default UserDetail