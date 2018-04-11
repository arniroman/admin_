import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import RaisedButton from 'material-ui/RaisedButton'
import { createProperties } from '../../actions/createProps'
import { connect } from 'react-redux'
import '../../css/createdProps.css'
import '../../css/curentDataHistory.css'


class Properties extends Component {
    
    constructor(props){
		super(props)
		this.state = {
            modalClass  :'closed',
            name        : '',
            category    : ''
        } 
    }
    handleSubmitProps = () => {
        console.log('hii')
        let obj = {
            name    : this.state.name,
            category: this.state.category
        }
        this.props.createProperties(obj)

        this.setState({
            modalClass:'open'
        })
    }
    handleChangeById = (event) => {
        this.setState({[event.currentTarget.id]: event.target.value})
     }

    modalMessage = () => {
        let classModal = this.state.modalClass
        return(
            <div className={classModal} >
                <div>
                    {this.props.createdProps&& <span>{this.props.createdProps.message}</span>}
                    <div className = 'handelConfirm'>
                        <span className='handelConfirm-btn' onClick={this.handelChangeClass}>ok</span>
                    </div>
                </div>
            </div>
        )
    }

    handelChangeClass = () =>{
        this.setState({
            modalClass:'closed'
        })
    }
    
    render(){ 
        return( 
            <div>
                <header className="headerEdit create">
                    <p>Create properties</p>
                <i class="fas fa-wrench hederEdit-icon"></i>
                </header>
                {this.modalMessage()}
                <div className = 'propsWrapper' >
                    <div className='propsContainer' >
                        <p className="titleName-props">Name</p>
                            <TextField
                                className="createProd-input"
                                id="name"
                                name="descr"
                                hintText="name"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
                            />
                        <p className="titleName-props">Category</p>
                            <TextField
                                className="createProd-input"
                                id="category"
                                name="descr"
                                hintText="category"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
                            />
                        <div className='propsBtn' >
                            <RaisedButton onClick={this.handleSubmitProps} label="Create new properties" primary={true} /> 
                        </div>
                        <Link to ='/create'>
                            <div className='propsBtn' >
                                <RaisedButton  label="Back to create page" primary={false} /> 
                            </div>
                        </Link>
                    </div>
                </div>      
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        createdProps : state.createdPropsData  
    }
}

export default connect(mapStateToProps,{createProperties})(Properties)