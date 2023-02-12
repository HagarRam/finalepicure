import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from './imageNavBar/logo.svg';
import titleLogo from './imageNavBar/TitleLogo.svg';

const NavBarLeft: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="navbarleft">
			<div
				id="logoImage"
				onClick={() => navigate('/')}>
				<img
					alt="titleLogo"
					id="logo"
					src={logo}
				/>
				<img
					alt="titleLogo"
					id="titleLogo"
					src={titleLogo}
				/>
			</div>
			<div id="allTheButton">
				<NavLink
					to="/Restaurant"
					id="restaurantButton"
					className={({ isActive }) => (isActive ? 'undeline' : 'notActive')}>
					Restaurants
				</NavLink>
				<NavLink
					to="/chefsPage"
					id="chefButoon"
					className={({ isActive }) => (isActive ? 'undeline' : 'notActive')}>
					Chefs
				</NavLink>
			</div>
		</div>
	);
};

export default NavBarLeft;
