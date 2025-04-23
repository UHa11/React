import React, {useState} from 'react'
import Toolbar from './Toolbar'
import Grade from './Grade'

/*
    여러 컴포넌트에서 사용하느 데이터를 상위 컴포넌트에 state로 저장하고
    이를 props로 하위 컴포넌트에 전달한다. 또한, state변경 함수는
    상위 컴포넌트에서 정의하고, 하위컴포넌트에서 직접 setState를 사용하지 않도록 한다.
*/

const LandingPage = () => {
    const [isLogin, setIsLoging] = useState(false);
    //isLogin의 기본값은 false는 로그아웃 상태로 가정한다.
    
    const onClickLogin = () => {
        setIsLoging(true);
    }

    const onClickLogout = () => {
        setIsLoging(false);
    }

    return (
        <div>
            <Toolbar 
                isLogin={isLogin}
                onClickLogin = {onClickLogin}
                onClickLogout= {onClickLogout}
             />
             {/* 현재 로그인 상태와 로그인함수 로그아웃함수 보냄 */}
            <Grade isLogin={isLogin} />
        </div>
    )
}

export default LandingPage