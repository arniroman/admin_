import React,{ Component } from 'react'
import '../../css/edit.css'

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
                <p>Current history</p>
                <i class="fas fa-history history-icon"></i>
            </header>
                 <div className="productWrap">
                 <div className="productItems" >
                    <div className="imageBox">
                        <img className="imageItem" src={renderListProduct.images} />
                    </div>
                    <div className="productBox-wrap">
                        <div className="productBox-props">
                            <div className="propsBlock-item" >
                                <span className="propsBlock-title" >Name: </span>
                                <span>{renderListProduct.name}</span>   
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Description:</span> 
                                <span>{renderListProduct.descr}</span> 
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Price: </span>
                                <span>{renderListProduct.price}$</span> 
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Weight: <span>
                                </span> {renderListProduct.weight}</span> 
                            </div>
                            <div className="propsBlock-item">
                                <span className="propsBlock-title">Categor: </span>
                                <span>{renderListProduct.category}</span> 
                            </div>
                            <div className="propsTitle">Properties</div>
                            <div className="propsWrap">
                                <div>
                                    {Object.keys(renderListProduct.props).map((val,key)=>
                                        <div key={key}>{val}: </div>
                                    )}
                                </div>
                                <div>
                                    {Object.values(renderListProduct.props).map((val,key)=>
                                        <div key={key}>{val}</div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link to = "/">
                   
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