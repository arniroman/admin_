import React,{ Component } from 'react'
import axios from 'axios'
import  '../css/style.css'



 class CreatedProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
    }
    componentWillMount(){
		axios.get('/product').then(response => this.setState({data: response.data }));
		//axios.post('/product').then(response => this.setState({data: response.data }));
    }
    
		
	render() {
       // console.log(this.state.data,'data with db in created')
        //const result = this.state.data
    
        //result.forEach(el => {
         //  console.log(el.name);
       // });
		return (
			<div className="Wrapper">
                <NameProd props={this.state.data} />
			</div>
		);
	}
}


function NameProd(props) {
    let prop = props;
    let arr,
        nameArr = [],
        newObj = {}
        for(let key in prop){
            arr = prop[key]
            console.log(arr,'arr:')
        }
      /*  arr.forEach(el => {
            newObj['name']     = el.name
            newObj['descr']    = el.descr
            newObj['price']    = el.price
            newObj['weight']   = el.weight
            newObj['active']   = el.active
            newObj['category'] = el.category
            newObj['tags']     = el.tags
            newObj['prop']     = el.prop
            newObj['images']   = el.images
        })*/
        let foo =[]
        arr.forEach(el =>{
                for( var key in el.prop){
                     console.log()
                nameArr.push(el.name,el.descr,el.price,el.weight,el.active,key,el.prop[key])
                }
                //nameArr.push(el.name)
            
        })
        console.log(nameArr)
    return(
        <div>
            {nameArr.map(item => <p>{item}</p>)}
        </div>
    )
}


export default CreatedProduct;