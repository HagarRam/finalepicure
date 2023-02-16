import React from 'react';
<<<<<<< Updated upstream
interface IChef {
	img: any;
	name: string;
	description: string;
	restaurant: Array<{ name: string; img: any }>;
}

const ChefCard: React.FC<IChef> = (props: IChef) => {
=======
import { useSelector } from 'react-redux';
interface IChef {
	img?: any;
	name?: string;
	description?: string;
	restaurant?: number[] | any;
}

const ChefCard: React.FC<IChef> = (props: IChef) => {
const restaurantData = useSelector((state:any) => state.restaurants.value)
	const chef = {
		img : props.img,
		name : props.name,
		description : props.description,
		restaurant : props.restaurant
	}
	let chefRest:any = [];
	restaurantData.filter((rest:any)=>{
		const restochef = chef.restaurant.map((chefrest:number)=>{
			if(chefrest===rest.id) chefRest.push(rest)
		});
		return restochef;
	});
>>>>>>> Stashed changes
	const { name, description, restaurant, img } = props;
	let restaurantName: String = `${name}'s Restaurants`;
	return (
		<div>
<<<<<<< Updated upstream
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
=======

			<div id="chef-image">
				<img
					id="img-chef"
					alt="chef"
					src={`${chef.img}`}
				/>
				<div id="chefName">{chef.name}</div>
			<div id="chef-information">{chef.description}</div>
	
			</div>
			<div>
				<div id="chefs-restaurants">{restaurantName}</div>
					<div id='allthecard'>


				<div id="restaurants-card">
					{chefRest.map((restaurant:any, index:number) => (
						<div id="chefs-restaurant-card" key={index}>
							<img
								id="restaurant-Img"
								src={`${restaurant.img}`}
>>>>>>> Stashed changes
								alt="restaurant-Img"
							/>
							<div id="restaurant-name">{restaurant.name}</div>
						</div>
					))}
<<<<<<< Updated upstream
				</div>
=======
			</div>	
			</div>
>>>>>>> Stashed changes
			</div>
		</div>
	);
};

export default ChefCard;
