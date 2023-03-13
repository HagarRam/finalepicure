import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SignUp from '../SignUp/SignUp';
import './SignUpPage.css';

const SignUpPage: React.FC = () => {
	return (
		<div id="sign-in-page">
			<NavBar />
			<SignUp />
			<Footer />
		</div>
	);
};

export default SignUpPage;
