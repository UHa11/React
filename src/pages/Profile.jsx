import React from 'react'

const Profile = () => {
    const userName = useParams();
  return (
    <div>
        <h2>{userName}의 프로필페이지 입니다.</h2>
        <p>여기에 해당 사람의 정보를 보여주기</p>
    </div>
  )
}

export default Profile