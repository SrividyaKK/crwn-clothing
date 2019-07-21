import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import './App.css';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUp';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super(); 
		this.state = {
			currentUser: null,
		}
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user })
		})
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	  }
}

export default App;
