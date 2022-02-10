import { useState } from 'react';
import styled from 'styled-components';
import theme from '../../Theme/base';
import AmountButton from '../AmountButton';
import FavoriteButton from '../FavoriteButton';

const Card2 = () => {
	const [stockLimit, setStockLimit] = useState(false);

	const product = {
		title: 'sneaker',
		description: 'esto es la descripción',
		SKU: '11111111111111X',
		price: '10.000',
	};

	return (
		<Container>
			<div className='card-img'>
				<div className='icon'>
					<FavoriteButton />
				</div>
				<img src='./Img/img1.jpg' />
			</div>
			<div className='card-body'>
				<h3 className='title'>{product.title}</h3>
				<p className='description'>{product.description}</p>
				<AmountButton
					stockLimit={stockLimit}
					setStockLimit={setStockLimit}
					initial={0}
					stock={15}
				/>
				{stockLimit ? (
					<p className='stockLimit'>No existe más stock para este producto</p>
				) : null}
			</div>
		</Container>
	);
};

export default Card2;

const Container = styled.div`
	width: ${theme.width.cardDesktop};
	height: ${theme.height.cardDesktop};
	border: ${theme.border.width} ${theme.border.style} ${theme.border.color};
	border-radius: 5px;
  margin: 0 1rem;
  padding: ${theme.padding.cardDesktop} ;
	.card-img {
		position: relative;
		img {
			width: 100%;
		}
		.icon {
			position: absolute;
			top: 5%;
			right: 10%;
		
			}
		}
	}

	.card-body {
		font-family: ${theme.font.primary};
		padding: ${theme.padding.containerHome} ${theme.padding.cardDesktop} 0 ${theme.padding.cardDesktop};
		display: flex;
		flex-direction: column;
    text-transform: uppercase;

		.title {
			font-weight: ${theme.weight.heading};
			font-size: ${theme.size.heading};
			padding: ${theme.padding.headingDesktop} 0;
			margin: 0;
		}

		.description {
			font-weight: ${theme.weight.paragraph};
			font-size: ${theme.size.paragraph};
			padding: ${theme.padding.paragraphDesktop} 0;
			margin: 0;
		}

	}
	.stockLimit{font-size: ${theme.size.paragraph};
padding: 0;
margin:6% 0 0 0;}
`;
