import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import vector from './images/Vector.svg';
import './ModalOrder.css';
import { Rootstate } from '../../store/store';
import DishModalOrder from '../DishModalOrder/DishModalOrder';

interface IModal {
	// id: number;
	time: number;
	closeButton: Function;
}

const ModalOrder: React.FC<IModal> = (props: IModal) => {
	const dishesData = useSelector((state: Rootstate) => state.dishes.value);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		window.scrollTo(0, 0);
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<div className="restaurants-card">
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
					<img
						alt="vector"
						src={vector}
					/>
					<div>order recived</div>
					<div>Your food is in process</div>
					<div id="time">
						<div>Arrive in</div>
						<div>{props.time}</div>
						<div>mins</div>
					</div>
					<div id="alltheorder">
						<DishModalOrder
							id={0}
							name={dishesData[1].name}
							price={dishesData[1].price}
							quantity={4}
						/>
						<DishModalOrder
							id={0}
							name={dishesData[1].name}
							price={dishesData[1].price}
							quantity={4}
						/>
						<DishModalOrder
							id={0}
							name={dishesData[1].name}
							price={dishesData[1].price}
							quantity={4}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalOrder;
