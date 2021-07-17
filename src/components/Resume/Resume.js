import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Professional from './Professional';


import './Resume.css'

const Resume = () => {
	return (
		<div className="resume-container">
			<div className="title">
				<div className="square"></div>
				<h1>Resume</h1>
			</div>
			<Experience />
			<Education />
			<Professional />
		</div>
	);
};

export default Resume;
