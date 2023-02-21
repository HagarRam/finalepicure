import React from 'react';
import searchLogo from './imageNavBar/searchLogo.svg';
import personLogo from './imageNavBar/personLogo.svg';
import bagLogo from './imageNavBar/bagLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBarRight: React.FC = () => {
	const navigate = useNavigate();
	const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
	return (
		<div className="navbarright">
			<div id="icons-NavBar">
				<div className="search-box">
					<input
						id="searchText"
						className={showSearchInput ? 'search-text show' : 'search-text'}
						type="text"
						placeholder="Search for restaurant cuisine, chef"></input>
					<button
						id="searchBtn"
						className="search-btn"
						onClick={() => setShowSearchInput(!showSearchInput)}>
						<img
							src={searchLogo}
							alt="SearchIcon"
						/>
					</button>
				</div>
				<img
					id="icon"
					alt="PersonLogo"
					src={personLogo}
					onClick={() => navigate('/')}
				/>

				<img
					id="icon"
					alt="bagLogo"
					src={bagLogo}
					onClick={() => navigate('/')}
				/>
			</div>
		</div>
	);
};

export default NavBarRight;
