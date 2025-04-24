import React from 'react'

const UserList = ({ pData }) => {
    const idClick = () => {

    }
    return (
        <form onSubmit={}>
            {pData.map((data) =>
                <ul key={data.id} onClick={idClick}>
                    <li>이름: {data.name}</li>
                    <li>나이: {data.age}</li>
                    <li>{data.isOnline === true ? "🟢 온라인 상태입니다" : "🔴 오프라인 상태입니다"}</li>
                </ul>
            )}
        </form>
    )
}

export default UserList