import { BlobOptions } from 'buffer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../store/slices/usersSlice';
import { Rootstate } from '../../store/store';
import './Signin.css';

const SignIn: React.FC = () => {
	const usersData = useSelector((state: Rootstate) => state.users.value);
	const [users, setUsers] = useState<any>(usersData);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [connect, setconnect] = useState<boolean>(false);

	const logInUser = async (
		email: string,
		password: string,
		connect: Boolean
	) => {
		await fetch('http://localhost:8000/users/login', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
				connect,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUsers((newUsers: IUser[]) => [...newUsers, data]);
				setEmail('');
				setPassword('');
				setconnect(true);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleRegister = (e: any) => {
		e.preventDefault();
		logInUser(email, password, connect);
	};
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
						onSubmit={handleRegister}
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
		</div>
	);
};
export default SignIn;
