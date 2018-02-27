import React from 'react';
import axios from 'axios';
import Datas from '../components/data'
import data from '../components/data';

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
				<Datas/>
			</div>
		);
	}
}
	
