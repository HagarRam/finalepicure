import React, { useEffect, useState } from 'react';
import RestaurantCard from '../PopularRestaurants/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Rootstate } from '../../store/store';
import ImageChef from '../ImageCard/ImageCard';
import { removeChef } from '../../store/slices/chefSlice';
import './OneChef.css';
import { IChef } from '../ChefPage/ChefPage';

const OneChef: React.FC = () => {
	const restaurantsData = useSelector(
		(state: Rootstate) => state.restaurants.value
	);
	const chefData = useSelector((state: Rootstate) => state.chef.filteredValue);
	const [deleteChefed, setDeleteChefed] = useState<any>(null);
	const { id: dishID } = useParams<{ id: string }>();
	const IdNum: number = Number(dishID) - 1;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		setDeleteChefed(chefData[IdNum]);
	}, [chefData, IdNum]);

	const deletechef = async (id: string) => {
		try {
			const response = await fetch(`http://localhost:8000/chef`, {
				method: 'DELETE',
				body: JSON.stringify({
					id: id,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message);
			}
			console.log(data.data);

			dispatch(removeChef(data.data));
			navigate('/chefsPage');
		} catch (err) {
			console.error(err);
			throw err;
		}
	};
	const handleRegister = async (id: string) => {
		if (window.confirm(`Are you sure you want to delete?`)) {
			await deletechef(id);
		}
	};

	return (
		<div id="restaurant-page ">
			<NavBar />
			<div id="information-page">
				<button
					id="delete"
					onClick={() => handleRegister(deleteChefed._id)}>
					DELETE
				</button>
				<div id="chef-of-the-page">
					<ImageChef
						name={chefData[IdNum].name}
						img={chefData[IdNum].img}
						id={chefData[IdNum].id}
						key={chefData[IdNum].id}
					/>
				</div>
				<div id="chef-restaurants">
					{chefData[IdNum].restaurant?.map((rest: number) => {
						let newRest = rest - 1;
						return (
							<RestaurantCard
								img={restaurantsData[newRest].img}
								name={restaurantsData[newRest].name}
								chef={restaurantsData[newRest].chef}
								rating={restaurantsData[newRest].rating}
								title={'chef-rest-page'}
								id={restaurantsData[newRest].id}
								titleStar={'restautant-page-stars'}
								titleImg={'chef-rest-image'}
								key={restaurantsData[newRest].id}
							/>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default OneChef;
