import React from 'react';
import Profile from './Profile';
import Introduce from './Introduce';
import './About.css'

const About = () => {
	return (
		<div className="about-container">
			<div className='left-bg'>
				<Profile />
			</div>
			<div className='right-bg'>
				<Introduce />
			</div>
		</div>
	);
};

export default About;
