import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {updateProducts} from '../../actions/updateProduct'
import  '../../css/style.css'

class ProductEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            name    : "",
            descr   : "",
            price   : "",
            weight  : "",
            active  : true,
            category: "",
            tags    : [],
            props   : {},
            images  : "",
        }
    }

    handleChangeById = (event) => {
        console.log(event.currentTarget.id)
        this.setState({[event.currentTarget.id]: event.target.value})
     }
 
    handleChangeTags = (event) => {
        let resEvent = event.target.value
        let res = resEvent.split(',')
		this.setState({
			tags : res
		})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let product = this.props.productWichUpdate
        let newObj = {
            _id     : product._id,
            name    : this.state.name     || product.name,
            descr   : this.state.descr    || product.descr,
            price   : this.state.price    || product.price,
            weight  : this.state.weight   || product.weight,
            active  : this.state.active   || product.active,
            category: this.state.category || product.category,
            props   : product.props,
            images  : this.state.images   || product.images
        }
        //console.log(newObj)
        this.props.updateProducts(product._id,newObj)
    }


    render(){
        console.log(this.props.productWichUpdate)
        let product = this.props.productWichUpdate
        return(
            <div>
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
                            {Object.keys(product.props).map((val,key) => 
                            <div key={key}>
                                <p>{val}</p>
                                <TextField 
                                    className="createProd-inputProp"
                                    type="text" 
                                    name="text"
                                    hintText="new props..."
                                   // onChange={(event)=>this.handleChangeProps(item.name, event)}
                                    />
                            </div>    
                            )}
                            <p className="titleName-props">Images</p>
                            <TextField
                                className="createProd-input"
                                id="images"
                                name="Images"
                                hintText="Full width"
                                fullWidth={true}
                                onChange = {this.handleChangeById}
                            />
                            <button>Update</button>
               </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productWichUpdate: state.productWichUpdate
    }
}

export default connect(mapStateToProps,{updateProducts})(ProductEdit)