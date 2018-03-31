import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import '../../css/curentDataHistory.css'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'

class currentDataHistory extends Component {
    
    constructor(props){
		super(props)
		this.state = {
            history: null
        } 
    }
    componentWillMount(){
        this.props.historyUser
        console.log(this.props.historyUser,'lala')
    }
    
    listAllHistory = () => {
        let history = this.props.historyUser
        let totalPrice = history.totalPrice
        let resArr = []
        for(let key in history.products){
            resArr.push(history.products[key])  
        }
        resArr.forEach(element => {
            console.log(element.item.name)
        });
        console.log(resArr)
        return (
            <div>
            <header className="headerCurrentHistory">
                <p>Current history</p>
                <i class="fas fa-history history-icon"></i>
            </header>
            <div className="historyData-wrapper">
                <div className="historyData-container">
                    <Table >
                        <TableHeader displaySelectAll  = {false}
                                     adjustForCheckbox = {false}>
                            <TableRow>
                                    <TableHeaderColumn>№</TableHeaderColumn>
                                    <TableHeaderColumn>Name Product</TableHeaderColumn>
                                    <TableHeaderColumn>Price</TableHeaderColumn>
                                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                                    <TableHeaderColumn>Images</TableHeaderColumn>
                                </TableRow>
                        </TableHeader>
                    </Table>  
                        {resArr.map((el,key) =>
                            <Table key={key}>
                            <TableBody displayRowCheckbox={false} >
                                <TableRow>
                                    <TableRowColumn>{key+1}</TableRowColumn>
                                    <TableRowColumn>{el.item.name}</TableRowColumn>
                                    <TableRowColumn>{el.price}</TableRowColumn>
                                    <TableRowColumn>{el.qty}</TableRowColumn>
                                    <TableRowColumn>
                                        <div className="imagesHistory-block" >
                                            <img className="imagesHistory-img" src={el.item.images}/>
                                        </div>
                                    </TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                        )}
                        <Link to="/">
                            <div className="historyBtn">
                                <RaisedButton label="GO TO HOME PAGE" primary={true} /> 
                            </div>
                        </Link>
                </div>
            </div>
            </div>
        )
    }

    
    render(){ 
        return( 
            <div>
                {this.listAllHistory()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        historyUser : state.getCurrentHistory
    }
}

export default connect(mapStateToProps)(currentDataHistory)