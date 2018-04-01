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
                {discounts.map((el,key) => 
                <div key={key} className="CheckWrapper" >
                    <Table>
                        <TableBody  displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>{key+1}</TableRowColumn>
                                <TableRowColumn>{el.name}</TableRowColumn>
                                <TableRowColumn>{el.data}</TableRowColumn>
                                <TableRowColumn>{el.discount}</TableRowColumn>
                                <TableRowColumn>
                                    <div>
                                    {Object.keys(el.products).map((elem,key) =>
                                        <div className="outputFor-elem" key={key}>${el.products[elem].price}</div>
                                    )}
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <div>
                                    {Object.keys(el.products).map((elem,key) =>
                                        <div className="outputFor-elem" key={key}>${el.products[elem].discountPrice}</div>
                                    )}
                                    </div>
                                </TableRowColumn>
                                <TableRowColumn>
                                    {Object.keys(el.products).map((elem,key) =>
                                        <div className="outputFor-elem" key={key}>{el.products[elem].name}</div>
                                    )}
                                </TableRowColumn>
                                <TableRowColumn>
                                    {Object.keys(el.products).map((elem,key) =>
                                    <div key={key}>
                                        <div className="discountImage-wrapp" key={key}>
                                            <img className="discountImages" src={el.products[elem].images} />
                                        </div>
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
                        <TableHeaderColumn>Price </TableHeaderColumn>
                        <TableHeaderColumn>Discount price </TableHeaderColumn>
                        <TableHeaderColumn>Name products</TableHeaderColumn>
                        <TableHeaderColumn>Images</TableHeaderColumn>
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