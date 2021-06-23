import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<header className='header' >
			<div className='header-name'>
				<Link to='/' >
					Chen Jia Ming
				</Link>
				<span>/</span>
				<Link to='/' >
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
		</header>
	);
};

export default Header;
