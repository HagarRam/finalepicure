import React from 'react';
import './AboutUs.css';
import aboutuslogo from '../../assets/aboutusLogo.svg';
import applestore from '../../assets/applestoreLogo.svg';
import googleplay from '../../assets/googleplayLogo.svg';
<<<<<<< Updated upstream
const AboutUs: React.FC = () => {
	return (
		<div id="AboutUsPage">
			<div id="aboutuscontainer">
				<div id="titleAboutUs">ABOUT US:</div>
=======

const AboutUs: React.FC = () => {
	return ( 
		<div id="AboutUsPage">
			<div id="aboutuscontainer">
				<div>
						<div id="titleAboutUs">ABOUT US:</div>
>>>>>>> Stashed changes
				<div id="aboutParagraph">
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
						vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
						eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
						sodales porta. Vivamus elit urna, dignissim a vestibulum.
					</div>
					<br></br>

					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
						vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
					</div>
				</div>
<<<<<<< Updated upstream
=======
				</div>
			
>>>>>>> Stashed changes
				<div id="application">
					<img
						src={applestore}
						className="app"
						id="AppleStore"
					/>
					<img
						src={googleplay}
						className="app"
						id="GooglePlay"
					/>
				</div>
			</div>
			<div id="AboutusLogo">
				<img
<<<<<<< Updated upstream
=======
				className='about-us-logo'
>>>>>>> Stashed changes
					src={aboutuslogo}
					alt="AboutUs"
				/>
			</div>
		</div>
	);
};
export default AboutUs;
