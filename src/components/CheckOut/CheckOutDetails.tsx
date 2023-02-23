import { useNavigate } from 'react-router-dom';
import './CheckOutDetails.css';

const CheckOutDetails: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div id="details-container">
			<div id="sign-up-title">
				<div id="sign-up">delivery details</div>
			</div>
			<div id="sign-up-information">
				<input
					id="input-sign-up-information"
					placeholder="Full Name"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Address"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Phone"
					type={'text'}
				/>
			</div>
			<div id="delivery-details-title">
				<div id="payment-details">payment details</div>
			</div>
			<div id="payment-details-information">
				<input
					id="input-sign-up-information"
					placeholder="Card Number"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Name On Card"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="CVV"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Expiry Date"
					type={'text'}
				/>
			</div>
		</div>
	);
};
export default CheckOutDetails;
