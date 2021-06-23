import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Professional from './Professional';


import './Resume.css'

const Resume = () => {
	return (
		<div className="resume-container">
			<h1>Resume</h1>
			<Experience />
			<Education />
			<Professional />
		</div>
	);
};

export default Resume;
