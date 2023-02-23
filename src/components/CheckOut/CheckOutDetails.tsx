// import { useNavigate } from 'react-router-dom';
import './CheckOutDetails.css';

const CheckOutDetails: React.FC = () => {
	// const navigate = useNavigate();
	return (
		<div id="details-container">
			<div className="details-title">
				<div> DELIVERY DETAILS</div>
			</div>
			<div id="details-information">
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
			<div
				className="details-title"
				id="payment-title">
				PAYMENT DETAILS
			</div>
			<div id="details-information">
				<div id="input-container">
					{' '}
					<div id="input-title">Card Number</div>
					<input
						id="input-sign-up-information"
						type={'text'}
					/>
				</div>
				<div id="input-container">
					{' '}
					<div id="input-title">Name On Card</div>
					<input
						id="input-sign-up-information"
						type={'text'}
					/>
				</div>
				<div id="input-container">
					{' '}
					<div id="input-title">CVV</div>
					<input
						id="input-sign-up-information"
						type={'text'}
					/>
				</div>
				<div id="input-container">
					{' '}
					<div id="input-title">Expiry Date</div>
					<input
						id="input-sign-up-information"
						type={'text'}
					/>
				</div>
			</div>
		</div>
	);
};
export default CheckOutDetails;
