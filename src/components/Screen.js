import React, { useState, useRef, useEffect } from 'react';
import { BlinkingCursor } from './BlinkingCursor';
import '../stylesheets/Screen.css'

export function Screen({ inputScreen, cursorVisible }) {
  return (
    <div className='input'>
      {inputScreen}
      <BlinkingCursor isVisible={cursorVisible} />
    </div>
  );
}