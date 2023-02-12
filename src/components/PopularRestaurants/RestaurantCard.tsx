import React from 'react';
import star5 from './imageCard/stars/star5.svg';
import star4 from './imageCard/stars/star4.svg';
import star3 from './imageCard/stars/star3.svg';
import star2 from './imageCard/stars/star2.svg';
import star1 from './imageCard/stars/star1.svg';
import { title } from 'process';

interface IRestaurantCard {
	imgSource: string;
	name: string;
	chef: string;
	stars: number;
	title: string;
}
const RestaurantCard: React.FC<IRestaurantCard> = (props: IRestaurantCard) => {
	const starsEnum: { [key: number]: string } = {
		1: star1,
		2: star2,
		3: star3,
		4: star4,
		5: star5,
	};
	const dish: string = props.imgSource;
	const restName: string = props.name;
	const chefName: string = props.chef;
	const stars: number = props.stars;
	const titleCard: string = props.title;

	const starsImg: string = starsEnum[Number(stars)];
	return (
		<div className={titleCard}>
			<img
				className="img-rest"
				alt="dish"
				src={dish}></img>
			<div id="card-information">
				<div className="rest-name">{restName}</div>
				<div id="chef-name">{chefName}</div>
				<img
					className="stars"
					src={starsImg}></img>
			</div>
		</div>
	);
};

export default RestaurantCard;
