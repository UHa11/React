import React from 'react'

const Grade = ({isLogin}) => {
    

    return (
        <div>
            {isLogin &&
                <div>실버 등급</div>}
                {/* 로그아웃일 경우 등급이 안보임 */}
        </div>
    )
}

export default Grade