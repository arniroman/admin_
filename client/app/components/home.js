import React from 'react'
import axios from 'axios'
import Datas from '../components/create'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import  '../css/style.css'

export default class HomePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	componentWillMount(){
		axios.get('/product').then(response => this.setState({data: response.data }));
		//axios.post('/product').then(response => this.setState({data: response.data }));
	}		
	render() {
		console.log(this.state.data,'post data')
		
		return (
			<div>
				<TextField
					hintText="Password Field"
					floatingLabelText="Password"
					type="password"
    			/><br />

				<nav>
				<Link to="/create"><p className="links">All their equipment and instruments are alive.</p></Link>
				</nav>
			</div>
		);
	}
}
	
