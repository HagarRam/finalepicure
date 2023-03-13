import { useLocation } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import ChefOfTheWeek from '../ChefOfTheWeek/ChefOfTheWeek';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import IconMenu from '../IconMenu/IconMenu';
import NavBar from '../NavBar/NavBar';
import PopularRestaurants from '../PopularRestaurants/PopularRestaurants';
import SignatureDish from '../SignatureDish/SignatureDish';
import './HomePage.css';
const Home: React.FC = () => {
	const location = useLocation();
	const message = location.state?.message;
	function closeButton(): void {
		const messageDiv = document.getElementById('welcomeMessage');
		if (messageDiv) {
			messageDiv.style.display = 'none'; // Change the display to 'none'
		}
	}

	return (
		<div id="homePage">
			{message && (
				<div id="welcomeMessage">
					<span
						id="closeButton"
						onClick={() => closeButton()}
						className="close">
						&times;
					</span>
					{message}
				</div>
			)}
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
