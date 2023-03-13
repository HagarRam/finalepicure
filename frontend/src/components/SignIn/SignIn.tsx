import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Rootstate } from '../../store/store';
import { getName, IUser, setActiveUsers } from '../../store/slices/usersSlice';
import './Signin.css';

const SignIn: React.FC = () => {
	const data = useSelector((state: Rootstate) => state.users.value);
	const filter = useSelector((state: Rootstate) => state.users.filteredValue);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [connect, setconnect] = useState<boolean>(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setActiveUsers({ email: email }));
	}, [email]);
	sessionStorage.setItem('data', JSON.stringify(filter));
	const storedData = JSON.parse(sessionStorage.getItem('data') || '{}');
	console.log(storedData);

	const logInUser = async (email: string, password: string) => {
		dispatch(setActiveUsers(email));
		message();
		setEmail('');
		setPassword('');
	};
	const handleRegister = (e: any) => {
		e.preventDefault();
		logInUser(email, password);
		setconnect(true);
	};

	const navigate = useNavigate();
	const message = () => {
		navigate('/', {
			state: {
				message: `Welcome to Epicure, ${storedData.firstName} ${storedData.lastName}!`,
			},
		});
	};
	return (
		<div id="sign-in-page">
			{' '}
			<form onSubmit={handleRegister}>
				<div id="sign-in-container">
					<div id="sign-in-title">
						<div id="sign-in">SIGN IN</div>
						<div>To continue the order, please sign in</div>
					</div>
					<div id="user-information">
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="input-information"
							placeholder="Email adress"
							type={'text'}
						/>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="input-information"
							placeholder="Password"
							type={'password'}
						/>
					</div>

					<div id="login-button">
						<button
							// onClick={handleRegister}
							id="button-login"
							type="submit">
							LOGIN
						</button>
						<button id="forget-password-button">Forget password?</button>{' '}
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
			</form>
		</div>
	);
};

export default SignIn;
