import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../About/About';
import Resume from '../../Resume/Resume';
import Projects from '../../Projects/Projects';
import './Main.css';

const Main = () => {
	return (
		<main className='main'>
			<Switch>
				<Route path='/' exact component={About} />
				<Route path='/resume' exact component={Resume} />
				<Route path='/projects' exact component={Projects} />
			</Switch>
		</main>
	);
};

export default Main;
