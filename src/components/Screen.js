import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/Screen.css'

export function Screen({ inputScreen }) {
  const [cursorVisible, setCursorVisible] = useState(false);
  const screenRef = useRef(null);

  useEffect(() => {
    if (cursorVisible) {
      const interval = setInterval(() => {
        screenRef.current.classList.toggle('cursor-hidden');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [cursorVisible]);

  const handleClick = () => {
    setCursorVisible(true);
  };


  return (
    <div className='input' onClick={handleClick} ref={screenRef}>
      {inputScreen}
      {cursorVisible && <span className="cursor">|</span>}
    </div>
  )
}