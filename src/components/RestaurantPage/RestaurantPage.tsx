import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import RestaurantCardsPage from '../RestaurantCardsPage/RestaurantCardsPage';
import RestaurantFilterBar from '../RestaurantFilterBar/RestaurantFilterBar';
import './RestaurantPage.css';

const RestaurantPage: React.FC = () => {
	return (
		<div>
			<NavBar />
<<<<<<< Updated upstream
=======
			<div id="mobile-title">RESTAURANTS</div>
>>>>>>> Stashed changes
			<RestaurantFilterBar />
			<RestaurantCardsPage />
			<Footer />
		</div>
	);
};

export default RestaurantPage;
