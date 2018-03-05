import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/createProduct.css'
import  '../css/style.css'


class CreatedProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
            product:[]
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    componentWillMount(){
		axios.get('/product').then(response => this.setState({product: response.data }));
    }

    deleteProduct(id,event){
        console.log(id)
        axios.put('/product',{id}).then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
		
	render() {
        const product = this.state.product
        //console.log(product,'product')
            
		return (
			<div className="Wrapper">
                 <div className="productList-box" >
           {product.map((item,key) =>
           <div className key ={key}>
              <ul>
                  <div className="productItem-box" >
                      <div className="image-box">
                        <li>
                            <img className="productImage-size" src={item.images} />
                        </li>
                    </div>
                    <div className="productBox" >
                        <div className="GeneralProperties-title">
                            <span className="PropertiesTitle-style">General properties</span>
                            <button onClick={(event)=>this.deleteProduct(item._id,event)} className="deleteBtn">btn</button>
                        </div>
                        <li>
                            <span className="listProduct-title" >Name: </span>
                            <span className="listProduct-properties">{item.name}</span> 
                        </li>
                        <li>
                            <span className="listProduct-title">Description: </span>
                            <span className="listProduct-properties">{item.descr}</span>
                        </li>
                        <li>
                            <span className="listProduct-title">Price: </span>
                            <span className="listProduct-properties">{item.price} $</span>
                        </li>
                        <li>
                            <span className="listProduct-title">Weight: </span>
                            <span className="listProduct-properties">{item.weight}</span>
                        </li>
                        <li>
                            {item.active}
                        </li>
                        <li>
                            <span className="listProduct-title">Category: </span>
                            <span className="listProduct-properties">{item.category}</span>
                        </li>
                        <div className="tecnicPops-box" >
                        <div className="listProducTitle-properties"> 
                            <span className="PropertiesTitle-style">Properties</span>
                        </div>
                            <div className="properties-box">
                                <div>
                                    {
                                        Object.keys(item.props).map((item,key) =>
                                        <li className="listProduct-properties" key={key}>{item} :</li>
                                        )
                                    }
                                </div>
                                <div>
                                    {
                                        Object.values(item.props).map((item,key) =>
                                        <li className="listProduct-properties" key={key}>{item}</li>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </ul>
        </div>
        )}
    </div>
			</div>
		);
	}
}


export default CreatedProduct;