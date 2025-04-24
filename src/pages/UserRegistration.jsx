import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserList from './UserList'

const UserRegistration = () => {

  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState(0);
  const [userList, setUserList] = useState([]);

  const addUserProfile = () => {
    if (idInput.trim() === '') return;

    const userProfile = {
      id: idInput,
      name: nameInput,
      age: ageInput,
      isOnline: false,
    }

    setUserList([...userList, userProfile]);
    setIdInput('');
    setNameInput('');
    setAgeInput(0);
    useNavigate();
  }

  const onIsOnline = (id) => {
    setUserList(userList.map(userProfile =>
      userProfile.id === id ? { ...userProfile, isOnline: !userProfile.isOnline } : userProfile
    ));
  }

  const onDelete = (id) => {
    setUserList(userList.filter(userProfile => userProfile.id !== id));
  }
  return (
    <div>
      <div>
        <div>아이디:</div>
        <input
          type="text"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
        />
        <br /><br />
        <div>이름:</div>
        <input
          type="text"
          value={idInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <br /><br />
        <div>나이:</div>
        <input
          type="number"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
        />
        <br /><br />
        <button onClick={addUserProfile}>
          추가
        </button>
      </div>
      
        <UserContext.Provider value={userList}>
          <UserList />
        </UserContext.Provider>
        {userList.map(userProfile =>
          <UserList
            key={userProfile.id}
            userProfile={userProfile}
            onIsOnline={onIsOnline}
            onDelete={onDelete}
          />
        )}

    </div>
  )
}

export default UserRegistration