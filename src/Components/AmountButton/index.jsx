import styled from 'styled-components';
import theme from '../../Theme/base';
import { useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

const AmountButton = ({ stock, initial, stockLimit, setStockLimit }) => {
	const [display, setDisplay] = useState(initial);

	function handleClick(sign) {
		const total =
			sign === '+'
				? display + 1
				: sign === '-' && display > 0
				? display - 1
				: null;

		const limiter = total > stock ? stock : total <= initial ? 0 : total;
		setDisplay(limiter);

		const limit = total > stock ? true : false;

		setStockLimit(limit);
	}

	return (
		<Container>
			<button
				disabled={display === initial ? true : false}
				onClick={(e) => handleClick(e.target.textContent)}>
				-
			</button>
			<span>{display}</span>
			<button
				disabled={stockLimit ? true : false}
				onClick={(e) => handleClick(e.target.textContent)}>
				+
			</button>
			<BsFillCartPlusFill className='icon' />
		</Container>
	);
};

export default AmountButton;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 15%;
	span {
		width: 5%;
		border: ${theme.border.width} ${theme.border.style} ${theme.border.color};
		padding: 0 5%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	button {
		background: white;
		border: ${theme.border.width} ${theme.border.style} ${theme.border.color};
	}

	.icon {
		margin-left: 10%;
	}
`;
