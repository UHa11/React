import React from 'react'
import { useUser } from './UserContext';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const { userList, setUserList } = useUser();
  const user = userList.find(userProfile => userProfile.id === id);

  const onChangeIsOnline = (ev) => {
    const isOnlineBoolean = ev.target.value === 'online'; // online이면 true
    setUserList(userList =>
      userList.map(userProfile =>
        userProfile.id === id
          ? { ...userProfile, isOnline: isOnlineBoolean } 
          : userProfile
      )
    );
  };

  const onDeleteUser = () => {
    setUserList(userList.filter(userProfile => userProfile.id !== id));
    navigate("/");
  };
  
  if (!user) {
    return <div>해당 유저를 찾을 수 없습니다.</div>;
  };
  return (
    <div>UserDetail
      <ul>
        <li>아이디: {user.id}</li>
        <li>이름: {user.name}</li>
        <li>나이: {user.age}</li>
        <li>온라인 상태:</li>
        <select value={user.isOnline === false ? `offline`:'online'} onChange={onChangeIsOnline}>
          <option value="online">온라인</option>
          <option value="offline">오프라인</option>
        </select>
        <button onClick={onDeleteUser}>삭제</button>
      </ul>


    </div>
  )
}

export default UserDetail