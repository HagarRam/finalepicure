import React from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import { IChef } from '../ChefPage/ChefPage';
import { IRestaurants } from '../RestaurantPage/RestaurantPage';


const ChefCard: React.FC<IChef> = (props: IChef) => {
const restaurantData = useSelector((state:Rootstate) => state.restaurants.value)
	const chef = {
		img : props.img,
		name : props.name,
		description : props.description,
		restaurant : props.restaurant
	}
	let chefRest:IRestaurants[] = [];
	restaurantData.filter((rest:IRestaurants)=>{
		const restochef = chef.restaurant?.map((chefrest:number)=>{
			if(chefrest===rest.id) chefRest.push(rest)
		});
		return restochef;
	});
	let restaurantName: String = `${chef.name}'s Restaurants`;
	return (
		<div>

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
					{chefRest.map((restaurant:IRestaurants, index:number) => (
						<div id="chefs-restaurant-card" key={index}>
							<img
								id="restaurant-Img"
								src={`${restaurant.img}`}
								alt="restaurant-Img"
							/>
							<div id="restaurant-name">{restaurant.name}</div>
						</div>
					))}
			</div>	
			</div>
			</div>
		</div>
	);
};

export default ChefCard;
