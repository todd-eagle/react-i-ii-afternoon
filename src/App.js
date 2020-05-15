import React, {Component} from 'react'
import PaigeView from './components/PaigeView'
import data from './data/data'
import './App.css'

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
  return <div className="App-container">
            <div className="App-header">
              <div className="App-logo">Home</div>
            </div>
            <div className="App-background">
              {pview}
            <div className="App-buttons">
              <button className="App-button-left App-btn" onClick={this.previous}>&#60; Previous</button>
              <button className="App-button-right App-btn" onClick={this.next}>Next &#62;</button>
            </div>    
            </div>
        </div>
   
  }

}