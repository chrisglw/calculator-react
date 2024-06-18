import React, { useEffect, useRef } from 'react';
import '../stylesheets/BlinkingCursor.css';

export function BlinkingCursor({ isVisible }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        cursorRef.current.classList.toggle('cursor-hidden');
      }, 500);
      return () => clearInterval(interval);
    } else {
      cursorRef.current.classList.add('cursor-hidden');
    }
  }, [isVisible]);

  return <span ref={cursorRef} className="cursor">&nbsp;</span>;
}


