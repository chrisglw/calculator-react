import './App.css';
import { Button } from './components/Button'
import { Screen } from './components/Screen'
import { ButtonClear } from './components/ButtonClear'
import React, { useState, useRef, useEffect } from 'react';
import { evaluate } from 'mathjs'; // npm install mathjs

function App() {
  const [input, setInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(false);
  const inputRef = useRef(null);

  const addInput = value => {
    setInput(prev => prev + value);
    setCursorVisible(true);
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (/[\d.+\-*/]/.test(key)) {
      addInput(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    }
  };

  const calculateResult = () => {
    if (input) {
      setInput(String(evaluate(input)));
    } else {
      alert("Insert values before computing");
    }
  };

  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      !event.target.classList.contains('button-container')
    ) {
      setCursorVisible(false);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className='App'
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onClick={(e) => {
        if (e.target.classList.contains('input') || e.target.classList.contains('button-container')) {
          setCursorVisible(true);
        }
      }}
      ref={inputRef}
    >
      <div className='title-container'>
        <h1 className='title'>Calculator</h1>
      </div>
      <div className='calculator-container'>
        <Screen inputScreen={input} cursorVisible={cursorVisible} />
        <div className='row'>
          <ButtonClear manageClear={() => setInput('')}>
            Clear
          </ButtonClear>
          <Button manageClick={addInput}>+/-</Button>
          <Button manageClick={addInput}>%</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button className='zero' manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={calculateResult}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
