import React from 'react';
import './style.css';

/**
 * Componente Input para visor da calculadora
 * Props:
 * - value: valor a ser exibido no visor
 * - readOnly: sempre true para impedir edição manual
 * - type: tipo do input (padrão 'text')
 */
const Input = ({ value }) => {
	return (
		<input disabled
			className="calculator-display"
			type="text"
			value={value}
			readOnly
		/>
	);
};

export default Input;
