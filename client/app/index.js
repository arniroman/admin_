import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Create from './components/create'
import HomePage from './components/home'


  
render(
<MuiThemeProvider>
	<BrowserRouter>
		<div>
			<Route exact path='/' component={HomePage}/>
			<Route exact path='/create' component={Create}/>
		</div>
	</BrowserRouter>
</MuiThemeProvider>,
    document.getElementById('app')
);
