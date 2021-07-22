import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-content">
				<img src="/e04/build/images/profile.png" alt="profile" />
				<h1 className="profile-name">Chen
					<br />
					Jia Ming
				</h1>
				<span>Software Engineer</span>
				<div className="under_line"></div>
			</div>
			<div className="mobile-button">
				<Link to='/resume'>
					RESUME
				</Link>

				<Link to='/projects'>
					PROJECTS
				</Link>
			</div>
			<div className="social">
				<a href="https://www.facebook.com/profile.php?id=100002498678572" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
				<a href="https://line.me/ti/p/ixwh4vm4E4" target="_blank" rel="noreferrer"><i className="fab fa-line"></i></a>
				<a href="https://www.linkedin.com/in/%E5%98%89%E9%8A%98-%E9%99%B3-b2539b185/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
				<i className="fab fa-instagram"></i>
			</div>
		</div>
	)
};

export default Profile;
