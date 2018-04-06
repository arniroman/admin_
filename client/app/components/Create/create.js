import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'
import '../../css/create.css'
import { connect } from 'react-redux'
import { loadDataProperties } from '../../actions/getProperties'
import { postProduct } from '../../actions/createProduct'

class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
            open          : false,
            name          : "",
            descr         : "",
            originalPrice : "",
            price         : "",
            weight        : "",
            active        : false,
            available     : false,
            category      : "",
            tags          : [],
            props         : {},
            images        : ""
        }
    }

    handleToggle = () => {
        this.setState({open: !this.state.open})
    }
   
    componentWillMount() {
        this.props.loadDataProperties()
     }

    handleChangeById = (event) => {
        this.setState({[event.currentTarget.id]: event.target.value})
     }

    handleChangeStatus = () => {
        console.log(this.state.active)
		this.setState({
			active : !this.state.active
        })
    }

    handleUnavilable = () => {
        console.log(this.state.available)
		this.setState({
			available : !this.state.available
        })
    }
 
    handleChangeTags = (event) => {
        let resEvent = event.target.value
        let res = resEvent.split(',')
		this.setState({
			tags : res
		})
    }

    handleChangeProps = (chosenKey, event) => {
        let chosenValue = event.target.name
        let filteredItems = this.state.filter
        let obj = this.state.props
        obj[chosenKey] = event.target.value
        console.log(obj)
       
        this.setState({
                props: obj
            })
    }

	handleSubmit = (event) => {
        event.preventDefault();
		const product = {
            name          : this.state.name,
            descr         : this.state.descr,
            price         : this.state.price,
            originalPrice : this.state.price,
            weight        : this.state.weight,
            active        : this.state.active,
            available     : this.state.available,
            category      : this.state.category,
            tags          : this.state.tags,
            props         : this.state.props,
            images        : this.state.images
		}
        this.props.postProduct(product)
    }
    
    render(){
        /** filter props for category **/
        let properties
        if(this.props.properties){
            properties  = this.props.properties
        }
        const category = this.state.category
        let renderProps = []
        if(properties){
            properties.forEach(el=>{
            if(el.category === category){
                renderProps.push(el)
            }
        })
        }
        return(
        <div>
             <header className="headerEdit create">
                <p>Create product</p>
                <i class="fas fa-wrench hederEdit-icon"></i>
            </header>
           <div className='createProduct-wrap'>
               <form  className='createProd-form' onSubmit={this.handleSubmit}>
                   <p className="titleName-props">Name product</p>
                        <TextField
                            className="createProd-input"
                            id = "name"
                            name="name"
                            hintText="name"
                            fullWidth={true}
                            onChange = {this.handleChangeById}
                        />
                        <p className="titleName-props">Description</p>
                            <TextField
                                className="createProd-input"
                                id="descr"
                                name="descr"
                                hintText="Description"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
                            />
                        <p className="titleName-props">Price</p>
                            <TextField
                                className="createProd-input"
                                id="price"
                                name="price"
                                hintText="Price"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
                            />
                        <p className="titleName-props">Weight</p>
                            <TextField
                                className="createProd-input"
                                id="weight"
                                name="weight"
                                hintText="Weight"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
                            />
                        <p className="titleName-props">Active</p>
                            <div className ="toggle-status">
                                <div >
                                <Toggle
                                onClick={this.handleChangeStatus}
                                />
                                </div>
                        </div>
                        <p className="titleName-props">Available</p>
                            <div className ="toggle-status">
                                <div >
                                <Toggle
                                onClick={this.handleUnavilable}
                                />
                                </div>
                        </div>
                        <p className="titleName-props">Category</p>
                            <TextField
                                className="createProd-input"
                                id="category"
                                name="Category"
                                hintText="Full width"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
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
                                <Drawer width={400} open={this.state.open}>
                                    <MenuItem >
                                        <p className="properties-title">Properties</p>
                                    </MenuItem>
                                    <MenuItem>
                                    {renderProps.map((item,key)=>
                                        <div className="propsWrap-create" key={key}>
                                        <span className="propsWrap-name" >{item.name}:</span>
                                        <TextField 
                                        className="createProd-inputProp"
                                            type="text" 
                                            name="text"
                                            hintText="new props..."
                                            onChange={(event)=>this.handleChangeProps(item.name, event)}/>
                                        </div>
                                    )}
                                    </MenuItem>
                                </Drawer>
                            </div>
                             <p className="titleName-props">Images</p>
                                <TextField
                                    className="createProd-input"
                                    id="images"
                                    name="Images"
                                    hintText="Full width"
                                    fullWidth={true}
                                    onChange = {this.handleChangeById}
                                />
                                <Link to='/'>
                                    <RaisedButton 
                                        label="Home page" 
                                        secondary={true} 
                                    />
                                </Link>
                                <RaisedButton 
                                    className="create-btn" 
                                    type="submit" 
                                    label="Create Product" 
                                    primary={true}/>
				</form>
           </div>
        </div>   
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        properties  : state.properties,
        postData    : state.postDatas
    }
}
export default connect (mapStateToProps,{loadDataProperties,postProduct})(Create)


