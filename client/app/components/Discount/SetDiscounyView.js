import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker'
import { loadDataProduct } from '../../actions/getProduct'
import { createDiscount } from '../../actions/createDiscount'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import TimePicker from 'material-ui/TimePicker'
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
            name      : '',
            data      : null,
            discount  : '',
            products  : [],
            flag      : ''
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
            this.setState({
                discount: event.target.value
            })
        }

        handleChangeTimePicker12 = (event, date) => {
            this.setState({
                data: date
            })
        }

        updateCheck = (el,event) => {
            let resultArr = this.state.products
            if(event.target.checked){
                resultArr.push({
                    productId: el._id,
                    discount : this.state.discount
                }) 
            } else {
                resultArr.pop(el)
            }
            console.log(resultArr)
            this.setState({
                products: resultArr
                })
                
          }

          handleSubmit = () => {
            let resultObj = {
                name    : this.state.name,
                data    : this.state.data,
                product : this.state.products
            }
              this.props.createDiscount(resultObj)
              console.log(resultObj)
          }

    render(){
        
        let product = this.props.allProduct.product
        return(
            <div>
                
            <header className="headerCurrentHistory">
                <p>Discount</p>
                <i class="fas fa-gift discount-icon"></i>
            </header>
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
                                id = "name"
                                name="name"
                                hintText="name"
                                fullWidth={true}

                                onChange = {this.handleChangeDiscount}
                            />
                    </div>
                    <p className="titleName-discount">Products</p>
                    <div className="tableSale-wrapp">
                        <div className="tableSale-content">
                            <Table >
                                    <TableHeader displaySelectAll={false}
                                                adjustForCheckbox={false}>
                                        <TableRow>
                                            <TableHeaderColumn>№</TableHeaderColumn>
                                            <TableHeaderColumn>Image</TableHeaderColumn>
                                            <TableHeaderColumn>Name</TableHeaderColumn>
                                            <TableHeaderColumn>Price</TableHeaderColumn>
                                            <TableHeaderColumn>Actions</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                </Table> 
                                {product && product.map((el,key) => 
                                        <div key={key} className="CheckWrapper" >
                                            <Table>
                                            <TableBody  displayRowCheckbox={false}>
                                                <TableRow>
                                                <TableRowColumn>{key+1}</TableRowColumn>
                                                    <TableRowColumn>
                                                            <div className="imageBox-table">
                                                                <img className="imageTable" src={el.images} />
                                                            </div>
                                                    </TableRowColumn>
                                                    <TableRowColumn>{el.name}</TableRowColumn>
                                                    <TableRowColumn>{el.price}$</TableRowColumn>
                                                    <TableRowColumn>
                                                        <Checkbox
                                                        value={el}
                                                        label=""
                                                        onCheck={(event) => this.updateCheck(el,event)}
                                                        />
                                                    </TableRowColumn>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                )}
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allProduct : state.getAllProducts
    }
}

export default connect(mapStateToProps,{loadDataProduct,createDiscount})(SetDiscountView)