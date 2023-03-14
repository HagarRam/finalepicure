import React, { useEffect, useState } from 'react';
import RestaurantCard from '../PopularRestaurants/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import DishCard, { IDishes } from '../SignatureDish/DishCard';
import { useNavigate, useParams } from 'react-router-dom';
import './OneRest.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Rootstate } from '../../store/store';
import clock from './OneRestImages/clock.svg';
import checkIfRestaurantIsOpen from '../OpenClose/OpenClose';
import { removeRest } from '../../store/slices/restaurantsSlice';
import { ObjectId } from 'mongoose';
import AddRest from '../AddRest/AddRest';
import { IRestaurants } from '../RestaurantPage/RestaurantPage';

const OneRest: React.FC = () => {
	const restaurantsData = useSelector(
		(state: Rootstate) => state.restaurants.value
	);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const dishesData = useSelector((state: Rootstate) => state.dishes.value);
	const [deleteRest, setDeleteRest] = useState<any>(null);
	let { dishID } = useParams<string>();
	const IdNum: IRestaurants | undefined = restaurantsData?.find(
		(rest: IRestaurants) => {
			return rest._id?.toString() === dishID;
		}
	);

	if (IdNum) {
		console.log(IdNum);
	} else {
		console.log('Restaurant not found');
	}

	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		setDeleteRest(IdNum);
	}, [restaurantsData, IdNum]);
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const deleteRestaurant = async (id: string) => {
		try {
			const response = await fetch(`http://localhost:8000/restaurant`, {
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
			dispatch(removeRest(data.data));
			navigate('/Restaurant');
		} catch (err) {
			console.error(err);
			throw err;
		}
	};
	const handleRegister = async (id: string) => {
		if (window.confirm(`Are you sure you want to delete?`)) {
			await deleteRestaurant(id);
		}
	};

	return (
		<div id="restaurant-page ">
			<NavBar />
			<button
				id="delete"
				onClick={() => handleRegister(deleteRest._id)}>
				DELETE
			</button>
			<div id="Restaurant">
				{IdNum ? (
					<RestaurantCard
						img={IdNum.img}
						name={IdNum.name}
						chef={IdNum.chef}
						rating={IdNum.rating}
						title={'restautant-page'}
						// id={IdNum.id}
						_id={IdNum._id}
						titleStar={'restautant-page-stars'}
						titleImg={'rest-image'}
						key={IdNum.id}
					/>
				) : (
					<p>Restaurant not found</p>
				)}
				<div className="isOpen">
					<img
						src={clock}
						id="clock"
						alt={IdNum?.name}
					/>
					{IdNum && checkIfRestaurantIsOpen(IdNum) ? (
						<p id="time">Open Now</p>
					) : (
						<p id="time">Close Now</p>
					)}
				</div>
				<button
					id="ADDREST"
					type="submit"
					onClick={openModal}>
					ADD REST
				</button>
			</div>{' '}
			<div id="alltherestaurant">
				{IdNum?.dishes?.map((dish: ObjectId) => {
					const data = dishesData.filter((dishes: IDishes) => {
						return dishes._id === dish;
					});
					return (
						<div id="dishes-card">
							{data?.map((dishesData: IDishes) => {
								return (
									<DishCard
										img={dishesData.img}
										icons={dishesData.icons}
										name={dishesData.name}
										about={dishesData.about}
										price={dishesData.price}
										id={dishesData.id}
										title={'card-dish-information'}
										dishtitle={'dish-card-element-one-rest'}
										key={dishesData.id}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
			<Footer />
			{isModalOpen && <AddRest closeButton={closeModal} />}
		</div>
	);
};

export default OneRest;
