import React from 'react';
import './RestaurantFilterBar.css';
import { useNavigate } from 'react-router-dom';
const RestaurantFilterBar: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div id="FilterRestaurant">
			<button
				id="filter-button"
				onClick={() => navigate('/restaurant/all')}>
				All
			</button>
			<button
				id="filter-button"
				onClick={() => navigate('/restaurant/new')}>
				New
			</button>
			<button
				id="filter-button"
				onClick={() => navigate('/restaurant/most-popular')}>
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
