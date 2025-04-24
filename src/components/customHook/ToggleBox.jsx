import React from 'react'
import useToggle from './useToggle';

const ToggleBox = () => {
    const[isView, toggleIsView] = useToggle();

  return (
    <div>
        <button onClick={toggleIsView}>
            {isView ? "숨기기" : "보이기"}
        </button>
        {isView && <div>팝업!</div>}
    </div>
  )
}

export default ToggleBox