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
                   <p>name</p>
                <TextField
                    className="createProd-input"
                    name="name"
                    hintText="Full width"
                    fullWidth={true}
                    onChange={this.handleChange}
                />
                <div>
                   <p>descr</p>
					<input type="text" name="name1" onChange={this.handleChange2} />
                </div>
                <div>
                   <p>price</p>
					<input type="text" name="name2" onChange={this.handleChange3} />
                </div>
                <div>
                   <p>weight</p>
					<input type="text" name="name3" onChange={this.handleChange4} />
                </div>
                <div>
                   <p>active</p>
					<input type="text" name="name4" onChange={this.handleChange5} />
                </div>
                <div>
                   <p>category</p>
					<input type="text" name="name5" onChange={this.handleChange6} />
                </div>
                <div>
                   <p>tags</p>
					<input type="text" name="name5" onChange={this.handleChange7} />
                </div>
                <div>
                   <p>props</p>
					<input type="text" name="name5" onChange={this.handleChange8} />
                </div>
                <div>
                   <p>images</p>
					<input type="text" name="name5" onChange={this.handleChange9} />
                </div>
                <button type="submit">Add</button>
				</form>
           </div>
        )
    }
    
}



