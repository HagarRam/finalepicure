import React from 'react';
import './YourOrder.css';
const YourOrder: React.FC = () => {
	return (
		<div id="your-order">
			<div id="title-order">YOUR ORDER</div>
			<div id="rest-order-name">Mashya</div>
			<div className="bag">
				<div id="order-information"></div>
				<div>Add A Comment</div>
				<input
					placeholder="Special requests, allergies, detary restrictions, etc."
					type={'text'}
				/>
				<button type="submit">Checkout 264</button>
				<button>Order history</button>
			</div>
		</div>
	);
};

export default YourOrder;
