import React,{ Component } from 'react'
import  '../../css/createProduct.css'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { handlePaginationLists } from '../../actions/paginationList'
import { deleteProduct } from '../../actions/deleteProduct'
import { productWhichUpdate } from '../../actions/productWichUpdate'
import { productViewWithTable } from '../../actions/productView'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'

class ListProduct extends Component {
   

  deleteProduct = (id,event) => {
        this.props.deleteProduct(id)
  }
  productCurrent = (item,event) => {
     // console.log(item._id,'item')
      this.props.productViewWithTable(item)
  }
  handleToggleEdit = (item,event) => {
      this.props.productWhichUpdate(item)
  }
  
    render(){ 
        let render
        if(this.props.allProduct){
            if(this.props.allProduct.product){
                render = this.props.allProduct.product.map((item,key) =>
                <div className key = {key}> 
               <Table>
                    <TableBody  displayRowCheckbox={false}>
                        <TableRow>
                        <TableRowColumn>{key+1}</TableRowColumn>
                            <TableRowColumn>{item.category}</TableRowColumn>
                            <TableRowColumn>
                                    <div className="imageBox-table">
                                        <img className="imageTable" src={item.images} />
                                    </div>
                            </TableRowColumn>
                            <TableRowColumn>{item.name}</TableRowColumn>
                            <TableRowColumn>{item.price}$</TableRowColumn>
                            <TableRowColumn>
                                <Link to={`/viewProduct/${item._id}`}>
                                    <span className="viewBtn" onClick={(event)=>this.productCurrent(item,event)}>
                                        <i class="fas fa-eye view-icon"></i>
                                    </span>
                                </Link>
                                <Link to ={`/editProduct/${item._id}`}>
                                <span label="edit" onClick={(event)=>this.handleToggleEdit(item,event)} className="editButton">
                                    <i class="fas fa-pencil-alt editIcon"></i>
                                </span>
                                </Link>
                                <span className="deleteBtn" onClick={(event)=>this.deleteProduct(item._id,event)} className="deleteBtn">
                                    <i class="fas fa-trash deleteIcon"></i>
                                </span>
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
                )} 
            }
            else{
                render = <div>Loading ...</div>
            }
        return(
            <div>
                {render}
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        allProduct   : state.getAllProducts,
    }
}

export default connect(mapStateToProps,{deleteProduct,productViewWithTable,productWhichUpdate})(ListProduct)