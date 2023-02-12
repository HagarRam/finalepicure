import React from 'react';
import NavBar from '../NavBar/NavBar';
import RestaurantFilterBar from '../RestaurantFilterBar/RestaurantFilterBar';
// import Footer from '../Footer/Footer';
// import FilterRestaurant from '../filter-restaurant/FilterRestaurant';
// import RestaurantCards from './RestaurantCards';
import './RestaurantPage.css';

const RestaurantPage: React.FC = () => {
	return (
		<div>
			<NavBar />
			<RestaurantFilterBar />
			{/* <FilterRestaurant />
			<RestaurantCards />
			<Footer /> 
			 */}
		</div>
	);
};

export default RestaurantPage;
