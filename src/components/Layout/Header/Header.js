import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	const [open, setOpen] = useState(false)

	const onClickHandler = () => {
		setOpen(open => !open)
	}

	return (
		<>
			<div className={`mobile-nav-container ${open ? "active" : ""}`}>
				<nav>
					<NavLink exact to='/'>
						ABOUT ME
					</NavLink>

					<NavLink to='/resume'>
						RESUME
					</NavLink>

					<NavLink to='/projects'>
						PROJECTS
					</NavLink>
				</nav>
			</div>

			<header className='header' >
				<div className='header-name'>
					<div className='title'>
						<div className='square'></div>
						<Link to='/' className="name">
							Chen Jia Ming
						</Link>
					</div>
					<span>/</span>
					<Link to='/' className='office' >
						Software Engineer
					</Link>
				</div>

				<nav className='nav'>
					<NavLink exact to='/'>
						ABOUT ME
					</NavLink>

					<NavLink to='/resume'>
						RESUME
					</NavLink>

					<NavLink to='/projects'>
						PROJECTS
					</NavLink>
				</nav>

				<div className={`mobile-nav ${open ? "active" : ""}`} onClick={onClickHandler}>
					<div className='line up'></div>
					<div className='line medium'></div>
					<div className='line down'></div>
				</div>

			</header>
		</>
	);
};

export default Header;
