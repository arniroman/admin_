import React,{ Component } from 'react'
import '../css/edit.css'
import { Link } from 'react-router-dom'

 class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            class : 'viewConteiner'
        }
        this.changeClass = this.changeClass.bind(this)
    }
        changeClass(){
            let view  = 'viewConteiner',
                clear = 'clearContainer'
                console.log(this.state.class)
                if(this.state.class == view){
                    this.setState({
                        class:clear
                    })
                }
                else {
                    this.setState({
                        class: view
                    })
                }
            }

    render(){
        const data = this.props.data
       
        return(
            <div className={this.state.class}>
                <div className="productWrap">
                    <div className="imageBox">
                        <img className="imageItem" src={data.images} />
                    </div>
                    <div>
                        <div className="productBox">
                            <div>
                                <span>Name: {data.name}</span>   
                            </div>
                            <div>
                                <span>Description: {data.descr}</span> 
                            </div>
                            <div>
                                <span>Price: {data.price}$</span> 
                            </div>
                            <div>
                                <span>Weight:  {data.weight}</span> 
                            </div>
                            <div>
                                <span>Categor: {data.category}</span> 
                            </div>
                            <div className="propsTitle">Properties</div>
                            <div className="propsWrap">
                                <div>
                                    {Object.keys(data.props).map((val,key)=>
                                        <div key={key}>{val}: </div>
                                    )}
                                </div>
                                <div>
                                    {Object.values(data.props).map((val,key)=>
                                        <div key={key}>{val}</div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <span className="btnBack" onClick={this.changeClass}>
                      <i class="fas fa-arrow-circle-left btnBack-icon"></i>
                    </span>  
                </div>
                             
            </div>
        )
    }
}

export default Edit