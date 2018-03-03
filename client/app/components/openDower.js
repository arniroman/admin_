import React, {Component} from 'react'
import axios from 'axios'




class OpenDower extends Component {
    constructor(props){
        super(props)
        this.state = {
            values: [],
            prop: []
        }
        this.send = this.send.bind(this)

    }
    componentWillMount(){
		axios.get('/properties').then(response => this.setState({prop: response.data }));
    }

    send(event){
        let even = event.target.value
        let arr = []
        arr.push(even)
        console.log(arr)
    }
    
    
      render() {
          console.log(this.state.prop,'properts')
          const arr = [1,2,3]
       const btn = (
           <div>
               {arr.map(item => 
                <input onClick={this.send} type="radio" value={item} id="radioButton"/>
            )}
              
           </div>
       )
        
        return (
           <div>
               {btn}
           </div>
        )
      }
    }
  
export default OpenDower