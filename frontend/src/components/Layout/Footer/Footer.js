import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-copy'>
				<p >© 2021 by Chen Jia Ming.</p>
				<p>Proudly created with <a href="/">faifai.com</a></p>
				<p>Use <i className="fab fa-docker"></i> <i className="fab fa-react"></i> <i className="fab fa-node"></i> <img src="/images/mongodb.svg" alt="mongodb"></img> <img src="/images/nginx.svg" alt="nginx"></img></p>
			</div>
			<div className='footer-info'>
				<div>
					<p className="footer-title">Call</p>
					<p>0912-345-678</p>
				</div>
				<div className="footer-social">
					<p className='footer-title'>Follow</p>
					<a href="https://www.facebook.com/profile.php?id=100002498678572" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
					<a href="https://line.me/ti/p/ixwh4vm4E4" target="_blank" rel="noreferrer"><i className="fab fa-line"></i></a>
					<a href="https://www.linkedin.com/in/%E5%98%89%E9%8A%98-%E9%99%B3-b2539b185/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
					<i className="fab fa-instagram"></i>
				</div>
			</div>

		</div>
	);
};

export default Footer;
