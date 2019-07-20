import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import './App.css';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUp';

function App() {
  	return (
	    <div>
			<Header />
	    	<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInSignUpPage} />
			</Switch>
	    </div>
  	);
}

export default App;
