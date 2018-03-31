import React,{ Component } from 'react'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker'
import { loadDataProduct } from '../../actions/getProduct'
import { createDiscount } from '../../actions/createDiscount'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import TimePicker from 'material-ui/TimePicker';
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
const optionsStyle = {
    maxWidth: 255,
    marginRight: 'auto',
  }

class SetDiscountView extends Component {
    constructor(props){
        super(props)
        
        // const data = new Date();
        // const maxDate = new Date();
        // data.setFullYear(data.getFullYear() - 1);
        // data.setHours(0, 0, 0, 0);
        // maxDate.setFullYear(maxDate.getFullYear() + 1);
        // maxDate.setHours(0, 0, 0, 0);

        this.state = {
            name      : '',
            data: null,
            discount  : '',
            products  :{},
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

        handleChangedata = (event, date) => {
            this.setState({
            data: date,
            })
        }

        handleChangeTimePicker12 = (event, date) => {
            this.setState({data: date});
          }

        updateCheck = (el,event) => {
            let arr=[]
            let obj = this.state.products
            if(event.target.checked){
                obj[el.name] = el
            }else{
                 delete obj[el.name]
                }

            this.setState({
                products: obj
                }) 
           
          }
          handleSubmit = () => {
              console.log(this.state)
              this.props.createDiscount(this.state)
          }

    render(){
         console.log(this.state.data)
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
                     {/* <DatePicker
                        floatingLabelText="Ranged Date Picker"
                       
                        data={this.state.data}
                       // disableYearSelection={this.state.disableYearSelection}
                    /> */}
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
                    <div>
                    {/* <Table >
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
                       </Table>  */}
                        {/* {product && product.map((el,key) => 
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
                        )} */}
                    </div>
                    {/* <div className="createDiscount-btn">
                        <RaisedButton onClick={this.handleSubmit} label="Create discount" secondary={true} />
                    </div> */}
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