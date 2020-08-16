import React from 'react';
import './App.css';

import { Route, Switch } from 'wouter';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/pokemon/:key" component={Results} />
				<Route><NotFound error="Page not found" /></Route>
			</Switch>
		</div>
	);
}

export default App;
