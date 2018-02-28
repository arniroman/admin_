import React from 'react'
import axios from 'axios'
import Datas from '../components/create'
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
	componentWillMount(){
		axios.get('/product').then(response => this.setState({data: response.data }));
		//axios.post('/product').then(response => this.setState({data: response.data }));
	}		
	render() {
		console.log(this.state.data,'post data')
		
		return (
			<div className="Wrapper">
					<nav>
						<Link to="/create"><div className="links">
							<FloatingActionButton className='createProduct'>
								<ContentAdd />
							</FloatingActionButton></div>
						</Link>
					</nav>
			</div>
		);
	}
}
	
