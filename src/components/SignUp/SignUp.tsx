import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div id="sign-Up-container">
			<div id="sign-up-title">
				<div id="sign-up">SIGN UP</div>
			</div>
			<div id="sign-up-information">
				<input
					id="input-sign-up-information"
					placeholder="First Name"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Last Name"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Email"
					type={'text'}
				/>
				<input
					id="input-sign-up-information"
					placeholder="Password"
					type={'text'}
				/>
			</div>
			{/*
			<div id="login-button">
				<button id="button-login">LOGIN</button>
				<button id="forget-password-button">Forget password?</button>
			</div>
			<div id="or-container">
				<hr className="hr-left" />
				<div id="or-letter">or</div>
				<hr className="hr-right" />
    </div>*/}
			<button
				id="submit-button"
				onClick={() => navigate('/')}>
				SUBMIT
			</button>
		</div>
	);
};
export default SignUp;
