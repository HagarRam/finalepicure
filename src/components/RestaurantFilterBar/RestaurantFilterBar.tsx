import React, { useState } from 'react';
import './RestaurantFilterBar.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	setAllRestuarants,
	setPopularRestuarants,
	setNewRestuarants,
	setOpenNow,
	setMap,
} from '../../store/slices/restaurantsSlice';
import MapContainer from '../MapView/MapContainer';
import { IRestaurants } from '../RestaurantPage/RestaurantPage';
import { Rootstate } from '../../store/store';

const RestaurantFilterBar: React.FC = () => {
	const dispatch = useDispatch();
	const filteredRestaurants = useSelector(
		(state: Rootstate) => state.restaurants.filteredValue
	);
	const [isActiveAll, setIsActiveAll] = useState(false);
	const [isActiveNew, setIsActiveNew] = useState(false);
	const [isActiveMost, setIsActiveMost] = useState(false);
	const [isActiveOpen, setIsActiveOpen] = useState(false);
	const [isActiveMap, setIsActiveMap] = useState(false);

	const handleSetActive = (active: string) => {
		setIsActiveAll(false);
		setIsActiveNew(false);
		setIsActiveMost(false);
		setIsActiveOpen(false);
		setIsActiveMap(false);

		if (active === 'All') {
			dispatch(setAllRestuarants());
			setIsActiveAll(true);
		} else if (active === 'New') {
			dispatch(setNewRestuarants());
			setIsActiveNew(true);
		} else if (active === 'Most') {
			dispatch(setPopularRestuarants());
			setIsActiveMost(true);
		} else if (active === 'Map') {
			dispatch(setMap());
			setIsActiveMap(true);
		} else if (active === 'Open') {
			dispatch(setOpenNow());
			setIsActiveOpen(true);
			getOpenNowRestaurants(filteredRestaurants);
		}
	};
	const getOpenNowRestaurants = (restaurants: IRestaurants[]) => {
		const date = new Date();
		const hour = date.getHours();
		const minutes = date.getMinutes();
		const currentTime = hour + minutes / 60;
		const arr: IRestaurants[] = [];
		restaurants.forEach((restaurant: IRestaurants) => {
			const openingTime = restaurant.openHours?.[0]
				? parseFloat(restaurant.openHours?.[0].replace(':', '.'))
				: undefined;
			const closingTime = restaurant.openHours?.[1]
				? parseFloat(restaurant.openHours?.[1].replace(':', '.'))
				: undefined;
			if (
				openingTime &&
				closingTime &&
				openingTime <= currentTime &&
				closingTime >= currentTime
			) {
				arr.push(restaurant);
				console.log(`${restaurant.name} is open`);
			} else {
				console.log(`${restaurant.name} is closed`);
			}
		});
		return arr;
	};

	return (
		<div id="FilterRestaurant">
			<button
				className={isActiveAll ? 'filter-button' : 'without-filter-button'}
				onClick={() => handleSetActive('All')}>
				All
			</button>
			<button
				className={isActiveNew ? 'filter-button' : 'without-filter-button'}
				onClick={() => handleSetActive('New')}>
				New
			</button>
			<button
				className={isActiveMost ? 'filter-button' : 'without-filter-button'}
				onClick={() => handleSetActive('Most')}>
				Most Popular
			</button>
			<button
				className={isActiveOpen ? 'filter-button' : 'without-filter-button'}
				onClick={() => handleSetActive('Open')}>
				Open Now
			</button>
			<button
				className={isActiveMap ? 'filter-button' : 'without-filter-button'}
				onClick={() => handleSetActive('Map')}>
				Map View
			</button>
			{isActiveMap && (
				<div className="Map-Container">
					<MapContainer
						lat={0}
						lng={0}
					/>
				</div>
			)}
		</div>
	);
};

export default RestaurantFilterBar;
