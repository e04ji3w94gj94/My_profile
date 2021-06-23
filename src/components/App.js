import React from 'react';
import { Router } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';
import Footer from './Layout/Footer/Footer';
import history from '../history';
import './App.css';

const App = () => {
	return (
		<Router history={history}>
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
