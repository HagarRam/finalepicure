<<<<<<< Updated upstream
import React from 'react';
import './RestaurantFilterBar.css';
import { useNavigate } from 'react-router-dom';
const RestaurantFilterBar: React.FC = () => {
	const navigate = useNavigate();
=======
import React from 'react'
import './RestaurantFilterBar.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setAllRestuarants, setPopularRestuarants, setNewRestuarants } from '../../store/slices/restaurantsSlice';

const RestaurantFilterBar: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const date = new Date();
	const hour = date.getHours();
	const Minutes = date.getMinutes();
	const amount = hour +
	Minutes * Math.pow(10, -(Math.floor(Math.log10(Minutes)) + 1));
	// console.log(amount);
	// const data2 = moment(date.toDateString()).format('LT');
	// console.log(data2);
	console.log(
		date.toLocaleString('en-US', {
		  hour12: false,
		}),
	);

>>>>>>> Stashed changes
	return (
		<div id="FilterRestaurant">
			<button
				id="filter-button"
<<<<<<< Updated upstream
				onClick={() => navigate('/restaurant/all')}>
=======
				onClick={() => dispatch(setAllRestuarants())}>
>>>>>>> Stashed changes
				All
			</button>
			<button
				id="filter-button"
<<<<<<< Updated upstream
				onClick={() => navigate('/restaurant/new')}>
=======
				onClick={() =>dispatch(setNewRestuarants())}>
>>>>>>> Stashed changes
				New
			</button>
			<button
				id="filter-button"
<<<<<<< Updated upstream
				onClick={() => navigate('/restaurant/most-popular')}>
=======
				onClick={() => dispatch(setPopularRestuarants())}>
>>>>>>> Stashed changes
				Most Popular
			</button>
			<button
				id="filter-button"
				onClick={() => navigate('/restaurant/opan-new')}>
				Opan Now
			</button>
			<button
				id="filter-button"
				onClick={() => navigate('/restaurant/map-view')}>
				Map View
			</button>
		</div>
	);
};

{
	/* <BrowserRouter>

  {heroes.map(hero => (<Link to={'heroes/' + hero.id} />)}
  <Route path="heroes/:id" component={Hero} />
</BrowserRouter> */
}

export default RestaurantFilterBar;
<<<<<<< Updated upstream
=======
function moment() {
	throw new Error('Function not implemented.');
}

>>>>>>> Stashed changes
