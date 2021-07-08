import React, { useState, useEffect } from 'react';
import './Projects.css';
import projectData from "../../projectData"

const Projects = () => {
	const [projectNumber, setProjectNumber] = useState([0, 12]);
	const [leftBtn, setLeftBtn] = useState(false)
	const [rightBtn, setRightBtn] = useState(false)


	useEffect(() => {
		if (projectNumber[0] === 0) {
			setLeftBtn(false)
			setRightBtn(true)
		}
		else if (projectNumber[1] > projectData.projects.length) {
			setLeftBtn(true)
			setRightBtn(false)
		}
		else {
			setLeftBtn(true)
			setRightBtn(true)
		}

	}, [projectNumber])

	const leftHandler = () => {
		setProjectNumber((projectNumber) => [projectNumber[0] - 12, projectNumber[1] - 12])
	}

	const rightHandler = () => {
		setProjectNumber((projectNumber) => [projectNumber[1], projectNumber[1] + 12])
	}

	const projectRender = () => {
		return projectData.projects.map((project, idx) => {
			if (idx >= projectNumber[0] && idx < projectNumber[1]) {
				return (
					<div key={idx} className='card'>
						<img src={project.image} alt={project.projectName} />
						<div className='card-content'>
							<h3>{project.projectName}</h3>
							<a href={project.url} target="_blank" rel="noreferrer">Live Demo</a>
						</div>
						<span>{project.projectName}</span>
					</div>
				)
			}
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
			<button className="arrow left-arrow" onClick={leftHandler} disabled={!leftBtn}>
				<i class="fas fa-chevron-left"></i>
			</button>

			<button className="arrow right-arrow" onClick={rightHandler} disabled={!rightBtn}>
				<i class="fas fa-chevron-right"></i>
			</button>
		</div>)
};

export default Projects;