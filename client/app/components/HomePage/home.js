import React,{Component} from 'react'
import CreatedProduct from '../ListCreatedProduct/createdProduct'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Login from '../login'
import  '../../css/style.css'
import '../../css/home.css'

export default class HomePage extends Component {
	

	logaut = () => {
			localStorage.removeItem('log')
		}

	render() {
		
		return (
			<div className="Wrapper">
			<Link to ='/'>
				<button onClick={this.logaut} >Logaut</button>
			</Link>
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
		)
	}
}
	
