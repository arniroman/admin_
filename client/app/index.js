import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Create from './components/create'
import HomePage from './components/home'


render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={HomePage}/>
			<Route exact path='/home' component={Create}/>
		</div>
	</BrowserRouter>,
    document.getElementById('app')
);
