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
        nameArr = []
        for(let key in prop){
            arr = prop[key]
        }
        arr.forEach(el => {
            nameArr.push(el.name)
        })
        console.log(nameArr)
    return(
        <div>
            hi!
        </div>
    )
}


export default CreatedProduct;