import React from 'react';
import NavBarLeft from './NavBarLeft';
import NavBarRight from './NavBarRight';
import './NavBar.css';

const NavBar: React.FC = () => {
	return (
		<div>
			<div id="navbar">
				<NavBarLeft />
				<NavBarRight />
			</div>
		</div>
	);
};

export default NavBar;
