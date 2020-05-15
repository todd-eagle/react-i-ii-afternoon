import React, {Component} from 'react'
import PaigeView from './components/PaigeView'
import data from './data/data'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data: data,
      selectedData: 0
    }
    this.next =this.next.bind(this)
    this.previous =this.previous.bind(this)
  }

  next(){
    if(this.state.selectedData < this.state.data.length -1)
    this.setState({selectedData: this.state.selectedData +1 })
  }

  previous(){
    if(this.state.selectedData > 0)
      this.setState({selectedData:this.state.selectedData -1 })
  }
 
  render(){
    const pageInfo = this.state.data.map((element) =>{
      return element
    })
    const selected = pageInfo[this.state.selectedData]
    const pview = <PaigeView info={selected}  count={pageInfo.length} current={this.state.selectedData}/>
  return <div>{pview}
          <button onClick={this.previous}>previous</button>
          <button onClick={this.next}>next</button>   
          </div>
   
  }

}