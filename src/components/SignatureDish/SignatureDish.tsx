import React from 'react';
import MenuImg from '../../assets/claro.svg';
import './SignatureDish.css';
import meal from '../../assets/Lumina.svg';
import meal2 from '../../assets/tiger-lily.svg';
import DishCard from './DishCard';

interface Dish {
	img: any;
	icon: string[];
	name: string;
	description: string;
	price: number;
}

const SignatureDish: React.FC = () => {
	const data: Dish[] = [
		{
			img: MenuImg,
			name: 'Claro',
			icon: ['spicy', 'vegan'],
			description:
				'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
			price: 3,
		},
		{
			img: meal2,
			name: 'Lumina',
			icon: [],
			description:
				'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
			price: 40,
		},
		{
			img: meal,
			name: 'tiger-lily',
			icon: ['vegitarian'],
			description:
				'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
			price: 200,
		},
	];

	return (
		<div id="dish-card">
			<div id="titlecard-dish">SIGNATURE DISH OF:</div>
			<div id="allthecards">
				{data.map((dataimg) => (
					<DishCard
						img={dataimg.img}
						icon={dataimg.icon}
						name={dataimg.name}
						description={dataimg.description}
						price={dataimg.price}
					/>
				))}
			</div>
		</div>
	);
};

export default SignatureDish;
