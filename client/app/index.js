import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';;

import HomePage from './components/home';


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
