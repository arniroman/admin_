import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/style.css'



 class CreatedProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
            product:[],
            properties:[]
		}
    }
    componentWillMount(){
		axios.get('/product').then(response => this.setState({product: response.data }));
		//axios.get('/properties').then(response => this.setState({properties: response.data }));
    }
    
		
	render() {
        const product = this.state.product
        console.log(product)
            
		return (
			<div className="Wrapper">
                <NameProd props={product} />
			</div>
		);
	}
}


function NameProd(props) {
    
    console.log('product',props)
   /* let arr,
        nameArr = [],
        newObj = {}
        for(let key in prop){
            arr = prop[key]
        }

        let foo =[]
        arr.forEach(el =>{
            
                nameArr.push(el.name,
                             el.descr,
                             el.price,
                             el.weight,
                             el.active,
                             el.category,
                             el.tags,
                             el.prop,
                             el.images
                            )       
        })
        //console.log(nameArr)
        */
    return(
        <div>
           <h1>hi</h1>
        </div>
    )
}



export default CreatedProduct;