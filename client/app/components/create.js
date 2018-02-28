import React, {Component} from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import HomePage from './home'
import '../css/createProduct.css'

export default class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
            name    : String,
            descr   : String,
            price   : Number,
            weight  : Number,
            active  : Boolean,
            category: String,
            tags    : Array,
            prop    : Object,
            images  : String
        }

        this.handleChange  = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleChange6 = this.handleChange6.bind(this)
        this.handleChange7 = this.handleChange7.bind(this)
        this.handleChange8 = this.handleChange8.bind(this)
        this.handleChange9 = this.handleChange9.bind(this)
        this.handleSubmit  = this.handleSubmit.bind(this)
    }
  
    handleChange(event){
       console.log('lalal')
		this.setState({
            name : event.target.value
		})
    }
    handleChange2(event){
        console.log('lalalall')
		this.setState({
			descr : event.target.value
		})
    }
    handleChange3(event){
        console.log('lalalall')
		this.setState({
			price : event.target.value
		})
    }
    handleChange4(event){
        console.log('lalalall')
		this.setState({
			weight : event.target.value
		})
    }
    handleChange5(event){
        console.log('lalalall')
		this.setState({
			active : event.target.value
		})
    }
    handleChange6(event){
        console.log('lalalall')
		this.setState({
			category : event.target.value
		})
    }
    handleChange7(event){
        let resEvent = event.target.value
        let res = resEvent.split(',')
        console.log(res)
		this.setState({
			tags : res
		})
    }
    handleChange8(event){
        let resEvent = event.target.value
        let result = {}
        let keyValuePairs = resEvent.split(' ')
        keyValuePairs.forEach( keyValue => {
            const [key, value] = keyValue.split(':')
            result[key] = value
        });
        console.log(result)
		this.setState({
			prop : result
		})
    }
    handleChange9(event){
        let resEvent = event.target.value
        let res = resEvent.split(',')
        console.log(res)
		this.setState({
			images : res
		})
    }
	handleSubmit(event){
		event.preventDefault();
		const user = {
            name    : this.state.name,
            descr   : this.state.descr,
            price   : this.state.price,
            weight  : this.state.weight,
            active  : this.state.active,
            category: this.state.category,
            tags    : this.state.tags,
            prop    : this.state.prop,
            images  : this.state.images
		}

		axios.post('/product',{user}).then(res => {
			console.log(res.data);
		})
	}

    render(){
        return(
           <div className='createProduct-wrap'>
               <form  className='createProd-form' onSubmit={this.handleSubmit}>
                   <p>Name product</p>
                        <TextField
                            className="createProd-input"
                            name="name"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange}
                        />
                        <p>Description</p>
                        <TextField
                            className="createProd-input"
                            name="name2"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange2}
                        />
                        <p>Price</p>
                        <TextField
                            className="createProd-input"
                            name="name2"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange3}
                        />
                        <p>Weight</p>
                        <TextField
                            className="createProd-input"
                            name="name4"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange4}
                        />
                        <p>Active</p>
                        <TextField
                            className="createProd-input"
                            name="name5"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange5}
                        />
                        <p>Category</p>
                        <TextField
                            className="createProd-input"
                            name="name6"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange6}
                        />
                        <p>Tags</p>
                        <TextField
                            className="createProd-input"
                            name="name7"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange7}
                        />
                        <p>Properties</p>
                        <TextField
                            className="createProd-input"
                            name="name8"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange8}
                        />
                        <p>Images</p>
                        <TextField
                            className="createProd-input"
                            name="name9"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChange9}
                        />
                    <button type="submit">Add</button>
				</form>
           </div>
        )
    }
    
}



