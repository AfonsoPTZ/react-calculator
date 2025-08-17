

import React, { useState } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import './style.css';

function App() {
  const [display, setDisplay] = useState('');
  const [isOn, setIsOn] = useState(true);

  // Função para lidar com clique dos botões
  const handleButtonClick = (label) => {
    if (!isOn && label !== '⏻') return;
    switch (label) {
      case '⏻':
        setIsOn((prev) => !prev);
        if (isOn) setDisplay('');
        return;
      case 'AC':
        setDisplay('');
        return;
      case '⌫':
        setDisplay((prev) => prev.slice(0, -1));
        return;
      case '=':
        try {
          // Substitui operadores para JS
          // Substitui √n por Math.sqrt(n) corretamente
          let expr = display
            .replace(/÷/g, '/')
            .replace(/x/g, '*')
            .replace(/π/g, Math.PI)
            .replace(/√([0-9.]+)/g, 'Math.sqrt($1)')
            .replace(/√/g, 'Math.sqrt')
            .replace(/%/g, '/100')
            .replace(/,/g, '.')
            .replace(/\^/g, '**');
          // Avalia expressão
          // eslint-disable-next-line no-eval
          let result = eval(expr);
          setDisplay(result.toString());
        } catch {
          setDisplay('Syntax ERROR');
        }
        return;
      default:
        setDisplay((prev) => prev === 'Syntax ERROR' ? label : prev + label);
    }
  };

  return (
    <div className="app-bg">
      <div className="calculator-container">
        <h1>Calculator App</h1>
        <Input value={isOn ? (display === '' ? '0' : display) : ''} />
        <div className="button-grid">
          <div className="button-row">
            <Button label="√" onClick={handleButtonClick} type="operator" />
            <Button label="^" onClick={handleButtonClick} type="operator" />
            <Button label="π" onClick={handleButtonClick} type="operator" />
            <Button label="⏻" onClick={handleButtonClick} type="clear" />
          </div>
          <div className="button-row">
            <Button label="AC" onClick={handleButtonClick} type="clear" />
            <Button label="(" onClick={handleButtonClick} type="operator" />
            <Button label=")" onClick={handleButtonClick} type="operator" />
            <Button label="%" onClick={handleButtonClick} type="operator" />
          </div>
          <div className="button-row">
            <Button label="7" onClick={handleButtonClick} type="number" />
            <Button label="8" onClick={handleButtonClick} type="number" />
            <Button label="9" onClick={handleButtonClick} type="number" />
            <Button label="÷" onClick={handleButtonClick} type="operator" />
          </div>
          <div className="button-row">
            <Button label="4" onClick={handleButtonClick} type="number" />
            <Button label="5" onClick={handleButtonClick} type="number" />
            <Button label="6" onClick={handleButtonClick} type="number" />
            <Button label="x" onClick={handleButtonClick} type="operator" />
          </div>
          <div className="button-row">
            <Button label="1" onClick={handleButtonClick} type="number" />
            <Button label="2" onClick={handleButtonClick} type="number" />
            <Button label="3" onClick={handleButtonClick} type="number" />
            <Button label="-" onClick={handleButtonClick} type="operator" />
          </div>
          <div className="button-row">
            <Button label="0" onClick={handleButtonClick} type="number" />
            <Button label="," onClick={handleButtonClick} type="number" />
            <Button label="⌫" onClick={handleButtonClick} type="clear" />
            <Button label="+" onClick={handleButtonClick} type="operator" />
          </div>
          <div className="button-row">
            <Button label="=" onClick={handleButtonClick} type="equal" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
