import React from 'react';
import RestaurantCard from '../PopularRestaurants/RestaurantCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Rootstate } from '../../store/store';
import ImageChef from '../ImageCard/ImageCard';
import './OneChef.css';

const OneChef: React.FC = () => {
	const restaurantsData = useSelector(
		(state: Rootstate) => state.restaurants.value
	);
	const chefData = useSelector((state: Rootstate) => state.chef.value);
	let dishID = useParams<string>();
	let IdNum: number = Number(dishID.id) - 1;

	return (
		<div id="restaurant-page ">
			<NavBar />
			<div id="information-page">
				<div id="chef-of-the-page">
					<ImageChef
						name={chefData[IdNum].name}
						img={chefData[IdNum].img}
						id={chefData[IdNum].id}
						key={chefData[IdNum].id}
					/>
				</div>
				<div id="chef-restaurants">
					{chefData[IdNum].restaurant?.map((rest: number) => {
						let newRest = rest - 1;
						return (
							<RestaurantCard
								img={restaurantsData[newRest].img}
								name={restaurantsData[newRest].name}
								chef={restaurantsData[newRest].chef}
								rating={restaurantsData[newRest].rating}
								title={'chef-rest-page'}
								id={restaurantsData[newRest].id}
								titleStar={'restautant-page-stars'}
								titleImg={'chef-rest-image'}
								key={restaurantsData[newRest].id}
							/>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default OneChef;
