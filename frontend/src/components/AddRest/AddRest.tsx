import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Rootstate } from '../../store/store';
import { IChef } from '../ChefPage/ChefPage';
import { IRestaurants } from '../RestaurantPage/RestaurantPage';
import './AddModal.css';

interface IModal {
	closeButton: Function;
}

const AddRest: React.FC<IModal> = (props: IModal) => {
	const navigate = useNavigate();
	const chefData = useSelector((state: Rootstate) => state.chef.filteredValue);
	const restData = useSelector(
		(state: Rootstate) => state.restaurants.filteredValue
	);
	const [rest, setRest] = useState<any>(restData);
	const [inputValues, setInputValues] = useState<Record<string, string>>({
		restName: '',
		address: '',
		chefId: '',
		chefName: '',
		img: '',
		openDays: '',
		openHours: '',
		openYears: '',
		rating: '',
	});
	interface InputField {
		id: string;
		placeholder: string;
		type: string;
		title?: string;
		name: string;
	}
	const restDetails: InputField[] = [
		{
			id: 'name-input',
			placeholder: 'Enter restaurant name',
			type: 'text',
			title: 'Restaurant Name',
			name: 'restName',
		},
		{
			id: 'chef-input',
			placeholder: 'Enter chef name',
			type: 'text',
			title: 'Chef Name',
			name: 'chefName',
		},
		{
			id: 'open-hours-input',
			placeholder: 'Enter open hours',
			type: 'text',
			title: 'Open Hours',
			name: 'openHours',
		},
		{
			id: 'address-input',
			placeholder: 'Enter restaurant address',
			type: 'text',
			title: 'Address',
			name: 'address',
		},
		{
			id: 'open-days-input',
			placeholder: 'Enter open days',
			type: 'text',
			title: 'Open Days',
			name: 'openDays',
		},
		{
			id: 'open-year-input',
			placeholder: 'Enter open year',
			type: 'text',
			title: 'Open Year',
			name: 'openYears',
		},
		{
			id: 'img-input',
			placeholder: 'Enter image URL',
			type: 'text',
			title: 'Image',
			name: 'img',
		},
		{
			id: 'rating-input',
			placeholder: 'Enter rating',
			type: 'text',
			title: 'Rating',
			name: 'rating',
		},
	];

	const renderInputs = (inputFields: InputField[]) => {
		return inputFields.map((field) => (
			<div
				id="input-container"
				key={field.id}>
				{field.title && <div id="input-title">{field.title}</div>}
				<input
					id="input-full-Name"
					placeholder={field.placeholder}
					type={field.type}
					name={field.name}
					value={inputValues[field.name]}
					onChange={(e) =>
						setInputValues({ ...inputValues, [field.name]: e.target.value })
					}
				/>
			</div>
		));
	};

	const newRest = async (
		restName: string,
		address: string,
		chefId: string,
		chefName: string,
		img: string,
		openDays: string,
		openHours: string,
		openYears: string,
		rating: string
	) => {
		try {
			await fetch('http://localhost:8000/restaurant/', {
				method: 'POST',
				body: JSON.stringify({
					restName: restName,
					address: address,
					chefId: chefId,
					chefName: chefName,
					openDays: openDays,
					openHours: openHours,
					openYears: openYears,
					rating: rating,
					img: img,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setRest((newRest: [IRestaurants]) => [...newRest, data]);
					setInputValues({
						restName: '',
						address: '',
						chefId: '',
						chefName: '',
						img: '',
						openDays: '',
						openHours: '',
						openYears: '',
						rating: '',
					});
					navigate('/');
				});
		} catch (err) {
			alert('please try again');
			console.log(err);
		}
	};

	const handSaveRest = async (e: any) => {
		e.preventDefault();
		const credentials: any = {
			id: 0,
			restName: '',
			chefName: '',
			address: [],
			chefId: 0,
			openHours: [],
			openDays: [],
			openYear: 0,
			img: '',
			rating: 0,
		};
		const inputObj = e.target;

		Object.values(inputObj).forEach((obj: any) => {
			switch (obj.name) {
				case 'rating':
				case 'chefId':
					credentials[obj.name] = Number(obj.value);
					break;
				case 'restName':
				case 'chefName':
				case 'img':
				case 'address':
					credentials[obj.name] = obj.value.split(',').map(String);
					break;
				case 'openYears':
				case 'openDays':
				case 'openHours':
					credentials[obj.name] = obj.value.split(',').map(Number);
					break;
				default:
					credentials[obj.name] = obj.value;
					break;
			}
		});
		const restName = credentials.restName;
		const address = credentials.address;
		const chefId = credentials.chefId;
		const chefName = credentials.chefName;
		const img = credentials.img;
		const openDays = credentials.openDays;
		const openHours = credentials.openHours;
		const openYears = credentials.openYears;
		const rating = credentials.rating;
		console.log(
			restName,
			address,
			chefId,
			chefName,
			img,
			openDays,
			openHours,
			openYears,
			rating
		);
		await newRest(
			restName,
			address,
			chefId,
			chefName,
			img,
			openDays,
			openHours,
			openYears,
			rating
		);
	};

	return (
		<div className="restaurants-card">
			<form onSubmit={handSaveRest}>
				<div
					id="restaurants-card-Modal"
					className="modal">
					<div className="content">
						<span
							id="closeButton"
							onClick={() => props.closeButton()}
							className="close">
							&times;
						</span>
						<div className="rest-information">
							<div id="information">
								<select>
									<option>CHEF'S</option>
									{chefData.map((chef: IChef) => (
										<option
											key={chef._id?.toString()}
											value={chef._id?.toString()}>
											{chef.name}
										</option>
									))}
								</select>
								<div id="information">{renderInputs(restDetails)}</div>
							</div>
							<button
								id="add-button"
								type="submit">
								ADD RESTAURANT
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
export default AddRest;
