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
           for (let key in el.products){
              console.log(el.products[key])
           } 
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
                                <TableRowColumn>{el.data}</TableRowColumn>
                                {el.product.map((el,key) => 
                                <TableRowColumn key={key}>{el.discount}</TableRowColumn>
                                )}
                                 {el.product.map((el,key) => 
                                <TableRowColumn key={key}>{el.productId}</TableRowColumn>
                                )}
                            </TableRow>
                         </TableBody>
                    </Table>
                </div>
            )}
            </div>
        )
    }    

    render() {
       console.log(this.props.allDiscounts)
        return(
            <div>
                <header className="headerCurrentHistory">
                    <p>Discount</p>
                    <i class="fas fa-gift discount-icon"></i>
                </header>
                <Table >
                    <TableHeader displaySelectAll ={false}
                                 adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>№</TableHeaderColumn>
                        <TableHeaderColumn>Discount name</TableHeaderColumn>
                        <TableHeaderColumn>Data</TableHeaderColumn>
                        <TableHeaderColumn>Discount % </TableHeaderColumn>
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