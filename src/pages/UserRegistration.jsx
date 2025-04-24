import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const UserRegistration = () => {
  const user = useUser();
  const navigate = useNavigate(); 
  
  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState(0);

  const addUserProfile = () => {
    if (idInput.trim() === '') return;

    const userProfile = {
      id: idInput,
      name: nameInput,
      age: ageInput,
      isOnline: false,
    }

    user.setUserList([...user.userList, userProfile]);
    setIdInput('');
    setNameInput('');
    setAgeInput(0);

    navigate('/');
  }

  // const onIsOnline = (id) => {
  //   setUserList(userList.map(userProfile =>
  //     userProfile.id === id ? { ...userProfile, isOnline: !userProfile.isOnline } : userProfile
  //   ));
  // }

  // const onDelete = (id) => {
  //   setUserList(userList.filter(userProfile => userProfile.id !== id));
  // }
  return (
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
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <br /><br />
      <div>나이:</div>
      <input
        type="number"
        value={ageInput}
        onChange={(e) => setAgeInput(Number(e.target.value))}
      />
      <br /><br />
      <button
        onClick={addUserProfile}
      >
        추가
      </button>
     
    </div>
  )
}
export default UserRegistration