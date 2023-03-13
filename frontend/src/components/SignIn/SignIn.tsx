import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Rootstate } from '../../store/store';
import { getName, IUser, setActiveUsers } from '../../store/slices/usersSlice';
import './Signin.css';

const SignIn: React.FC = () => {
	const data = useSelector((state: Rootstate) => state.users.value);
	console.log(data);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [connect, setconnect] = useState<boolean>(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setActiveUsers({ email: email }));
	}, [email]);

	const logInUser = async (email: string, password: string) => {
		try {
			await fetch('http://localhost:8000/users/', {
				method: 'POST',
				body: JSON.stringify({
					email: email,
					password: password,
					connect: true, // or whatever value is appropriate for your use case
				}),

				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					dispatch(setActiveUsers(data.email));
					setEmail('');
					setPassword('');
				});
		} catch (err) {
			alert('please try again');
			console.log(err);
		}
	};

	const handleRegister = (e: any) => {
		e.preventDefault();
		logInUser(email, password);
		setconnect(true);
	};

	const navigate = useNavigate();
	const name = useEffect(() => {
		if (connect) {
			for (const key in data) {
				if (Object.prototype.hasOwnProperty.call(data, key)) {
					const user = data[key];
					navigate('/', {
						state: { message: `${user.firstName} Welcome to Epicure!` },
					});
				}
			}
		}
	}, [connect, navigate, data]);

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
