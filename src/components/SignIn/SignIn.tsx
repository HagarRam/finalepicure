import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignIn: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div id="sign-in-page">
			<div id="sign-in-container">
				<div id="sign-in-title">
					<div id="sign-in">SIGN IN</div>
					<div>To continue the order, please sign in</div>
				</div>
				<div id="user-information">
					<input
						id="input-information"
						placeholder="Email adress"
						type={'text'}
					/>
					<input
						id="input-information"
						placeholder="Password"
						type={'text'}
					/>
				</div>
				<div id="login-button">
					<button id="button-login">LOGIN</button>
					<button id="forget-password-button">Forget password?</button>
				</div>
				<div id="or-container">
					<hr className="hr-left" />
					<div id="or-letter">or</div>
					<hr className="hr-right" />
				</div>
				<button
					id="sign-up-button"
					onClick={() => navigate('/SignUp')}>
					SIGN UP
				</button>
			</div>
		</div>
	);
};
export default SignIn;
