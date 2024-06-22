import React from 'react';
import '../stylesheets/Button.css'

export function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.');
  };

  return (
    <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.manageClick(props.children)}>
      {props.children}
    </div>
  );
}

