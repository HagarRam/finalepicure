import React from "react";
import "./NavBarMobile.css";
import { NavLink } from "react-router-dom";
import { setAllRestuarants } from "../../../store/slices/restaurantsSlice";

const NavBarMobile: React.FC = () => {
	function dispatch(arg0: { payload: undefined; type: "restaurants/setAllRestuarants"; }): void {
		throw new Error("Function not implemented.");
	}

	return (
		<section className="mobile-nav">
			<input id="menu-toggle" type="checkbox" />
			<label className="menu-button-container" htmlFor="menu-toggle">
				<div className="menu-button"></div>
			</label>
			<ul className="menu">
				<li>
					<NavLink
					onClick={()=>dispatch(setAllRestuarants())}
						className={({ isActive }) => (isActive ? "on-page" : "not-on-page")}
						to={"/restaurant"}>
						Restaurants
					</NavLink>
				</li>
				<li className="chef-mobile-button">
					<NavLink
						className={({ isActive }) => (isActive ? "on-page" : "not-on-page")}
						to={"/ChefsPage"}>
						Chefs
					</NavLink>
				</li>
				<li>
					<button className="contact-us">Contact Us</button>
				</li>
				<li>
					<button className="term-of-use">Term of Use</button>
				</li>
				<li>
					<button className="privacy-policy">Privacy Policy</button>
				</li>
			</ul>
		</section>
	);
};

export default NavBarMobile;
