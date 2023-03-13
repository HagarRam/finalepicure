import React from 'react';
import RestaurantCard from '../PopularRestaurants/RestaurantCard';
import { useSelector } from 'react-redux';
import DishCard, { IDishes } from '../SignatureDish/DishCard';
import { useParams } from 'react-router-dom';
import './OneRest.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Rootstate } from '../../store/store';
import clock from './OneRestImages/clock.svg';
import checkIfRestaurantIsOpen from '../OpenClose/OpenClose';

const OneRest: React.FC = () => {
	const restaurantsData = useSelector(
		(state: Rootstate) => state.restaurants.value
	);
	const dishesData = useSelector((state: Rootstate) => state.dishes.value);
	let { dishID } = useParams<string>();
	let IdNum: number = Number(dishID) - 1;

	return (
		<div id="restaurant-page ">
			<NavBar />
			<div id="Restaurant">
				<RestaurantCard
					img={restaurantsData[IdNum].img}
					name={restaurantsData[IdNum].name}
					chef={restaurantsData[IdNum].chef}
					rating={restaurantsData[IdNum].rating}
					title={'restautant-page'}
					id={restaurantsData[IdNum].id}
					titleStar={'restautant-page-stars'}
					titleImg={'rest-image'}
					key={restaurantsData[IdNum].id}
				/>
				<div className="isOpen">
					<img
						src={clock}
						id="clock"
						alt={restaurantsData[IdNum].name}
					/>
					{checkIfRestaurantIsOpen(restaurantsData[IdNum]) ? (
						<p id="time">Open Now</p>
					) : (
						<p id="time">Close Now</p>
					)}
				</div>
			</div>

			<div id="alltherestaurant">
				{restaurantsData[IdNum].dishes?.map((dish: number) => {
					const abc = dishesData.filter((dishes: IDishes) => {
						return dishes.id === dish;
					});
					return (
						<div id="dishes-card">
							{abc?.map((dishesData: IDishes) => {
								return (
									<DishCard
										img={dishesData.img}
										icons={dishesData.icons}
										name={dishesData.name}
										about={dishesData.about}
										price={dishesData.price}
										id={dishesData.id}
										title={'card-dish-information'}
										dishtitle={'dish-card-element-one-rest'}
										key={dishesData.id}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default OneRest;
