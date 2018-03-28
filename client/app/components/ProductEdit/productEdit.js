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
            name        : "",
            descr       : "",
            price       : "",
            weight      : "",
            active      : true,
            category    : "",
            tags        : [],
            props       : {},
            images      : "",
            obj        : {},
            nameValue   : "",
            product     : {}
        }
    }

    componentWillMount(){
        let products = this.props.productWichUpdate
        if(products){
            this.setState({
                product     : products,
                name        : products.name,
                descr       : products.descr,
                price       : products.price,
                weight      : products.weight,
                category    : products.category,
                tags        : products.tags,
                props       : products.props,
                images      : products.images
           })
        }
    }   

     handleChangeById = (event) => {
        const el = event.target
       console.log(el.value)
        this.setState({[el.id]: el.value});
     }
 
    handleChangeTags = (event) => {
        let resEvent = event.target.value
        let res = resEvent.split(',')
		this.setState({
			tags : res
		})
    }

    renderObject = () => {
        return Object.keys(this.state.props).map((obj, i) => {
        return (
            <div className='wrapItem' key={i}>
               <p className="titleName-propsEdit-P">{obj}</p>
                 <TextField 
                    type="text" 
                    name="text"
                    value ={this.state.props[obj]}
                    onChange={(event)=>this.handleChangeProps(obj, event)}
                    />
            </div> 
        )
    })
    }

    handleChangeProps = (chosenKey, event) => {
        let prop = this.state.props
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
        let product = this.state.product
        let property = this.state.props
        let newObj = {
            _id       : product._id,
            name      : this.state.name     || product.name,
            descr     : this.state.descr    || product.descr,
            price     : this.state.price    || product.price,
            weight    : this.state.weight   || product.weight,
            active    : this.state.active   || product.active,
            category  : this.state.category || product.category,
            props     : property,
            images    : this.state.images   || product.images
        }
        this.props.updateProducts(product._id,newObj)
    }

    render(){
        return(
            <div>
            <header className="headerEdit">
                <p>Product Setting</p>
                <i class="fas fa-wrench hederEdit-icon"></i>
            </header>
            <div className="editContainer">
                <div className='imageBoxEdit'>
                    <img className= 'productImg' src = {this.state.images} />
                </div>
                    <div className="editForm-wrapper">
                        <form  className='createProd-formEdit' onSubmit={this.handleSubmit}>
                            <div className='wrapItem'>
                                <p className="titleName-propsEdit">Name product</p>
                                        <TextField
                                         value={this.state.name}
                                         id = "name"
                                         name="name"
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
                                        value={this.state.descr}
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
                                        value={this.state.price}
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
                                        value={this.state.weight}
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
                                        value={this.state.category}
                                        fullWidth={true}
                                        onChange = {this.handleChangeById}
                                    />
                            </div>
                            <div className='wrapItem'>
                                <p className="titleName-propsEditTags">Tags</p>
                                    <TextField
                                       // className="createProd-inputEdit"
                                        name="Tags"
                                        value={this.state.tags}
                                        fullWidth={true}
                                        onChange={this.handleChangeTags}
                                    />
                            </div>
                                {this.renderObject()} 
                            <div className='wrapItem edit-img'>
                                <p className="titleName-propsEdit ">Images</p>
                                    <TextField
                                        //className="createProd-inputEdit"
                                        id="images"
                                        name="Images"
                                        value={this.state.images}
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