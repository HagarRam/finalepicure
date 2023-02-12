import React from 'react';
import ChefOfTheWeek from '../ChefOfTheWeek/ChefOfTheWeek';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import IconMenu from '../IconMenu/IconMenu';
import NavBar from '../NavBar/NavBar';
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants';
import SignatureDish from '../SignatureDish/SignatureDish';
// import NavBar from '../NavBar/Navbar';
// import Footer from '../Footer/Footer';
// import Hero from '../Hero/Hero';
// import AboutUs from '../Aboutus/AboutUs';
// import MenuIcon from '../menuicon/Menu-icon';
// import RestaurantCard from '../RestaurantCard/RestaurantCard';
// import Dishcard from '../DishCard/Dishcard';
// import Weekchef from '../Chefoftheweek/Weekchef';

const Home: React.FC = () => {
	return (
		<div id="homePage">
			<div id="`navbar">
				<NavBar />

				<Hero />

				<PopularRestaurants />

				<SignatureDish />

				<IconMenu />
				<ChefOfTheWeek />
			</div>
			{
				/* <div id="hero">
				<Hero />
			</div>
			<div id="RestaurantCard">
				<RestaurantCard />
			</div>
			<div id="Dishcard">
				<Dishcard />
			</div>
			<div id="MenuIcon">
				<MenuIcon />
			</div>
			<div id="Weekchef">
				<Weekchef />
			</div>
			<div id="AboutUs">
				<AboutUs />
			</div>*/
				<div id="Footer">
					<Footer />
				</div>
			}
		</div>
	);
};

export default Home;
