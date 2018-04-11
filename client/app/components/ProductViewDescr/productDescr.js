import React,{ Component } from 'react'
import '../../css/edit.css'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProductDescr extends Component {
  
    componentWillMount(){
        this.props.separatedProducts
    }
    render(){
     
       let renderListProduct = this.props.separateProduct
       console.log(renderListProduct)
        return(
            <div>
                <header className="headerCurrentHistory">
                    <p>Current product</p>
                    <i class="fas fa-history history-icon"></i>
                </header>
                 <div className="productWrap">
                 <div className="productItems" >
                 <div className="productImage-wrapp" >
                    <div className="imageBox">
                        <img className="imageItem" src={renderListProduct.images} />
                    </div>
                    </div>
                    <div className="productBox-wrap">
                        <div className="productBox-props">
                        <div className="item-specifics" >Item specifics</div>
                            <div className="propsBlock-item" >
                                <span className="propsBlock-title" >Name: </span>
                                <span className="propsBlock-title-value">{renderListProduct.name}</span>   
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Description:</span> 
                                <span className="propsBlock-title-value">{renderListProduct.descr}</span> 
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Price: </span>
                                <span className="propsBlock-title-value">{renderListProduct.price}$</span> 
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Weight: </span>
                                <span className="propsBlock-title-value"> {renderListProduct.weight}</span> 
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Categor: </span>
                                <span className="propsBlock-title-value">{renderListProduct.category}</span> 
                            </div>
                            <div className="item-specifics">Properties</div>
                            <div className="propsWrap">
                                <div>
                                    {Object.keys(renderListProduct.props).map((val,key)=>
                                        <div key={key}>
                                        <span className="propsBlock-title">{val}:</span>
                                        <span className="propsBlock-title-value">{renderListProduct.props[val]}</span> </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link to = "/">
                        <div className="historyBtn">
                            <RaisedButton label="GO TO HOME PAGE" primary={true} /> 
                        </div>
                    </Link> 
                    </div> 
                </div>               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        separateProduct: state.separatedProducts,
    }
}

export default connect(mapStateToProps)(ProductDescr)