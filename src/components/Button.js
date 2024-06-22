import React from 'react';
import '../stylesheets/Button.css'

export function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.');
  };

  const buttonClass = `button-container ${isOperator(props.children) ? 'operator' : ''} ${props.children === '0' ? 'zero' : ''}`;


  return (
    <div className={buttonClass} onClick={() => props.manageClick(props.children)}>
      {props.children}
    </div>
  );
}

