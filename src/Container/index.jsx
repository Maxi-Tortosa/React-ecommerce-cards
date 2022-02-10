import React from 'react';
import styled from 'styled-components';
import Card from '../Components/Card';
import Card2 from '../Components/Card2';
import theme from '../Theme/base';

const HomeContainer = () => {
	return (
		<Container>
			<Card />
			<Card2 />
			<Card />
			<Card2 />
		</Container>
	);
};

export default HomeContainer;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: ${theme.padding.containerHome};
`;
