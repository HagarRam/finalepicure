import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { setAllchefs, setMostView, setNewChef } from '../../store/slices/chefSlice';
import './ChefPageFilter.css';
import { useDispatch } from 'react-redux';
const ChefPageFilter: React.FC = () => {
	const dispatch = useDispatch();
	const [isActiveAll, setIsActiveAll] = useState(false);
	const [isActiveNew, setIsActiveNew] = useState(false);
	const [isActiveMost, setIsActiveMost] = useState(false);
  
	return (
	  <div id="Filterchef">
		<button
		  className={isActiveAll ? 'filter-button' : 'without-filter-button'}
		  onClick={() => {
			dispatch(setAllchefs());
			setIsActiveAll(true);
			setIsActiveMost(false);
			setIsActiveNew(false);

		  }}
		>
		  All
		</button>
		<button
		  className={isActiveNew ? 'filter-button' : 'without-filter-button'}
		  onClick={() => {
			dispatch(setNewChef());
			setIsActiveAll(false);
			setIsActiveMost(false);
			setIsActiveNew(true);
		  }}
		>
		  New
		</button>
		<button
		  className={isActiveMost ? 'filter-button' : 'without-filter-button'}
		  onClick={() => {
			dispatch((setMostView()));
			setIsActiveAll(false);
			setIsActiveMost(true);
			setIsActiveNew(false);
		  }}
		>
		 Most Viewed
		</button>
		</div>
	);
};


export default ChefPageFilter;
