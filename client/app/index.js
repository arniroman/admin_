import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Create from './components/create'
import HomePage from './components/home'
import CreatedProduct from './components/createdProduct.js'
import store from './store'


render(
<Provider store = {store}>
	<MuiThemeProvider>
		<BrowserRouter>
				<div>
					<Route exact path='/' component={HomePage}/>
					<Route exact path='/create' component={Create}/>
				</div>
		</BrowserRouter>
	</MuiThemeProvider>
</Provider>,
    document.getElementById('app')
);
