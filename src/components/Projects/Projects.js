import React, { useState, useEffect } from 'react';
import projectData from "../../projectData"
import Pagination from './Pagination';
import './Projects.css';

const project_count = projectData.projects.length

const Projects = () => {
	const [projectNumber, setProjectNumber] = useState([0, 12]);
	const [leftBtn, setLeftBtn] = useState(false)
	const [rightBtn, setRightBtn] = useState(false)
	const [nowPage, setNowPage] = useState(1)



	useEffect(() => {
		if (projectNumber[0] === 0) {
			setLeftBtn(false)
			setRightBtn(true)
		}
		else if (projectNumber[1] > project_count) {
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

	const changePageHandler = (id) => {
		if (id === 0) id = 1
		if (id > Math.ceil(project_count / 12)) id = Math.ceil(project_count / 12)
		setProjectNumber((projectNumber) => [(id - 1) * 12, id * 12])
		setNowPage(id)
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
			return false
		})
	}

	return (
		<div className="project-container">
			<div className="title">
				<div className="square"></div>
				<h1>Projects</h1>
			</div>
			<div className="card-container">
				{
					projectRender()
				}
			</div>
			<button className="arrow left-arrow" onClick={leftHandler} disabled={!leftBtn}>
				<i className="fas fa-chevron-left"></i>
			</button>

			<button className="arrow right-arrow" onClick={rightHandler} disabled={!rightBtn}>
				<i className="fas fa-chevron-right"></i>
			</button>

			<Pagination count={project_count} changeClick={changePageHandler} nowPage={nowPage} />
		</div>)
};

export default Projects;