import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChefOfTheWeek from '../ChefOfTheWeek/ChefOfTheWeek';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import IconMenu from '../IconMenu/IconMenu';
import NavBar from '../NavBar/NavBar';
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants';
import SignatureDish from '../SignatureDish/SignatureDish';
<<<<<<< Updated upstream
// import NavBar from '../NavBar/Navbar';
// import Footer from '../Footer/Footer';
// import Hero from '../Hero/Hero';
// import AboutUs from '../Aboutus/AboutUs';
// import MenuIcon from '../menuicon/Menu-icon';
// import RestaurantCard from '../RestaurantCard/RestaurantCard';
// import Dishcard from '../DishCard/Dishcard';
// import Weekchef from '../Chefoftheweek/Weekchef';
=======
>>>>>>> Stashed changes

const Home: React.FC = () => {
	return (
		<div id="homePage">
				<NavBar />
<<<<<<< Updated upstream

				<Hero />

				<PopularRestaurants />

				<SignatureDish />

				<IconMenu />
				<ChefOfTheWeek />
				<AboutUs />
			</div>
			{
				/* <div id="hero">
=======
>>>>>>> Stashed changes
				<Hero />
				<PopularRestaurants />
				<SignatureDish />
				<IconMenu />
				<ChefOfTheWeek />
				<AboutUs />
<<<<<<< Updated upstream
			</div>*/
				<div id="Footer">
					<Footer />
				</div>
			}
=======
					<Footer />
			
>>>>>>> Stashed changes
		</div>
	);
};

export default Home;
