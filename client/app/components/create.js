import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import HomePage from './home'

import '../css/createProduct.css'
import index from 'material-ui/TextField';

 
class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
            open    : false,
            name    : "",
            descr   : "",
            price   : "",
            weight  : "",
            active  : true,
            category: "",
            tags    : [],
            prop    : [],
            //filter  : new Map(),
            props   : {},
            images  : "",
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
    handleToggle = () => this.setState({open: !this.state.open});
    componentWillMount(){
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
    handleChangeStatus(){
		this.setState({
			active : !this.state.active
        })
        console.log(this.state.active)
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
       // let isChecked = event.target.checked
        let chosenValue = event.target.name
        let filteredItems = this.state.filter
        let obj = this.state.props
        console.log(event.target.value)
        obj[chosenKey] = event.target.value
        console.log(obj)
        /*     
        if(isChecked){
            obj[chosenKey] = chosenValue
        }
        else{
            delete obj[chosenKey]
        }*/
       this.setState({
            props: obj
        })
        // Map filtering
       /* if(!filteredItems.has(chosenKey)){
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
           let obj = Array.from(filteredItems).reduce((obj, [key, value]) => (
            Object.assign(obj, { [key]: value }) 
          ), {});

          console.log(obj,'obj')

        this.setState({
            result : obj
        })*/     
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
            props   : this.state.props,
            images  : this.state.images
		}
        console.log(product)
		axios.post('/product',{product}).then(res => {
			console.log(res.data,'created product');
		})
    }
    


    render(){
        const properties = this.state.prop
        const category = this.state.category
        let res = []
        properties.forEach(el=>{
            if(el.category === category){
                res.push(el)
            }
        })
        let blockProps = res.map((item,key)=>
            <div key={key}>
            {item.name}:
            <input 
            className="createProd-inputProp"
                type="text" 
                onChange={(event)=>this.handleChangeProps(item.name, event)}/>
            </div>
        )
        return(
           <div className='createProduct-wrap'>
               <form  className='createProd-form' onSubmit={this.handleSubmit}>
                   <p className="titleName-props">Name product</p>
                        <TextField
                            className="createProd-input"
                            name="name"
                            hintText="name"
                            fullWidth={true}
                            onChange={this.handleChangeName}
                        />
                        <p className="titleName-props">Description</p>
                            <TextField
                                className="createProd-input"
                                name="descr"
                                hintText="Description"
                                fullWidth={true}
                                onChange={this.handleChangeDescr}
                            />
                        <p className="titleName-props">Price</p>
                            <TextField
                                className="createProd-input"
                                name="price"
                                hintText="Price"
                                fullWidth={true}
                                onChange={this.handleChangePrice}
                            />
                        <p className="titleName-props">Weight</p>
                            <TextField
                                className="createProd-input"
                                name="weight"
                                hintText="Weight"
                                fullWidth={true}
                                onChange={this.handleChangeWeight}
                            />
                        <p className="titleName-props">Active</p>
                            <div className ="toggle-status">
                                <div >
                                <Toggle
                               
                                onClick={this.handleChangeStatus}
                                />
                                </div>
                        </div>
                        <p className="titleName-props">Category</p>
                            <TextField
                                className="createProd-input"
                                name="Category"
                                hintText="Full width"
                                fullWidth={true}
                                onChange={this.handleChangeCategory}
                            />
                        <p className="titleName-props">Tags</p>
                            <TextField
                                className="createProd-input"
                                name="Tags"
                                hintText="Full width"
                                fullWidth={true}
                                onChange={this.handleChangeTags}
                            />
                        <p className="titleName-props">Properties</p>
                            <div>
                                <RaisedButton
                                label="Chose"
                                onClick={this.handleToggle}
                                className="drawer-box"
                                />
                                <Drawer open={this.state.open}>
                                    <MenuItem >
                                        <p className="properties-title">Properties</p>
                                    </MenuItem>
                                <MenuItem>{blockProps}</MenuItem>
                                </Drawer>
                            </div>
                        <p className="titleName-props">Images</p>
                            <TextField
                                className="createProd-input"
                                name="Images"
                                hintText="Full width"
                                fullWidth={true}
                                onChange={this.handleChangeImages}
                            />
                        <RaisedButton 
                        className="create-btn" 
                        type="submit" 
                        label="Create" 
                        primary={true}/>
				</form>
           </div>
        )
    }
}

export default Create


