import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/createProduct.css'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Edit from './edit'
import  '../css/style.css'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { loadDataProduct } from '../actions/getProduct'
import { handlePaginationLists } from '../actions/paginationList'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'


class CreatedProduct extends Component {
	constructor(props){
		super(props)
		this.state = {
            open             : false,
            props            : {},
            sendProduct      : {},
            term             : '',
            isOpened         : false,
            id               : '',
            name             : '',
            descr            : '',
            price            : '',
            weight           : '',
            active           : '',
            category         : '',
            images           : '',
            editBtn          : false,
            viewElem         : '',
            viewFlag         : false,
            item             : {},
        } 
    }

    componentWillMount = () => {
        this.props.loadDataProduct()
    }

    productCurrent = (product,event) => {
         console.log(this.state.viewFlag)
       this.setState({
           viewElem: product,
           viewFlag: !this.state.viewFlag
       })  
    }

    searchHeandler = (event) => {
        this.setState({
            term: event.target.value
        })
    }    
    
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeDescr = (event) => {
        this.setState({
            descr: event.target.value   
            })
    }

    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleChangeWeight = (event) => {
        this.setState({
            weight: event.target.value
        })
    }

    handleChangeStatus = (event) => {
        this.setState({
            active: event.target.value
        })
    }

    handleChangeCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    
    handleChangeProps = (chosenKey, event) => {
        let obj = this.state.props
        let chosenValue = event.target.name
        obj[chosenKey]  = event.target.value
        this.setState({
            props: obj
        })
    }

    handleChangeImages = (event) => {
        this.setState({
            images: event.target.value
        })
    }

   updateProduct = () => {
       let product = this.state.item
       let productBox = this.state.productAllProps.product
       console.log(productBox)
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
        console.log(data,'data')
         axios.put(`/product`+'/'+product._id,data)
            .then(res => {
                productBox.forEach((el,index)=>{
                    if(el._id == data._id){
                        productBox.splice(index,1,data)
                    }
                })
                this.setState({
                    productCurrent: productBox
                })
                console.log(res)
                console.log(res.data)
            })
    }
    
    deleteProduct = (id,event) => {
     let newState = this.state.productAllProps.product  
      axios.delete(`/product`+'/'+id)
        .then(res => {
            newState.forEach((el,index)=>{
            if(el._id == id){
                console.log(el)
                newState.splice(index,1)
             }
           }) 
            this.setState({
                productCurrent: newState
            })
                console.log(res)
                console.log(res.data)
           }) 
  }

    handleToggle = (product,event) =>{
        this.setState({
            item: product
        })
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

    handlePaginationList = (event) => {      
        /*let id = this.state.currentNum
        axios.get(`/product`+'/'+event.target.id)
                .then(response => this.setState({
                                  productAllProps : response.data,
                                  productCurrent  :response.data.product 
                                }))*/
      this.props.handlePaginationLists(event.target.id)
      //console.log(this.props.paginateList,'list')
    }

	render() {
        console.log(this.props,'list')
        const pages = []
        if(this.props.allProduct){
            console.log(this.props.allProduct.pages)
            for(let i = 0 ;i < this.props.allProduct.pages ;i++){
                  pages.push(i)
              }
        } 
    
		return (
            <div className="Wrapper">
                {this.state.viewFlag && <Edit data={this.state.viewElem} />}
                <div className="goodsCatalog">
                    <div className="storeCatalog">
                        <div className="storeCatalog-box">
                            <span className="storeCatalog-title">Store catalog</span>
                            <i class="fas fa-cart-arrow-down"></i>
                        </div>
                        <div className="countGoods-box">
                            <div className="countGoods">count goods 
                                 <span className="countGoods-length">count</span>
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
                    <div className="contentBtn setting">import CSV
                        <i class="fas fa-download icon-setting"></i>
                    </div>
                    <div className="contentBtn setting ">export CSV
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
                     <Table >
                        <TableHeader >
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
                    {this.props.allProduct && this.props.allProduct.product.filter(searchingFor(this.state.term)).map((item,key) =>
                    <div className key = {key}>
                     <Drawer open={this.state.open} width={700}>
                        <div className="dawerList">
                            <div>name </div>
                            <TextField
                                hintText="name default" 
                                className="searchInput"
                                onChange = {this.handleChangeName}
                            />
                        </div>
                        <div className="dawerList">
                            <div>descr</div>
                            <TextField
                            hintText="description default" 
                            className="searchInput"
                            onChange = {this.handleChangeDescr}
                            />
                        </div>
                        <div className="dawerList">
                            <div>price </div>
                            <TextField
                                hintText="price default" 
                                className="searchInput"
                                onChange = {this.handleChangePrice}
                            />
                        </div>
                        <div className="dawerList">
                            <div>weight </div>
                            <TextField
                                hintText="weight default" 
                                className="searchInput"
                                onChange = {this.handleChangeWeight}
                            />
                        </div>
                        <div className="dawerList">
                            <div>active </div>
                            <TextField
                                hintText="active default" 
                                className="searchInput"
                                onChange = {this.handleChangeStatus}
                            />
                        </div>
                        <div className="dawerList">
                            <div>category </div>
                            <TextField
                                hintText="category default" 
                                className="searchInput"
                                onChange = {this.handleChangeCategory}
                            />
                        </div>
                        <div className="dawerList">
                            <div>images </div>
                            <TextField
                                hintText="images default" 
                                className="searchInput"
                                onChange = {this.handleChangeImages}
                            />
                        </div>
                            <div className="dawerList-prop">Properties</div>
                        <div>
                            {Object.keys(item.props).map((val,key)=>
                                <div className="dawerList" key={key}>
                                <div>{val}</div>
                                    <TextField
                                        hintText="property default"
                                        onChange={(event)=>{this.handleChangeProps(val,event)}}
                                        className="searchInput"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="dawerList-edit">
                            <button className="confirmEdit" onClick = {this.updateProduct}>
                                    Confirm       
                            </button>
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
                                    <span className="viewBtn" onClick={(event)=>this.productCurrent(item,event)}>
                                        <i class="fas fa-eye view-icon"></i>
                                    </span>
                                    <span label="edit" onClick={(event)=>this.handleToggle(item,event)} className="editButton">
                                        <i class="fas fa-pencil-alt editIcon"></i>
                                    </span>
                                    <span className="deleteBtn" onClick={(event)=>this.deleteProduct(item._id,event)} className="deleteBtn">
                                        <i class="fas fa-trash deleteIcon"></i>
                                    </span>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </div>
                    )}
                </div>
                <div className = "paginationBox">
                    {pages&&pages.map((val,key)=>  
                        <button onClick={this.handlePaginationList.bind(this)} key={key} id={val}>{val}
                    </button>)}
                </div>
			</div>
		)
	}
}
//-- filtring product  by tags and name --//
function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || x.tags.includes(term) 
    }  
}

const mapStateToProps = (state)=>{
    return {
        allProduct : state.getAllProducts.payload,
    }
}

export default connect(mapStateToProps,{loadDataProduct,handlePaginationLists})(CreatedProduct)