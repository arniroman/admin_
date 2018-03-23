import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import  '../../css/createProduct.css'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { loadDataProduct } from '../../actions/getProduct'
import { handlePaginationLists } from '../../actions/paginationList'
import ListProduct from '../../components/ListCreatedProduct/listProduct'
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
            props : {},
            item  : {},
            term: ''
        } 
    }

    componentWillMount = () => {
        this.props.loadDataProduct()
    }
   
    searchHeandler = (event) => {
        this.setState({
            term: event.target.value
        })
    }    

   updateProduct = () => {
       let product = this.state.item
       console.log(product,'product')
     /*  let productBox = this.state.productAllProps.product
       console.log(productBox)
       let flag 
       let property = product.props
       for(let prop in property){
           (this.state.props.hasOwnProperty(prop)) ? flag = true
                                                   : flag = false
        }
       if(flag){
           property = this.state.props
       }*/
       
       let data = {
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
        console.log(data,'data')

        this.props.updateProducts(product._id,data)
    }
    
    handlePaginationList = (event) => {      
      this.props.handlePaginationLists(event.target.id)
    }

	render() {
        /*--- Pages for pagination list ---*/
        const pages = []
        if(this.props.allProduct){
            for(let i = 0; i < this.props.allProduct.pages; i++){
                  pages.push(i)
              }
        }
        /*--- ---*/ 
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
                        <TableHeader displaySelectAll={false}
                                     adjustForCheckbox={false}>
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
                 </div> 
                 <ListProduct term={this.state.term} />
                <div className = "paginationBox">
                    {pages&&pages.map((val,key)=>  
                        <button 
                        onClick={this.handlePaginationList.bind(this)} key={key} id={val}>{val}
                        </button>)}
                </div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
    return {
        allProduct   : state.getAllProducts,
    }
}

export default connect(mapStateToProps,{loadDataProduct,handlePaginationLists})(CreatedProduct)