import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/createProduct.css'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Edit from './edit'
import  '../css/style.css'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


class CreatedProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
            open       : false,
            props      : {},
            sendProduct: {},
            product    : [],
            term       : '',
            isOpened   : false,
            id         : '',
            name       : '',
            descr      : '',
            price      : '',
            weight     : '',
            active     : '',
            category   : '',
            images     : '',
            editBtn    : false,
        } 
        this.updateProduct = this.updateProduct.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.searchHeandler = this.searchHeandler.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleChangeName  = this.handleChangeName.bind(this)
        this.handleChangeDescr = this.handleChangeDescr.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
       // this.handleChangeTags = this.handleChangeTags.bind(this)
        this.handleChangeProps = this.handleChangeProps.bind(this)
        this.handleChangeImages = this.handleChangeImages.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    componentWillMount(){
		axios.get('/product').then(response => this.setState({product: response.data }));
    }

    searchHeandler(event){
        this.setState({
            term: event.target.value
        })
    }

    handleOpen(id,event){
        this.setState({
            class:'classActive'
         })
    }    
    
    handleChangeName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleChangeDescr(event){
        this.setState({
            descr: event.target.value   
            })
    }

    handleChangePrice(event){
        this.setState({
            price: event.target.value
        })
    }

    handleChangeWeight(event){
        this.setState({
            weight: event.target.value
        })
    }

    handleChangeStatus(event){
        this.setState({
            active: event.target.value
        })
    }

    handleChangeCategory(event){
        this.setState({
            category: event.target.value
        })
    }
    
    handleChangeProps(chosenKey, event){
        let obj = this.state.props
        let chosenValue = event.target.name
        obj[chosenKey] = event.target.value
        this.setState({
            props: obj
        })
    }

    handleChangeImages(event){
        this.setState({
            images: this.state.images
        })
    }

   updateProduct(product,event){
       let productBox= this.state.product
       let flag 
       let property = product.props
       for(let prop in property){
           (this.state.props.hasOwnProperty(prop)) ? flag = true
                                                   : flag = false
        }
       if(flag){
           property = this.state.props
       }
       
       let data = {
            id      : product._id,
            name    : this.state.name     || product.name,
            descr   : this.state.descr    || product.descr,
            price   : this.state.price    || product.price,
            weight  : this.state.weight   || product.weight,
            active  : this.state.active   || product.active,
            category: this.state.category || product.category,
            props   : property,
            images  : this.state.images   || product.images
        }

         axios.put(`/product`+'/'+product._id,data)
            .then(res => {
                productBox.forEach((el,index)=>{
                    if(el._id == data.id){
                        productBox.splice(index,1,data)
                    }
                })
                this.setState({
                    product: productBox
                })
                console.log(res);
                console.log(res.data);
            })
    }
    
    deleteProduct(id,event){
     let newState = this.state.product   
      axios.delete(`/product`+'/'+id)
        .then(res => {
            newState.forEach((el,index)=>{
            if(el._id == id){
                console.log(el)
                newState.splice(index,1)
             }
           }) 
            this.setState({
                product: newState
            })
                console.log(res);
                console.log(res.data);
           }) 
  }

  handleToggle () {
      let edit = this.state.editBtn
      
      if (edit == false){
          edit = true
        }
      else{
          edit = false
      }  
          
        
      this.setState(
        {
          open   : !this.state.open, 
          editBtn: edit
        }
    )}

	render() {
        const product = this.state.product
		return (
			<div className="Wrapper">
                <div className="goodsCatalog">
                    <div className="storeCatalog">
                        <div className="storeCatalog-box">
                            <span className="storeCatalog-title">Store catalog</span>
                            <i class="fas fa-cart-arrow-down"></i>
                        </div>
                        <div className="countGoods-box">
                            <div className="countGoods">count goods 
                                <span className="countGoods-length">{product.length}</span>
                            </div>
                        </div>
                    </div>
				</div>
                <div className="contentCreate">
                <Link to='/create'>
                    <div className="contentBtn setting">Add goods 
                        <i class="fas fa-plus-circle icon-setting"></i>
                    </div>
                </Link>
                    <div className="contentBtn setting">import SVG
                        <i class="fas fa-download icon-setting"></i>
                    </div>
                    <div className="contentBtn setting ">export SVG
                        <i class="fas fa-upload icon-setting"></i>
                    </div>
                    <div className="contentBtn">
                        <label>
                            <TextField
                            type="search"
                            hintText="Search..."
                            onChange={this.searchHeandler}
                            className="searchInput"
                            />
                            <i class="fas fa-search searchInput"></i>
                        </label>
                    </div>
                </div>
                 <div className="productList-box" >
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>№</TableHeaderColumn>
                                <TableHeaderColumn>Category</TableHeaderColumn>
                                <TableHeaderColumn>Image</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Price</TableHeaderColumn>
                                <TableHeaderColumn>Actions</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                       </Table> 
                    {product.filter(searchingFor(this.state.term)).map((item,key) =>
                    <div className key = {key}>
                     <Drawer open={this.state.open} width={500}>
                     <div className="DawerList">
                         <div>name: </div>
                        <TextField
                            hintText="name" 
                            className="searchInput"
                            onChange = {this.handleChangeName}
                        />
                    </div>
                    <div>
                        <p>descr</p>
                        <TextField
                        hintText="description" 
                        className="searchInput"
                        onChange = {this.handleChangeDescr}
                        />
                    </div>
                    <div>
                        <div>price: </div>
                        <TextField
                            hintText="price" 
                            className="searchInput"
                            onChange = {this.handleChangePrice}
                        />
                    </div>
                    <div>
                        <div>weight: </div>
                        <TextField
                            hintText="weight" 
                            className="searchInput"
                            onChange = {this.handleChangeWeight}
                        />
                    </div>
                    <div>
                        <div>active: </div>
                        <TextField
                            hintText="active" 
                            className="searchInput"
                            onChange = {this.handleChangeStatus}
                        />
                    </div>
                    <div>
                        <div>category: </div>
                        <TextField
                            hintText="category" 
                            className="searchInput"
                            onChange = {this.handleChangeCategory}
                        />
                    </div>
                    <div>
                        <div>images: </div>
                        <TextField
                            hintText="images" 
                            className="searchInput"
                            onChange = {this.handleChangeImages}
                        />
                    </div>
                        <div>Properties</div>
                    <div>
                        {Object.keys(item.props).map((val,key)=>
                            <div key={key}>
                            <div>{val}</div>
                                <TextField
                                    hintText="property default"
                                    onChange={(event)=>{this.handleChangeProps(val,event)}}
                                    className="searchInput"
                                />
                            </div>
                        )}
                     </div>
                    </Drawer>
                   <Table>
                        <TableBody>
                            <TableRow>
                            <TableRowColumn>{key}</TableRowColumn>
                                <TableRowColumn>{item.category}</TableRowColumn>
                                <TableRowColumn>
                                        <div className="imageBox-table">
                                            <img className="imageTable" src={item.images} />
                                        </div>
                                </TableRowColumn>
                                <TableRowColumn>{item.name}</TableRowColumn>
                                <TableRowColumn>{item.price}$</TableRowColumn>
                                <TableRowColumn>
                                    <button className="deleteBtn" onClick={(event)=>this.deleteProduct(item._id,event)} className="deleteBtn">
                                            <i class="fas fa-trash deleteIcon"></i>
                                    </button>
                                    <RaisedButton
                                    label="edit"
                                    onClick={this.handleToggle}
                                    />
                                    {this.state.editBtn && <button  onClick = {(event)=>this.updateProduct(item,event)}>edit</button>}
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </div>
                    )}
                </div>
			</div>
		);
	}
}

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || x.tags.includes(term) 
    }  
}

export default CreatedProduct;