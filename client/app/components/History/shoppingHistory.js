import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import  '../../css/shoppingHistory.css'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { getAllHistory } from '../../actions/getAllHistory'
import { getAllUsers } from '../../actions/getAllUsers'
import { getCurrentDataHistory } from '../../actions/getCurrentDataHistory'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'

class shoppingHistory extends Component {

    constructor(props){
		super(props) 
    }

    componentWillMount = () => {
        this.props.getAllHistory()
        this.props.getAllUsers()
    }

    currentUserHistory = (el,event) => {
        this.props.getCurrentDataHistory(el)
        console.log(el,'el')
        console.log(this.props.allHistory)
    }

    historyList = () => {
        let history, 
              users,
              arrTest = [],
              newArr  = [],
              resArr  = []

        if(this.props.allHistory){
            history = this.props.allHistory
        }
        if(this.props.allUsers){
            users = this.props.allUsers
        }
            history.forEach( el => {
                arrTest.push(el)
            })
       
            arrTest.forEach( elem => {
                console.log(arrTest,'test')
            users.forEach(el=>{
            if(el.googleId == elem.userID){
                elem['name'] = el.fullName
                newArr.push(elem)
                }
            }) 
          })
   
        newArr.forEach( el => {  
            console.log(el.userID,'elll')
            el.userPurchase.forEach( elem => {
                for(let i in elem){
                    elem[i]['id']= el.userID
                    elem[i]['numberOrder'] = i
                    elem[i]['name']   = el.name
                    resArr.push(elem[i])
                }
            })
        })
  
    return(
        <div>
            {resArr.map((el,key) => 
            <div key={key}>
                <Table>
                    <TableBody displayRowCheckbox={false} >
                        <TableRow>
                        <TableRowColumn>{key+1}</TableRowColumn>
                            <TableRowColumn onClick={this.currentUserHistory}>{el.numberOrder}</TableRowColumn>
                            <TableRowColumn>{el.name}</TableRowColumn>
                            <TableRowColumn>{el.currentTime}</TableRowColumn>
                            <TableRowColumn>${el.totalPrice}</TableRowColumn>
                            <TableRowColumn>
                             <Link to='/viewCurrentHistory'> 
                                <span className="viewBtn" onClick={(event)=>this.currentUserHistory(el,event)}>
                                    <i class="fas fa-cart-arrow-down iconHistory"></i>
                                </span>
                             </Link>
                            </TableRowColumn>
                        </TableRow> 
                    </TableBody>
                </Table>
            </div>
            )}
        </div>
    )
}

    render(){
        return( 
        <div>
            <header className="headerCurrentHistory">
                <p>Shopping history</p>
                <i class="fas fa-address-book book-icon"></i>
            </header>
            <div className="userData-wrapp">
                <div className="userData-history">   
                    <Table >
                        <TableHeader displaySelectAll={false}
                                     adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>№</TableHeaderColumn>
                                <TableHeaderColumn>Number Order</TableHeaderColumn>
                                <TableHeaderColumn>Name Users</TableHeaderColumn>
                                <TableHeaderColumn>Data</TableHeaderColumn>
                                <TableHeaderColumn>Price</TableHeaderColumn>
                                <TableHeaderColumn>View</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                    </Table>
                    {this.historyList()}
                </div>
            </div>
            <Link to="/">
                 <div className="historyBtn">
                    <RaisedButton label="GO TO HOME PAGE" primary={true} /> 
                </div>
            </Link>
        </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        allHistory : state.assyncGetHistory,
        allUsers   : state.getAllUsers
    }
}

export default connect(mapStateToProps,{getAllHistory,getAllUsers,getCurrentDataHistory})(shoppingHistory)