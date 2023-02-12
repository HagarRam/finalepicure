import React from 'react';
import './PopularRestaurants.css';
import RestaurantCard from './RestaurantCard';
import MenuIcon from './imageCard/claro.svg';
import dish1 from './imageCard/Lumina.svg';
import dish2 from './imageCard/tiger-lily.svg';
import { useNavigate } from 'react-router-dom';

interface Restaurant {
	img: any;
	name: string;
	chef: string;
	stars: number;
}

const PopularRestaurants: React.FC = () => {
	const navigate = useNavigate();
	const data: Restaurant[] = [
		{
			img: MenuIcon,
			name: 'Claro',
			chef: 'Hagar Ram',
			stars: 3,
		},
		{
			img: dish1,
			name: 'Lumina',
			chef: 'Hagar Ram',
			stars: 4,
		},
		{
			img: dish2,
			name: 'Tiger-lily',
			chef: 'Hagar Ram',
			stars: 5,
		},
	];

	return (
		<div id="restaurant-card ">
			<div id="titlecard">POPULAR RESTAURANT IN EPICURE:</div>
			<div id="allthecard">
				<div id="restaurantCard">
					{data.map((dataimg: Restaurant) => (
						<RestaurantCard
							title={'rest-card-element'}
							imgSource={dataimg.img}
							name={dataimg.name}
							chef={dataimg.chef}
							stars={dataimg.stars}
						/>
					))}
				</div>
			</div>
			<button
				id="all-the-Restaurants-button"
				onClick={() => navigate('/restaurant')}>
				All Restaurants {'>>'}
			</button>
		</div>
	);
};

export default PopularRestaurants;
