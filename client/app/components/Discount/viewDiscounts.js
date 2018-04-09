import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllDiscounts } from '../../actions/getAllDiscounts'
import RaisedButton from 'material-ui/RaisedButton'
import '../../css/createdDiscountView.css'
import  '../../css/style.css'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'


class viewDiscount extends Component {
    constructor(props){
        super(props)   
    }

    componentWillMount() {
        this.props.getAllDiscounts()
    }

    listAllDiscount = () => {
    let discounts = this.props.allDiscounts
        discounts.forEach(el => {
           console.log(new Date(el.data).toLocaleString('en-US', { timeZone: 'Europe/Helsinki' })) 
        })
        

        return (
            <div>
                {this.props.allDiscounts.map((el,key) => 
                <div key={key} className="CheckWrapper" >
                    <Table>
                        <TableBody  displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>{key+1}</TableRowColumn>
                                <TableRowColumn>{el.name}</TableRowColumn>
                                <TableRowColumn>
                                    {new Date(el.data).toLocaleString('en-US', { timeZone: 'Europe/Helsinki' })}
                                </TableRowColumn>
                                {el.active == false && <TableRowColumn>unavailable</TableRowColumn>}
                                {el.active == true  && <TableRowColumn>available</TableRowColumn>} 
                                <TableRowColumn>
                                    {el.product.map((el,key) => 
                                    <div key={key}>
                                        {el.discount} %
                                    </div>
                                )}
                                </TableRowColumn>
                                <TableRowColumn>
                                    {el.product.map((el,key) => 
                                    <div key={key}>
                                        {el.productId}
                                    </div>
                                )}
                                 </TableRowColumn>
                            </TableRow>
                         </TableBody>
                    </Table>
                </div>
            )}
            </div>
        )
    }    

    render() {
       //console.log(this.props.allDiscounts)
        return(
            <div>
                <header className="headerCurrentHistory">
                    <p>Discount history</p>
                    <i class="fas fa-gift discount-icon"></i>
                </header>
                <Table >
                    <TableHeader displaySelectAll ={false}
                                 adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>№</TableHeaderColumn>
                        <TableHeaderColumn>Discount name</TableHeaderColumn>
                        <TableHeaderColumn>Data</TableHeaderColumn>
                        <TableHeaderColumn>State</TableHeaderColumn>
                        <TableHeaderColumn>Discount</TableHeaderColumn>
                        <TableHeaderColumn>Produc id </TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                </Table>
                {this.listAllDiscount()}
                <div className="backHome-discount" >
                <Link to="/">
                    <div className="foo">
                        <RaisedButton label="GO TO HOME PAGE" primary={true} /> 
                    </div>
                </Link>
                <Link to ='/setDiscount'>
                    <RaisedButton  label="Create new discount" secondary={true} />
                </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       allDiscounts: state.allDiscount
    }
}

export default connect(mapStateToProps,{getAllDiscounts})(viewDiscount)