import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Rootstate } from '../../store/store';
import DishOrder from '../DishOrder/DishOrder';
import ModalOrder from '../ModalOrder/ModalOrder';
import './YourOrderSubmit.css';

const YourOrderSubmit: React.FC = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const SignatureDishData = useSelector(
		(state: Rootstate) => state.dishes.value
	);

	const handleDishClick = () => {
		// setIsModalOpen(true);
		navigate('/', { state: isModalOpen, replace: true });
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div id="your-check-out">
			<div id="order-card">
				<div id="title-order">YOUR ORDER</div>
				<div id="rest-order-name">Mashya</div>
				<div className="bag">
					<div id="order-information">
						<DishOrder
							id={0}
							name={SignatureDishData[1].name}
							price={SignatureDishData[1].price}
							img={SignatureDishData[1].img}
							dishtitle={'dish-order-card-element'}
							comment={'no spicy'}
							quantity={5}
						/>
						<DishOrder
							id={0}
							name={SignatureDishData[2].name}
							price={SignatureDishData[2].price}
							img={SignatureDishData[2].img}
							dishtitle={'dish-order-card-element'}
							comment={'no spicy'}
							quantity={3}
						/>
						<DishOrder
							id={0}
							name={SignatureDishData[4].name}
							price={SignatureDishData[4].price}
							img={SignatureDishData[4].img}
							dishtitle={'dish-order-card-element'}
							comment={'no spicy'}
							quantity={1}
						/>
					</div>
					<div id="comment-and-buttons-container">
						<div id="add-comment">Add A Comment</div>
						<input
							placeholder="Special requests, allergies, detary restrictions, etc."
							type={'text'}
							id="comment-input"
						/>
						<button
							id="check-out"
							type="submit"
							onClick={handleDishClick}>
							PAY
						</button>
					</div>
				</div>
			</div>{' '}
			{isModalOpen && (
				<ModalOrder
					closeButton={closeModal}
					time={90}
				/>
			)}
		</div>
	);
};

export default YourOrderSubmit;
