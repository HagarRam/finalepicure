import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import ChefOfTheWeek from '../ChefOfTheWeek/ChefOfTheWeek';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import IconMenu from '../IconMenu/IconMenu';
import NavBar from '../NavBar/NavBar';
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants';
import SignatureDish from '../SignatureDish/SignatureDish';

const Home: React.FC = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === 'http://localhost:3000/SignUp') {
			alert('Welcome to Epicure!');
		}
	}, [location.pathname]);
	return (
		<div id="homePage">
			<NavBar />
			<Hero />
			<PopularRestaurants />
			<SignatureDish />
			<IconMenu />
			<ChefOfTheWeek />
			<AboutUs />
			<Footer />
		</div>
	);
};

export default Home;
