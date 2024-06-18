import React from 'react';
import '../stylesheets/ButtonClear.css'

export function ButtonClear(props) {
  return (
    <div className='button-clear' onClick={props.manageClear}>
      {props.children}
    </div>
  );
}