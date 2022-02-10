import styled from 'styled-components';
import theme from '../../Theme/base';
import FavoriteButton from '../FavoriteButton';
import { BsFillCartPlusFill } from 'react-icons/bs';
const Card = () => {
	const product = {
		title: 'sneaker',
		description: 'esto es la descripción',
		SKU: '11111111111111X',
		price: '10.000',
	};

	return (
		<Container>
			<div className='card-img'>
				<BsFillCartPlusFill className='icon' />
				<img src='./Img/img1.jpg' alt='img1' />
			</div>
			<div className='card-body'>
				<h3 className='title'>{product.title}</h3>
				<p className='description'>{product.description}</p>
				<p className='SKU'>SKU: {product.SKU} </p>
				<p className='price'>$ {product.price}</p>
				<div className='icon2'>
					<FavoriteButton />
				</div>
			</div>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: ${theme.width.cardDesktop};
	height: ${theme.height.cardDesktop};
	padding: 0.4;
	border: border: ${theme.border.width} ${theme.border.style} ${theme.border.color};
	border-radius: 5px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
	margin: 0 1rem;
	overflow: hidden;



	.card-img {
		width: 100%;
		height: 57%;
		overflow: hidden;
		padding: 0;
		margin: 0;
		position: relative;

		.icon {
			position: absolute;
			top: 5%;
			left: 10%;
		}

		img {
			width: 100%;
			height: 97%;
		}
	}

	.card-img:hover {
		background: #40e0d0;
	}

	.card-body {
		font-family: ${theme.font.primary};
		padding: ${theme.padding.containerHome};
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

		.SKU {
			font-size: ${theme.size.code};
			font-weight: ${theme.weight.heading};
		}
		.price {
			font-size: ${theme.size.price};
		}
		.icon2 {
			align-self: end;
		}
	}
`;
