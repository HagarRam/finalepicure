import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../store/slices/usersSlice';
import { Rootstate } from '../../store/store';
import './SignUp.css';

const SignUp: React.FC = () => {
	const usersData = useSelector((state: Rootstate) => state.users.value);
	const [users, setUsers] = useState<any>(usersData);
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [connect, setconnect] = useState<boolean>(false);
	const registerUser = async (
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) => {
		await fetch('http://localhost:8000/users/create', {
			method: 'POST',
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUsers((newUsers: IUser[]) => [...newUsers, data]);
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleRegister = (e: any) => {
		e.preventDefault();
		registerUser(firstName, lastName, email, password);
		setconnect(true);
	};
	const navigate = useNavigate();
	// useEffect(() => {
	// 	if (connect) {
	// 		// when connect is true (after successful sign up)
	// 		navigate('/SignIn', {
	// 			state: { message: `${firstName}    Welcome to Epicure!` },
	// 		}); // navigate to home page with welcome message
	// 	}
	// }, [connect, navigate]);

	return (
		<div id="sign-Up-container">
			<div id="sign-up-title">
				<div id="sign-up">SIGN UP</div>
			</div>
			<div id="sign-up-information">
				<form onSubmit={handleRegister}>
					<input
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						id="input-sign-up-information"
						placeholder="First Name"
						type={'text'}
					/>
					<input
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						id="input-sign-up-information"
						placeholder="Last Name"
						type={'text'}
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="input-sign-up-information"
						placeholder="Email"
						type={'text'}
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						id="input-sign-up-information"
						placeholder="Password"
						type={'password'}
					/>{' '}
					<button
						onClick={() => navigate('/SignIn')}
						id="submit-button">
						SUBMIT
					</button>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
