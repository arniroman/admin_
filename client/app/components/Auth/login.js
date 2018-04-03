import React,{Component} from 'react'
import TextField from 'material-ui/TextField'
import { Route, Redirect } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAdmin } from '../../actions/auth'
import '../../css/auth.css'


 class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email    :'',
            password :''
        }
    }

    loginHandler = () => {
        this.props.loginAdmin(this.state)
        }

    handleChangeById = (event) => {
        this.setState({[event.currentTarget.id]: event.target.value})
    }
    
    alertMessages = () => {
       let a = this.props.getToken
       console.log(a)
    return (
        <span className="alertMessages">{a}</span>
    )
    }

	render() {
        if(this.props.getToken){
           console.log(this.props.getToken,) 
        }

       if(localStorage.getItem('token')){
         return <Redirect to='/'/>
       }
       
		return (
			<div className='Wrapper'>
                <div className='containerLogin'> 
                    <div className='loginContent' >
                      {this.props.getToken && this.alertMessages()}
                            <p className='titleName-props'>E-mail</p>
                                    <TextField
                                        className='createProd-input'
                                        id='email'
                                        type='email'
                                        name='email'
                                        hintText='email'
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}  
                                    />
                            <p className='titleName-props'>Password</p>
                                    <TextField
                                        className='createProd-input'
                                        id='password'
                                        type='password'
                                        name='password'
                                        hintText='password'
                                        fullWidth={true}
                                        onChange = {this.handleChangeById} 
                                    />
                            <div className="sing-in" >
                                <RaisedButton onClick={ this.loginHandler} label="Sign in" primary={true} />
                            </div>
                    </div>
               </div>  
		  </div>
		)
	}
}
	

const mapStateToProps = (state)=>{
    return {
        getToken : state.loginAdminToken,
    }
}

export default connect(mapStateToProps,{loginAdmin})(Login)