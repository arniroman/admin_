import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Create from './components/create'
import HomePage from './components/home'
import CreatedProduct from './components/createdProduct.js'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'


render(
	<Provider store = {store}>
		<MuiThemeProvider>
			<Router>
					<div>
						<Route exact path='/' component={HomePage}/>
						<Route exact path='/create' component={Create}/>
					</div>
			</Router>
		</MuiThemeProvider>
	</Provider>,
    document.getElementById('app')
);
