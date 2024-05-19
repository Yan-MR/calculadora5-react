import React, { useState } from 'react';
import './App.css';

function Calculadora() {
  const [expressao, setExpressao] = useState('');

  const handleClick = (valor) => {
    setExpressao((prevExpressao) => prevExpressao + valor);
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(expressao); // Usando a função eval() para calcular a expressão
      setExpressao(resultado.toString());
    } catch (error) {
      setExpressao('Erro');
    }
  };

  const limparExpressao = () => {
    setExpressao('');
  };

  return (
    <div className="calculadora">
      <h2>CALCULADORA SIMPLES</h2>
      <input
        className="expressao"
        type="text"
        value={expressao}
        onChange={(e) => setExpressao(e.target.value)}
        readOnly
      />
      <div className="botoes">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={limparExpressao}>C</button>
      </div>
    </div>
  );
}

export default Calculadora;