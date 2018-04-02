import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import  '../../css/createProduct.css'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { loadDataProduct } from '../../actions/getProduct'
import { handlePaginationLists } from '../../actions/paginationList'
import { ipmortToCSV } from '../../actions/ipmortToCSV'
import { compareData } from '../../actions/compareData'
import ListProduct from '../../components/ListCreatedProduct/listProduct'
import Pagination  from 'material-ui-pagination-react'
import FlatButton from 'material-ui/FlatButton'
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
            id          : '',
            data        : {},
            classClosed : 'open',
            flag        : ''
        } 
    }

    componentWillMount = () => {
        this.props.loadDataProduct()
        this.props.compareData()
    }
    
    ipmortCSV = (event) => {
        event.preventDefault()
        this.props.ipmortToCSV(this.state.data) 
        this.setState({
            flag: true
        })
    }
   
    searchHeandler = (event) => {
        this.props.handlePaginationLists(this.state.id,event.target.value)
    }
    dataFile = (event) => {
        console.log(event.target.files[0])
        this.setState({
            data:event.target.files[0]
        })
    } 

    handlePaginationList = (event) => {   
        this.setState({
            id:event.target.value
        })   
      this.props.handlePaginationLists(event.target.id,'')
    }
  
    closedHandleBoxUpdatedCSV = () => {
        let closed = this.state.classClosed
        if(closed == 'open'){
           closed = 'closed'
        } else{
           closed = 'open'
        }
        this.setState({
            classClosed: closed,
            flag       : false
        })
        this.componentDidUpdate = () => {
            this.props.loadDataProduct()
        }
    }
    
    handleBoxUpdatedCSV = () => {
        let result = this.props.importCSV
        return(
            <div className={this.state.classClosed} >
                <span className='closedBoxCSV' onClick={this.closedHandleBoxUpdatedCSV} >
                    <i class="fas fa-check-circle"></i>
                </span>
                <div>
                    {result}
                </div> 
            </div>
        )
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
            {this.state.flag && this.props.importCSV && this.handleBoxUpdatedCSV()} 
                <div className="goodsCatalog">
                    <div className="storeCatalog">
                        <Link  to="/history">
                            <div className="storeCatalog-box">
                            <FlatButton label="Shopping history" primary={true} />
                                <i class="fas fa-cart-arrow-down"></i>
                            </div>
                        </Link>
                        <div className="countGoods-box">
                            <div className="countGoods">
                                <Link to='/viewDiscount'>
                                    <span>
                                        <FlatButton label="View discount" primary={true} />
                                    </span>
                                </Link>
                                <Link to='/setDiscount'>
                                    <span className="setDiscount-btn" >
                                        <RaisedButton label="Set discount" secondary={true}  /> 
                                    </span> 
                                </Link>
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
                    <input type="file" className="choiceFile" name="file" onChange={this.dataFile} accept="*.csv"/>
                    <div className="contentBtn setting" onClick={this.ipmortCSV} >import CSV
                        <i class="fas fa-download icon-setting"></i>
                    </div>
                    <a href="/upload">
                        <div className="contentBtn setting ">export CSV
                            <i class="fas fa-upload icon-setting"></i>
                        </div>
                    </a>
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
                <ListProduct />
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
        allProduct : state.getAllProducts,
        importCSV  : state.importCSV
    }
}

export default connect(mapStateToProps,{loadDataProduct,handlePaginationLists,ipmortToCSV,compareData})(CreatedProduct)