import React from "react";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";
import "./NavBar.css";
import NavBarMobileMenu from "./NavBarMobile/NavBarMobile";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/NavBarLogo.svg";

const NavBar: React.FC = () => {
	const navigator = useNavigate();

	return (
		<div>
			<div id="navbar">
				<NavBarLeft />
				<NavBarMobileMenu />
				<img
					alt="mobile logo"
					className="mobile-logo"
					src={Logo}
					onClick={() => {
						navigator("/");
					}}
				/>
				<NavBarRight />
			</div>
		</div>
	);
};

export default NavBar;
