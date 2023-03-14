import React from 'react';
import NavBarLeft from './NavBarLeft';
import NavBarRight from './NavBarRight';
import './NavBar.css';
import NavBarMobileMenu from './NavBarMobile/NavBarMobile';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/NavBarLogo.svg';

const NavBar: React.FC = () => {
	const navigator = useNavigate();
	const closeButton2 = document.getElementById('logout');
	const data = JSON.parse(sessionStorage.getItem('data') || '{}');
	let message = 'Welcome Guest';

	if (data.firstName && data.lastName) {
		const closeButton2 = document.getElementById('logout');
		message = `Welcome to Epicure, ${data.firstName} ${data.lastName}!`;
		if (closeButton2) {
			closeButton2.style.display = 'block';
		}
	}

	function closeButton(): void {
		const messageDiv = document.getElementById('welcomeMessage');
		const closeButton2 = document.getElementById('logout');
		if (messageDiv && closeButton2) {
			messageDiv.style.display = 'none';
			closeButton2.style.display = 'none';
			sessionStorage.clear();
		}
	}

	return (
		<div id="navbar">
			<NavBarLeft />
			<NavBarMobileMenu />
			<img
				alt="mobile logo"
				className="mobile-logo"
				src={Logo}
				onClick={() => {
					navigator('/');
				}}
			/>

			<div id="welcomeMessage">
				<div
					id="logout"
					onClick={() => closeButton()}
					className="log-out">
					log out
				</div>
				<div>{message}</div>
			</div>

			<NavBarRight />
		</div>
	);
};

export default NavBar;
