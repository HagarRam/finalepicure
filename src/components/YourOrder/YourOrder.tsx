import React from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../store/store';
import DishOrder from '../DishOrder/DishOrder';
import DishCard from '../SignatureDish/DishCard';
import './YourOrder.css';

interface IOrder {
	// id: number;
	closeButton: Function;
}

const YourOrder: React.FC<IOrder> = (props: IOrder) => {
	const SignatureDishData = useSelector(
		(state: Rootstate) => state.dishes.value
	);
	return (
		<div id="your-order">
			<span
				id="closeOrder"
				onClick={() => props.closeButton()}
				className="close-order">
				x
			</span>
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
							type="submit">
							Checkout
						</button>
						<button
							type="submit"
							id="history-order">
							Order history
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YourOrder;
