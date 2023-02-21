import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import RestaurantPage from './components/RestaurantPage/RestaurantPage';
import ChefsPage from './components/ChefPage/ChefPage';
import OneRest from './components/OneRest/OneRest';
import ModalRest from './components/ModalRestaurant/ModalRest';

function App() {
	return (
		<div className="body">
			{
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/restaurant"
							element={<RestaurantPage />}
						/>
						<Route
							path="/ChefsPage"
							element={<ChefsPage />}
						/>
						<Route
							path="/restaurant/:dishID"
							element={<OneRest />}
						/>
						{/* <Route
							path="/restaurant/:dishID/:DishNum"
							element={<ModalRest />}
						/> */}
					</Routes>
				</BrowserRouter>
			}
		</div>
	);
}

export default App;
