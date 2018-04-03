import React,{Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Home from './HomePage/home'
import { loginAdmin } from '../actions/auth'



 class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email    :'',
            password :''
        }
    }
    login = () => {
        console.log(this.state)
        this.props.loginAdmin(this.state)


       // console.log('lala')
            // this.setState({
            //     ok: true,
            //     email:'',
            // })
 
            // if(this.state.ok){
               
            // //    localStorage.setItem('user', this.state.ok)   
         
            // }
        }
     handelChangeName = (event) =>{
        this.setState({
            email: event.target.value
        })
     }
     handelChangePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
     }
    
	render() {
     
       // localStorage.setItem('log',this.state.ok)
        //let storage = localStorage.getItem('user')
       if(localStorage.getItem('token')){
        
         return <Redirect to='/'/>
       }
    
       //return <Home/>
		return (
            
			<div className="Wrapper">
				<input onChange={this.handelChangeName} />
                <input onChange={this.handelChangePassword} />
                
                    <button onClick={ this.login }></button>
			</div>
		)
	}
}
	

const mapStateToProps = (state)=>{
    return {
        getToken   : state.getAllProducts,
    }
}

export default connect(mapStateToProps,{loginAdmin})(Login)