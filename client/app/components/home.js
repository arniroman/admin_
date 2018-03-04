import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

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
					<div class="header-content">
							<div className="iconAdmin">
								<i class="fas fa-user-secret"></i>
							</div>
						<Link  className="linkBtn"to="/create">
								<div className="createBtn-wrap">
									<div className="createBtn-box">
										<i className="fas fa-plus create-btn"></i>
									</div>
								</div>
						</Link>
						<Link to="/createdProduct">
									<div className="createBtn-wrap">
										<div className="createBtn-box">
											<i class="fas fa-cart-plus create-btn"></i>
										</div>
									</div>
						</Link>
						<Link to="/">
									<div className="createBtn-wrap cc">
										<div className="createBtn-box">
											<i class="fas fa-home create-btn"></i>
										</div>
									</div>
						</Link>
					</div>
				</header>	
			</div>
		);
	}
}
	
