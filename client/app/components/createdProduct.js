import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/createProduct.css'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import  '../css/style.css'

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || x.tags.includes(term) 
    }
}
class CreatedProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
            product:[],
            term:''
        }
        this.searchHeandler = this.searchHeandler.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    componentWillMount(){
		axios.get('/product').then(response => this.setState({product: response.data }));
    }

    searchHeandler(event){
        this.setState({
            term: event.target.value
        })
    }
    deleteProduct(id,event){
        console.log(id)
       const newState = [...this.state.product]
       newState.filter((el)=>{
           if(el.id !== id){
            return el;
           }
       })
       console.log(newState)
        axios.put('/product',{id}).then(res => {
            
        this.setState({
            product:this.state.product
        })
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
                    <div className="searchBox-input">
                    <label>
                    <TextField
                    type="search"
                    hintText="Search..."
                    onChange={this.searchHeandler}
                    className="searchInput"
                    />
                    <i class="fas fa-search searchInput"></i>
                    </label>
                    </div>
                    {product.filter(searchingFor(this.state.term)).map((item,key) =>
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
                                        <button className="deleteBtn" onClick={(event)=>this.deleteProduct(item._id,event)} className="deleteBtn">
                                                <i class="fas fa-trash deleteIcon"></i>
                                        </button>
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