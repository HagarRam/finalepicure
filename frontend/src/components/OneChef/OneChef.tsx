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
import { IRestaurants } from '../RestaurantPage/RestaurantPage';
import { ObjectId } from 'mongoose';

const OneChef: React.FC = () => {
	const restaurantsData = useSelector(
		(state: Rootstate) => state.restaurants.value
	);
	const chefData = useSelector((state: Rootstate) => state.chef.filteredValue);
	const [deleteChefed, setDeleteChefed] = useState<any>(null);
	// const { id: dishID } = useParams<{ id: string }>();
	// const IdNum: number = Number(dishID) - 1;
	let { dishID } = useParams<string>();
	const IdNum: IChef | undefined = chefData?.find((rest: IChef) => {
		return rest._id?.toString() === dishID;
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		setDeleteChefed(IdNum);
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
					{IdNum ? (
						<ImageChef
							name={IdNum.name}
							img={IdNum.img}
							id={IdNum.id}
							key={IdNum.id}
							_id={IdNum._id}
						/>
					) : (
						<p>chef not found</p>
					)}
				</div>
				// Render a list of restaurants based on an array of restaurant IDs
				<div id="chef-restaurants">
					{IdNum?.restaurant?.map((chef: ObjectId) => {
						const data = restaurantsData.filter(
							(rest: IRestaurants) => rest._id === chef
						);
						if (data.length === 0) {
							return null; // or some other fallback if there are no matching restaurants
						}
						return data.map((restData: IRestaurants) => (
							<RestaurantCard
								img={restData.img}
								name={restData.name}
								chef={restData.chef}
								rating={restData.rating}
								title={'chef-rest-page'}
								id={restData.id}
								titleStar={'restautant-page-stars'}
								titleImg={'chef-rest-image'}
								key={restData.id}
								_id={restData._id}
							/>
						));
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default OneChef;
