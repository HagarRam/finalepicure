import React from 'react';
import MenuIcon from '../../assets/claro.svg';
import dish1 from '../../assets/Lumina.svg';
import dish2 from '../../assets/tiger-lily.svg';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from '../PopularRestaurants/RestaurantCard';

interface IRestaurant {
	img: any;
	name: string;
	chef: string;
	stars: number;
}

const RestaurantCardsPage: React.FC = () => {
	const navigate = useNavigate();
	const data: IRestaurant[] = [
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
		<div id="restaurant-page ">
			<div id="alltherestaurant">
				{data.map((dataimg: IRestaurant) => (
					<RestaurantCard
						imgSource={dataimg.img}
						name={dataimg.name}
						chef={dataimg.chef}
						stars={dataimg.stars}
						title={'page-card-element'}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantCardsPage;
