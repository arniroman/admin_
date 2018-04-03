import React,{Component} from 'react'
import { Redirect } from 'react-router'
import Home from './HomePage/home'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            ok: ''
        }
    }
    login = () => {
       // console.log('lala')
            this.setState({
                ok: true
            })
            if(this.state.ok){
               localStorage.setItem('log', this.state.ok)   
            }
        }
    
	render() {
        console.log(this.state.ok)
       // localStorage.setItem('log',this.state.ok)
        let storage = localStorage.getItem('log')
       if(storage){
           
         //<Redirect to='/home'/>
         console.log('lala')
         return <Home/>
       }
       // return <Home/>
		return (
            
         
			<div className="Wrapper">
				login
                <button onClick={ this.login }></button>
			</div>
		)
	}
}
	
