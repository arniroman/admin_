import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import CreatedProduct from './createdProduct'

import  '../css/style.css'
import '../css/home.css'

export default class HomePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	render() {
		return (
			<div className="Wrapper">
				<header className="header">
					<div class="header-left">
							<div className="createBtn-box linkOnBack-site">
								<i class="fas fa-tv icon-header"></i>
								<span className="linkSite-btn">return to the site</span>
							</div>

							<div className="createBtn-box login">
								<i class="fas fa-power-off icon-header"></i>
							</div>
					</div>
				</header>
				<div className="content">
					<CreatedProduct />
				</div>
			</div>
		);
	}
}
	
