const SignIn: React.FC = () => {
	return (
		<div>
			<div id="sign-in-title">
				<div>SIGN IN</div>
				<div>To continue the order, please sign in</div>
			</div>
			<div id="user-information">
				<input
					placeholder="Email adress"
					type={'text'}
				/>
				<input
					placeholder="Password"
					type={'number'}
				/>
			</div>
			<div id="login-button">
				<button>LOGIN</button>
				<button>Forget password?</button>
			</div>
			<div id="or-container">
				<hr />
				<p>or</p>
				<hr />
			</div>
			<button>SIGN UP</button>
		</div>
	);
};
export default SignIn;
