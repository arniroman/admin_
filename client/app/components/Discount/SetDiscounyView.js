import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadDataProduct } from '../../actions/getProduct'
import { createDiscount } from '../../actions/createDiscount'
import { handlePaginationLists } from '../../actions/paginationList'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import TimePicker from 'material-ui/TimePicker'
import '../../css/createProduct.css'
import  '../../css/style.css'
import '../../css/discountView.css'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'


class SetDiscountView extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            id        : '',
            name      : '',
            data      : null,
            discount  : '',
            products  : [],
            flag      : '',
            flagPush  : true,
            modalClass: 'closed',
            }
        }

        componentWillMount = () => {
            this.props.loadDataProduct()
        }

        handleChangeName = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        handleChangeDiscount = (event) => {
            console.log(event.target.value)
            this.setState({
                discount: event.target.value
            })
        }

        handleChangeTimePicker12 = (event, date) => {
            this.setState({
                data: date
            })
        }

        searchHeandler = (event) => {
            this.props.handlePaginationLists(0,event.target.value)
        }

        updateCheck = (el,event) => {
             let resultArr = this.state.products
             let strongCompare = this.state.flagPush
             let compare
             resultArr.forEach((prod) => {
               
                if(el._id === prod.productId ){
                    compare = 'not'
                    strongCompare = false
                    this.setState({
                        flagPush: strongCompare
                    }) 
                }

                else if (el._id !== prod.productId){
                    if(compare === 'not'){
                      strongCompare = false  
                    }else{
                      strongCompare = true
                    }
                    
                    this.setState({
                        flagPush: strongCompare
                    })
                }
                 
             })
             
             if(strongCompare){
                resultArr.push({
                productId: el._id,
                discount : this.state.discount
            })
            }
            this.setState({
                products: resultArr
                })    
            }

        handlePaginationList = (event) => {   
            this.setState({
                id:event.target.value
            })   
          this.props.handlePaginationLists(event.target.id,'')
        }

        modalMessage = () =>{
            let classModal = this.state.modalClass
            return(
                <div className={classModal} >
                <div>
                   {this.props.createdDiscount&&<span> {this.props.createdDiscount.message}</span> || <span>Discount created</span> } 
                    <div className = 'handelConfirm'>
                        <span className='handelConfirm-btn' onClick={this.handelChangeClass}>ok</span>
                    </div>
                </div>
                </div>
            )
        }

        handelChangeClass = () =>{
            this.setState({
                modalClass:'closed'
            })
        }

        deleteDiscount = (el,event) => {
            let prod = this.state.products
            prod.forEach((element,key)=>{
                 if(el.productId == element.productId){
                    console.log(element.productId)
                    prod.splice(key,1)
                }
              
            })
           
            this.componentWillMount()
        }

          handleSubmit = () => {
            let resultObj = {
                name    : this.state.name,
                data    : this.state.data,
                active  : true,
                product : this.state.products
            }
            

            this.props.createDiscount(resultObj)
            console.log(resultObj)
            
            this.setState({
                modalClass:'open'
            })
          }

    render(){
        console.log(this.state.products)
      
        /*--- Pages for pagination list ---*/
        const pages = []
        if(this.props.allProduct){
            for(let i = 0; i < this.props.allProduct.pages; i++){
                  pages.push(i)
              }
        }
        /*--- ---*/ 
        let product = this.props.allProduct.product
        return(
            <div>   
            <header className="headerCurrentHistory">
                <p>Discount</p>
                <i class="fas fa-gift discount-icon"></i>
            </header>
            {this.modalMessage()}
                <div className="discountWrapper">
                    <div className="inputContent" >
                        <p className="titleName-discount">Name discount</p>
                            <TextField
                                className="createProd-input"
                                id = "name"
                                name="name"
                                hintText="name"
                                fullWidth={true}
                                onChange = {this.handleChangeName}
                            />
                        <p className="titleName-discount">Chose data</p>
                            <TimePicker
                                format="ampm"
                                hintText="12hr Format"
                                value={this.state.data}
                                onChange={this.handleChangeTimePicker12}
                            />
                        <p className="titleName-discount">Discount %</p>
                            <TextField
                                className="createProd-input"
                                id = "discount"
                                name="dicount"
                                hintText="discount"
                                fullWidth={true}
                                onChange = {this.handleChangeDiscount}
                            />
                    </div>
                    <p className="titleName-discount">Products</p>
                        <div className="tableSale-wrapp">
                            <div className="tableSale-content">
                            <div className='searchDiscount-wrapper' >
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
                        <Table >
                            <TableHeader displaySelectAll={false}
                                         adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>№</TableHeaderColumn>
                                    <TableHeaderColumn>Id</TableHeaderColumn>
                                    <TableHeaderColumn>Image</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Price</TableHeaderColumn>
                                    <TableHeaderColumn>Choice</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                                </Table> 
                                {product && product.map((el,key) => 
                                        <div key={key} className="CheckWrapper" >
                                            <Table>
                                            <TableBody  displayRowCheckbox={false}>
                                                <TableRow>
                                                <TableRowColumn>{key+1}</TableRowColumn>
                                                <TableRowColumn>{el._id}</TableRowColumn>
                                                    <TableRowColumn>
                                                            <div className="imageBox-table">
                                                                <img className="imageTable" src={el.images} />
                                                            </div>
                                                    </TableRowColumn>
                                                        <TableRowColumn>{el.name}</TableRowColumn>
                                                        <TableRowColumn>{el.price}$</TableRowColumn>
                                                        <TableRowColumn>
                                                        <RaisedButton onClick={(event) => this.updateCheck(el,event)} label="choose"/>
                                                    </TableRowColumn>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
                            </div>
                            <div className = "paginationBox">
                                {pages&&pages.map((val,key)=>  
                                    <div className='pagginationButton'
                                        onClick={this.handlePaginationList.bind(this)} key={key} id={val}>{val+1}
                                    </div>)}
                        </div>
                            <div className="discountBtn_wrapp">
                                <div className="createDiscount-btn">
                                    <RaisedButton onClick={this.handleSubmit} label="Create discount" secondary={true} />
                                </div>
                                    <Link to="/">
                                        <div className="">
                                            <RaisedButton label="GO TO HOME PAGE" primary={true} /> 
                                        </div>
                                    </Link>
                            </div>
                   </div>
                   <div className='choosenProduct-table-wrapp' >
                    <p> Choosen Product for discount</p>
                    <div className='choosenProduct-table'> 
                        <div className='choosenProduct'> 
                        <Table >
                            <TableHeader displaySelectAll={false}
                                         adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>№</TableHeaderColumn>
                                    <TableHeaderColumn>Product id</TableHeaderColumn>
                                    <TableHeaderColumn>Discount</TableHeaderColumn>
                                    <TableHeaderColumn>Delete</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                        </Table>
                        {this.state.products.map((el,key) =>
                        <Table key={key}>
                        <TableBody  displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>{key+1}</TableRowColumn>
                                    <TableRowColumn>{el.productId} </TableRowColumn>
                                    <TableRowColumn>{el.discount}% </TableRowColumn>
                                    <TableRowColumn>
                                    <span onClick={(event) => this.deleteDiscount(el,event)} >
                                    <i class="fas fa-trash deleteIcon"></i> 
                                    </span>
                                    </TableRowColumn>
                                </TableRow>
                            </TableBody>
                            </Table>
                            )}
                        </div>
                    </div>
                   </div> 
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allProduct      : state.getAllProducts,
        createdDiscount : state.createDiscount
    }
}

export default connect(mapStateToProps,{loadDataProduct,createDiscount,handlePaginationLists})(SetDiscountView)