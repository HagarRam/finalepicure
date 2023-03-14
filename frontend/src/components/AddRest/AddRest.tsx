import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import { IRestaurants } from '../RestaurantPage/RestaurantPage';

interface IModal {
	closeButton: Function;
}

const AddRest: React.FC<IModal> = (props: IModal) => {
	const restData = useSelector(
		(state: Rootstate) => state.restaurants.filteredValue
	);
	const [rest, setRest] = useState<any>(restData);
	const [inputValues, setInputValues] = useState({});
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
		// {
		// 	id: 'dishes-input',
		// 	placeholder: 'Enter dishes',
		// 	type: 'text',
		// 	title: 'Dishes',
		// 	name: 'dishes',
		// },
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
				/>
			</div>
		));
	};

	// const postInformation = () => {
	// 	return comment;
	// 	//to come back!!
	// };

	const newRest = async () => {
		try {
			await fetch('http://localhost:8000/restaurant/', {
				method: 'POST',
				body: JSON.stringify({}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setRest((newRest: IRestaurants[]) => [...newRest, data]);
					// setFirstName('');
					// setLastName('');
					// setEmail('');
					// setPassword('');
					// navigate('/SignIn');
				});
		} catch (err) {
			alert('please try again');
			console.log(err);
		}
	};

	// const navigate = useNavigate();
	const handleRegister = async (e: any) => {
		await newRest();
	};

	const handSaveRest = async (e: any) => {
		e.preventDefault();
		const credentials: any = {
			id: 0,
			chefName: '',
			address: [],
			chefId: 0,
			openHours: [],
			openDays: [],
			openYear: 0,
			img: '',
			// dishes: [],
			rating: 0,
		};
		const inputObj = e.target;
		console.log(credentials);

		Object.values(inputObj).forEach((obj: any) => {
			switch (obj.name) {
				case 'rating':
					credentials[obj.name] = Number(obj.value);
					break;
				case 'restName':
				case 'chefName':
				case 'img':
				case 'address':
					// credentials[obj.name] = String(obj.value);
					// break;
					credentials[obj.name] = obj.value.split(',').map(String);
					break;
				// case 'dishes':
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
							<div>
								<div id="details-information">{renderInputs(restDetails)}</div>
							</div>
							<button
								id="add-rest-butoon"
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
