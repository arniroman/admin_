import React,{ Component } from 'react'
import  '../../css/createProduct.css'
import { Link } from 'react-router-dom'
import  '../../css/style.css'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import {getAllHistory} from '../../actions/getAllHistory'
import { getAllUsers } from '../../actions/getAllUsers'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'

class shoppingHistory extends Component {
    componentWillMount = () => {
        this.props.getAllHistory()
        this.props.getAllUsers()
    }

    


    render(){ 
        let historyObj
        let res
        let foo
        let arr =[]
        let arr1=[]
        let users 

    //     if(this.props.allUsers){
    //        users = this.props.allUsers
       
    //     if(this.props.allHistory){
    //         historyObj = this.props.allHistory
    //         for(let key in historyObj ){
    //             this.props.allUsers.forEach(ell=>{
    //                 if(ell.googleId == this.props.allHistory[key].userID){
    //                     let a = historyObj[key].userPurchase
    //                     res = historyObj[key].userPurchase
    //                     a.forEach(el=>{
    //                         for(let key in el){
    //                             el[key]['name'] = ell.fullName
    //                             arr1.push(el[key])
    //                         }
    //                     })
    //                 }
    //             })
    //         } 
    //     }
    // }
       
    //     console.log(res )

        return( 
        <div>
               {/* {arr1.map((el,key)=>
                   <div key={key}>
                        <span>
                            Name: {el.name}
                        </span>
                        <span>
                            Time: {el.currentTime}
                        </span> 
                        <span>
                            Price: {el.totalPrice}
                        </span>
                   </div>
               )}
            */}
            </div>
        
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        allHistory : state.assyncGetHistory,
        allUsers : state.getAllUsers
    }
}

export default connect(mapStateToProps,{getAllHistory,getAllUsers})(shoppingHistory)