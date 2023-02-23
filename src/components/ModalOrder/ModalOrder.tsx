import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './ModalOrder.css';
import { Rootstate } from '../../store/store';

interface IModal {
	// id: number;
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
				</div>
			</div>
		</div>
	);
};

export default ModalOrder;
