import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Create from './components/Create/create'
import HomePage from './components/HomePage/home'
import ProductDescr from './components/ProductViewDescr/productDescr'
import CreatedProduct from './components/ListCreatedProduct/createdProduct'
import ProductEdit from './components/ProductEdit/productEdit'
import shoppingHistory from './components/History/shoppingHistory'
import currentDataHistory from './components/History/currentDataHistory'
import setDiscountView from './components/Discount/SetDiscounyView'
import viewDiscount from './components/Discount/viewDiscounts'
import login from './components/login'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PrivateRoute } from './components/routePrivate'


render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router>
					<div>
						<Route  exact path='/login' component={login}/>
						<PrivateRoute exact path='/' component={HomePage}/>
						<PrivateRoute  exact path='/create' component={Create}/>
						<PrivateRoute exact path='/viewProduct' component={ProductDescr}/>
						<PrivateRoute exact path='/editProduct' component={ProductEdit}/>
						<PrivateRoute exact path='/history' component={shoppingHistory}/>
						<PrivateRoute exact path='/viewCurrentHistory' component={currentDataHistory}/>
						<PrivateRoute exact path='/setDiscount' component={setDiscountView}/>
						<PrivateRoute  path='/viewDiscount' component={viewDiscount}/>
					</div>
			</Router>
		</MuiThemeProvider>
	</Provider>,
    document.getElementById('app')
);
