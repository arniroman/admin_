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
                 <div className="productWrap">
                    <div className="imageBox">
                        <img className="imageItem" src={renderListProduct.images} />
                    </div>
                    <div>
                        <div className="productBox">
                            <div>
                                <span>Name: {renderListProduct.name}</span>   
                            </div>
                            <div>
                                <span>Description: {renderListProduct.descr}</span> 
                            </div>
                            <div>
                                <span>Price: {renderListProduct.price}$</span> 
                            </div>
                            <div>
                                <span>Weight:  {renderListProduct.weight}</span> 
                            </div>
                            <div>
                                <span>Categor: {renderListProduct.category}</span> 
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
                    <span className="btnBack">
                      <i class="fas fa-arrow-circle-left btnBack-icon"></i>
                    </span>
                    </Link>  
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