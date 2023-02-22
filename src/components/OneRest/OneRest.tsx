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
						alt={restaurantsData[IdNum].name}
					/>
					{restaurantsData[IdNum].openNow ? (
						<p id="time">Open Now</p>
					) : (
						<p id="time">Close Now</p>
					)}
				</div>
			</div>

			<div id="alltherestaurant">
				{restaurantsData[IdNum].dishes?.map((dish: number) => {
					if (dishesData[dish] && dishesData[dish].signatureDish) {
						return (
							<div id="dishes-card">
								<DishCard
									img={dishesData[dish].img}
									icons={dishesData[dish].icons}
									name={dishesData[dish].name}
									about={dishesData[dish].about}
									price={dishesData[dish].price}
									id={dishesData[dish].id}
									title={'card-dish-information'}
									dishtitle={'dish-card-element-one-rest'}
									key={dishesData[dish].id}
								/>
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
			<Footer />
		</div>
	);
};

export default OneRest;
