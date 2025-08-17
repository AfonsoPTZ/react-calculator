import React from 'react';
import './style.css';

/**
 * Componente Button para calculadora
 * Props:
 * - label: texto do botão
 * - onClick: função chamada ao clicar
 * - type: tipo do botão (ex: 'number', 'operator', 'equal', 'clear')
 * - disabled: desabilita o botão
 */
const Button = ({ label, onClick, type = 'default', disabled = false }) => {
	// Define classes dinâmicas para estilização
	const getButtonClass = () => {
		switch (type) {
			case 'number':
				return 'button number';
			case 'operator':
				return 'button operator';
			case 'equal':
				return 'button equal';
			case 'clear':
				return 'button clear';
			default:
				return 'button';
		}
	};

	return (
		<button
			className={getButtonClass()}
			onClick={() => !disabled && onClick(label)}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
