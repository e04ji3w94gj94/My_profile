import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectData from "../../projectData"

const Projects = () => {
	const [projectNumber, setProjectNumber] = useState(12);
	const [leftBtn, setLeftBtn] = useState(false)
	const [rightBtn, setRightBtn] = useState(false)


	useEffect(() => {
		if (projectData.projects.length < projectNumber) {
			if (projectNumber === 12) {
				setLeftBtn(true)
				setRightBtn(true)
			}
			else {
				setLeftBtn(false)
				setRightBtn(true)
			}

		}
		else if (projectData.projects.length >= projectNumber) {
			setLeftBtn(true)
			setRightBtn(false)

		}
	}, [projectNumber])

	const leftHandler = () => {
		setProjectNumber((projectNumber) => projectNumber - 12)
	}

	const rightHandler = () => {
		setProjectNumber((projectNumber) => projectNumber + 12)
	}

	const projectRender = () => {
		return projectData.projects.slice(projectNumber - 12, projectNumber).map((project, idx) => {
			return (
				<div key={idx} className='card'>
					<img src={project.image} alt={project.projectName} />
					<div className='card-content'>
						<h3>{project.projectName}</h3>
						<a href={project.url} target="_blank" rel="noreferrer">Live Demo</a>
					</div>
					<span>{project.projectName}</span>
				</div>
			);
		})
	}
	return (
		<div className="project-container">
			<h1>Projects</h1>
			<div className="card-container">
				{
					projectRender()

				}
			</div>
			<button className="arrow left-arrow" onClick={leftHandler} disabled={leftBtn}>
				<i className="fas fa-arrow-left"></i>
			</button>

			<button className="arrow right-arrow" onClick={rightHandler} disabled={rightBtn}>
				<i className="fas fa-arrow-right"></i>
			</button>
		</div>)
};

export default Projects;