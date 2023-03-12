import { BlobOptions } from 'buffer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IActive } from '../../store/slices/activeUsers';
import { Rootstate } from '../../store/store';
import './Signin.css';

const SignIn: React.FC = () => {
	const usersData = useSelector((state: Rootstate) => state.activeUsers.value);
	const [users, setUsers] = useState<any>(usersData);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [connect, setconnect] = useState<boolean>(false);

	const logInUser = async (email: string, password: string) => {
		try {
			await fetch('http://localhost:8000/login/new', {
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
					setUsers((newUsers: IActive[]) => [...newUsers, data]);
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

	useEffect(() => {
		if (connect) {
			// when connect is true (after successful sign up)
			navigate('/', {
				state: { message: ` Welcome to Epicure!` },
			}); // navigate to home page with welcome message
		}
	}, [connect, navigate]);

	return (
		<div id="sign-in-page">
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
