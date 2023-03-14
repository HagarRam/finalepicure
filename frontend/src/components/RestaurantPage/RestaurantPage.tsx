import { ObjectId } from 'mongoose';
import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import RangeBar from '../RangeBar/RangeBar';
import RestaurantCardsPage from '../RestaurantCardsPage/RestaurantCardsPage';
import RestaurantFilterBar from '../RestaurantFilterBar/RestaurantFilterBar';
import './RestaurantPage.css';

export interface IRestaurants {
	id: number;
	name: string;
	address?: string[];
	chef: string;
	chefid?: number;
	openHours?: string[];
	openDays?: number[];
	openYear?: number;
	img: string;
	dishes?: ObjectId[];
	rating: number;
	popular?: boolean;
	newRest?: boolean;
	openNow?: boolean;
	views?: number;
	locationLat?: number;
	locationLng?: number;
	title?: string;
	titleImg?: string;
	titleStar?: string;
}

export interface IrestaurantsState {
	value: IRestaurants[];
	filteredValue: IRestaurants[];
}

const RestaurantPage: React.FC = () => {
	return (
		<div>
			<NavBar />
			<div id="mobile-title">RESTAURANTS</div>
			<RestaurantFilterBar />
			<RangeBar />
			<RestaurantCardsPage />
			<Footer />
		</div>
	);
};

export default RestaurantPage;
