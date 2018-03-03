import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import HomePage from './home'
import OpenDower from './openDower'
import '../css/createProduct.css'
import index from 'material-ui/TextField';

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
            prop    : [],
            filter  : new Map(),
            images  : String,
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
    componentWillMount(){
		//axios.get('/product').then(response => this.setState({product: response.data }));
		axios.get('/properties').then(response => this.setState({prop: response.data }));
    }
    
  
    handleChangeName(event){
		this.setState({
            name : event.target.value
		})
    }
    handleChangeDescr(event){
		this.setState({
			descr : event.target.value
		})
    }
    handleChangePrice(event){
		this.setState({
			price : event.target.value
		})
    }
    handleChangeWeight(event){
		this.setState({
			weight : event.target.value
		})
    }
    handleChangeStatus(event){
		this.setState({
			active : event.target.value
		})
    }
    handleChangeCategory(event){
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

    handleChangeProps(chosenKey, event){
        let isChecked = event.target.checked
        let chosenValue = event.target.name
        let filteredItems = this.state.filter
        if(!filteredItems.has(chosenKey)){
            filteredItems.set(chosenKey , new Set([chosenValue]))   
        }else{
            filteredItems.forEach((value, key, map)=>{
                if(key === chosenKey){
                    if(isChecked) value.add(chosenValue)
                    else value.delete(chosenValue)
                }
                if(value.size == 0){
                    filteredItems.delete(key)
                }
            })
        }
        
        console.log(filteredItems)
        this.setState({
            filter : filteredItems
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
         let obj = Object.enties
          console.log(obj,'object')
		const product = {
            name    : this.state.name,
            descr   : this.state.descr,
            price   : this.state.price,
            weight  : this.state.weight,
            active  : this.state.active,
            category: this.state.category,
            tags    : this.state.tags,
            //prop    : this.state.prop,
           // filter  : this.state.filter,
            images  : this.state.images
		}
        console.log('dsassda')
		axios.post('/product',{product}).then(res => {
			console.log(res.data,'created product');
		})
    }
    


    render(){
        const properties = this.state.prop
        let blockProps = properties.map(item=>
                <h1>{item.name} {item.possibleValues.map(val => 
                    <label> {val}
                        <input 
                            type="checkbox" 
                            name={val}
                    
                            onChange={(event)=>this.handleChangeProps(item.name, event)}/>
                    </label>)}
                </h1>
        )

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
                      
                          {blockProps}
                       
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


