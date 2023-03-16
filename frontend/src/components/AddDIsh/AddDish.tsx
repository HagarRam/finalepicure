import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import { IRestaurants } from '../RestaurantPage/RestaurantPage';

interface IModal {
	closeButton: Function;
}

const AddDish: React.FC<IModal> = (props: IModal) => {
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
			placeholder: 'Enter dish name',
			type: 'text',
			title: 'Dish Name',
			name: 'dishName',
		},
		{
			id: 'about-input',
			placeholder: 'Enter about the dish',
			type: 'text',
			title: 'About',
			name: 'about',
		},
		{
			id: 'price-input',
			placeholder: 'Enter dish price',
			type: 'text',
			title: 'Price',
			name: 'dishPrice',
		},
		{
			id: 'icons-input',
			placeholder: 'Enter the dish symbols',
			type: 'text',
			title: 'Icons',
			name: 'icons',
		},
		{
			id: 'img-input',
			placeholder: 'Enter image URL',
			type: 'text',
			title: 'Image',
			name: 'img',
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
			name: '',
			about: '',
			chefId: '',
			restaurantId: '',
			price: '',
			icons: [],
			img: '',
		};
		const inputObj = e.target;
		console.log(credentials);

		Object.values(inputObj).forEach((obj: any) => {
			switch (obj.name) {
				case 'dishPrice':
					credentials[obj.name] = Number(obj.value);
					break;
				case 'dishName':
				case 'img':
					credentials[obj.name] = String(obj.value);
					break;
				case 'icons':
					credentials[obj.name] = obj.value.split(',').map(String);
					break;
				// credentials[obj.name] = obj.value.split(',').map(Number);
				// break;
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
								<div id="information">{renderInputs(restDetails)}</div>
							</div>
							<button
								id="add-button"
								type="submit">
								ADD DISH
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddDish;