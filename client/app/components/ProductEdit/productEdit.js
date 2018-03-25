import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {updateProducts} from '../../actions/updateProduct'
import '../../css/productEdit.css'
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
            obj     : {}
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

    handleChangeProps = (chosenKey, event) => {
        let prop = this.props.productWichUpdate.props
        for (let key in prop){
            if(chosenKey == key){
                prop[key] = event.target.value
            }
        }
       this.setState({
         obj: prop
       })  
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let product = this.props.productWichUpdate
        let flag 
        let property = this.props.productWichUpdate.props
        for(let prop in property){
           (this.state.props.hasOwnProperty(prop)) ? flag = true
                                                   : flag = false
        }
       if(flag){
           property = this.state.obj
       }
        let newObj = {
            _id     : product._id,
            name    : this.state.name     || product.name,
            descr   : this.state.descr    || product.descr,
            price   : this.state.price    || product.price,
            weight  : this.state.weight   || product.weight,
            active  : this.state.active   || product.active,
            category: this.state.category || product.category,
            props   : property,
            images  : this.state.images   || product.images
        }
        this.props.updateProducts(product._id,newObj)
    }

    render(){
        let product = this.props.productWichUpdate
        return(
            <div>
            <header className="headerEdit">
                <p>Product Setting</p>
                <i class="fas fa-wrench hederEdit-icon"></i>
            </header>
            <div className="editContainer">
                <div className='imageBoxEdit'>
                    <img className= 'productImg' src = {product.images} />
                </div>
                    <div className="editForm-wrapper">
                        <form  className='createProd-formEdit' onSubmit={this.handleSubmit}>
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Name product</p>
                                    <TextField
                                        //  className="createProd-inputEdit"
                                        id = "name"
                                        name="name"
                                        hintText="name"
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                        />
                            </div>
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Description</p>
                                    <TextField
                                       // className="createProd-inputEdit"
                                        id="descr"
                                        name="descr"
                                        hintText="Description"
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                    
                                    />
                            </div>
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Price</p>
                                    <TextField
                                      //  className="createProd-inputEdit"
                                        id="price"
                                        name="price"
                                        hintText="Price"
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                    />
                            </div>
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Weight</p>
                                    <TextField
                                       // className="createProd-inputEdit"
                                        id="weight"
                                        name="weight"
                                        hintText="Weight"
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                    />
                            </div>
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Category</p>
                                    <TextField
                                       // className="createProd-inputEdit"
                                        id="category"
                                        name="Category"
                                        hintText="Full width"
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                    />
                            </div>
                            <div className='wrapItem'>
                                <p className="titleName-propsEditTags">Tags</p>
                                    <TextField
                                       // className="createProd-inputEdit"
                                        name="Tags"
                                        hintText="Full width"
                                        fullWidth={true}
                                        onChange={this.handleChangeTags}
                                    />
                            </div>
                                {Object.keys(product.props).map((val,key) => 
                            <div  key={key} className='wrapItem'>
                                <p className="titleName-propsEdit-P">{val}</p>
                                    <TextField 
                                        //className="ccreateProd-inputEdit"
                                        type="text" 
                                        name="text"
                                        hintText="new props..."
                                        onChange={(event)=>this.handleChangeProps(val, event)}
                                    />
                            </div>    
                                    )}
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Images</p>
                                    <TextField
                                        //className="createProd-inputEdit"
                                        id="images"
                                        name="Images"
                                        hintText="Full width"
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                    />
                            </div>
                                    <button className="editSubmit">
                                        <i className = "fas fa-pencil-alt editSubmit-icon"></i>
                                    </button>
                    </form>
               </div>
            </div>
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