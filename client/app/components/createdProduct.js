import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/createProduct.css'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import  '../css/style.css'
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
            product:[],
            term:'',
            isOpened:false,
            id      : '',
            name    : '',
            descr   : '',
            price   : '',
            weight  : '',
            active  : '',
            category: '',
            class   : 'boxEdit'
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
       /* this.handleChangeTags = this.handleChangeTags.bind(this)
        this.handleChangeProps = this.handleChangeProps.bind(this)
        this.handleChangeImages = this.handleChangeImages.bind(this)*/
    }
    componentWillMount(){
		axios.get('/product').then(response => this.setState({product: response.data }));
    }
    handleOpen(){
       
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
   updateProduct(product,event){
        let data = {
            id      : this.state.id,
            name    : this.state.name || product.name,
            descr   : this.state.descr,
            price   : this.state.price,
            weight  : this.state.weight,
            active  : this.state.active,
            category: this.state.category
        }
        console.log(data)
   /* axios.put(`/product`+'/'+id,{data})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })*/
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
		
	render() {
        const product = this.state.product
        //console.log(this.state.product,'product')     
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
                    <div className key ={key}>
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