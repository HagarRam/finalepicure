import React from 'react';
import './Footer.css';
const Footer: React.FC = () => {
	return (
		<div id="footerPage">
			<hr className="footer-hr" />
			<div className="footer-info">
				<div id="info">Contact Us</div>
				<div id="info"> Term of Use</div>
				<div id="info">Privacy Policy</div>
			</div>
		</div>
	);
};

export default Footer;
