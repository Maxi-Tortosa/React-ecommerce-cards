import { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const FavoriteButton = () => {
	const [fav, setFav] = useState(false);
	return (
		<>
			{fav ? (
				<MdOutlineFavorite onClick={() => setFav(false)} />
			) : (
				<MdOutlineFavoriteBorder onClick={() => setFav(true)} />
			)}
		</>
	);
};

export default FavoriteButton;
