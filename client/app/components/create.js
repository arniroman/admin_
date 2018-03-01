import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import HomePage from './home'
import '../css/createProduct.css'

class Create extends Component {
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

        this.handleChangeName  = this.handleChangeName.bind(this)
        this.handleChangeDescr = this.handleChangeDescr.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeTags = this.handleChangeTags.bind(this)
        this.handleChangeProps = this.handleChangeProps.bind(this)
        this.handleChangeImages = this.handleChangeImages.bind(this)
        this.handleSubmit  = this.handleSubmit.bind(this)
    }
  
    handleChangeName(event){
       console.log('lalal')
		this.setState({
            name : event.target.value
		})
    }
    handleChangeDescr(event){
        console.log('lalalall')
		this.setState({
			descr : event.target.value
		})
    }
    handleChangePrice(event){
        console.log('lalalall')
		this.setState({
			price : event.target.value
		})
    }
    handleChangeWeight(event){
        console.log('lalalall')
		this.setState({
			weight : event.target.value
		})
    }
    handleChangeStatus(event){
        console.log('lalalall')
		this.setState({
			active : event.target.value
		})
    }
    handleChangeCategory(event){
        console.log('lalalall')
		this.setState({
			category : event.target.value
		})
    }
    handleChangeTags(event){
        let resEvent = event.target.value
        let res = resEvent.split(',')
        console.log(res)
		this.setState({
			tags : res
		})
    }
    handleChangeProps(event){
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
    handleChangeImages(event){
        let resEvent = event.target.value
        let res = resEvent.split(',')
        console.log(res)
		this.setState({
			images : res
		})
    }
	handleSubmit(event){
		event.preventDefault();
		const product = {
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
        console.log('dsassda')
		axios.post('/product',{product}).then(res => {
			console.log(res.data,'created product');
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
                            hintText="name"
                            fullWidth={true}
                            onChange={this.handleChangeName}
                        />
                        <p>Description</p>
                        <TextField
                            className="createProd-input"
                            name="descr"
                            hintText="Description"
                            fullWidth={true}
                            onChange={this.handleChangeDescr}
                        />
                        <p>Price</p>
                        <TextField
                            className="createProd-input"
                            name="price"
                            hintText="Price"
                            fullWidth={true}
                            onChange={this.handleChangePrice}
                        />
                        <p>Weight</p>
                        <TextField
                            className="createProd-input"
                            name="weight"
                            hintText="Weight"
                            fullWidth={true}
                            onChange={this.handleChangeWeight}
                        />
                        <p>Active</p>
                        <TextField
                            className="createProd-input"
                            name="status"
                            hintText="Status"
                            fullWidth={true}
                            onChange={this.handleChangeStatus}
                        />
                        <p>Category</p>
                        <TextField
                            className="createProd-input"
                            name="Category"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChangeCategory}
                        />
                        <p>Tags</p>
                        <TextField
                            className="createProd-input"
                            name="Tags"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChangeTags}
                        />
                        <p>Properties</p>
                        <TextField
                            className="createProd-input"
                            name="props"
                            hintText="Properties"
                            fullWidth={true}
                            onChange={this.handleChangeProps}
                        />
                        <p>Images</p>
                        <TextField
                            className="createProd-input"
                            name="Images"
                            hintText="Full width"
                            fullWidth={true}
                            onChange={this.handleChangeImages}
                        />
                        <button type="submit">Add</button>
				</form>
           </div>
        )
    }
}
export default Create


