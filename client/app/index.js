import React from 'react'
import { render } from 'react-dom'
import Create from './components/create'
import HomePage from './components/home'


render(
	<div>
		<Router history={browserHistory}>
			<Route path="/" component={HomePage}>
				<IndexRoute component={HomePage} />
			</Route>
		</Router>
	</div>,
    document.getElementById('app')
);
