import React from 'react';
interface IChef {
	img: any;
	name: string;
	description: string;
	restaurant: Array<{ name: string; img: any }>;
}

const ChefCard: React.FC<IChef> = (props: IChef) => {
	const { name, description, restaurant, img } = props;
	let restaurantName: String = `${name}'s Restaurants`;
	return (
		<div>
			<div id="chef-image">
				<img
					className="img-chef"
					alt="chef"
					src={img}
				/>
				<div className="chef-name">{name}</div>
			</div>
			<div id="chef-information">{description}</div>
			<div>
				<div id="chefs-restaurants">{restaurantName}</div>
				<div id="restaurants-card">
					{restaurant.map((restaurant) => (
						<div id="chefs-restaurant">
							<img
								className="restaurant-Img"
								src={restaurant.img}
								alt="restaurant-Img"
							/>
							<div id="restaurant-name">{restaurant.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
