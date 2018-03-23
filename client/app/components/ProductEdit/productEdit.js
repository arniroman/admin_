import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  '../../css/style.css'

class ProductEdit extends Component {
    render(){
        console.log(this.props.productWichUpdate)
        return(
            <div>
                hi
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        productWichUpdate   : state.productWichUpdate
    }
}

export default connect(mapStateToProps)(ProductEdit)