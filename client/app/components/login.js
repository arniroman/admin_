import React,{Component} from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
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
               
               localStorage.setItem('user', this.state.ok)   
         
            }
        }
     
    
	render() {
        console.log(this.state.ok)
       // localStorage.setItem('log',this.state.ok)
        let storage = localStorage.getItem('user')
       if(storage){
        
         return <Redirect to='/'/>
       }
    
       //return <Home/>
		return (
            
         
			<div className="Wrapper">
				login
                
                    <button onClick={ this.login }></button>
                
			</div>
		)
	}
}
	
