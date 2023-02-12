import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChefPageFilter.css';
const ChefPageFilter: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div id="Filterchef">
			<button
				id="filter-button"
				onClick={() => navigate('/ChefsPage/all')}>
				All
			</button>
			<button
				id="filter-button"
				onClick={() => navigate('/ChefsPage/new')}>
				New
			</button>
			<button
				id="filter-button"
				onClick={() => navigate('/ChefsPage/most-Viewd')}>
				Most Viewd
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

export default ChefPageFilter;
