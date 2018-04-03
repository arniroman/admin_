import React,{Component} from 'react'
import CreatedProduct from '../ListCreatedProduct/createdProduct'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Login from '../login'
import  '../../css/style.css'
import '../../css/home.css'


export default class HomePage extends Component {
	/** remove token for logaut **/
	logaut = () => {
			localStorage.removeItem('token')
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
							<Link to ='/'>
							<div onClick={this.logaut} className="createBtn-box login">
							   <i  class="fas fa-power-off icon-header"></i>
							</div>
							</Link>
					</div>
				</header>
				<div className="content">
					<CreatedProduct />
				</div>
			</div>
		)
	}
}
	
