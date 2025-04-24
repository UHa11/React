import React from 'react'
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const {userList} = useUser();
    const navigate = useNavigate();

    const onUserClick = (userId) => {
        navigate(`/user/${userId}`);
    }
    return (
        <div>
            {userList.map(userProfile =>
                <ul key={userProfile.id} onClick={() => onUserClick(userProfile.id)}>
                    <li>{userProfile.id}</li>
                    <li>{userProfile.name}</li>
                    <li>{userProfile.age}</li>
                    <li>{userProfile.isOnline === false ?
                    '🔴 오프라인 상태입니다.' : '🟢 온라인 상태입니다.'}</li>
                </ul>
            )}
        </div>

    )
} 
export default UserList