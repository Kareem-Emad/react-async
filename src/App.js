import React, { Component } from 'react';
import './App.css';
import ServerRequest from './async';



class App extends Component {

  constructor(){
    super()
    this.state = {
      rounds:[]
    }
  }

  componentDidMount(){
    let {promise,extract} = ServerRequest.fetchWorldCupRounds()
    console.log(promise)
    console.log(extract)

    promise.then(
      data=>{
        data.json().then(
          body=>{
            console.log("Extracted Data")
            let rounds = extract(body)
            console.log(rounds)
            this.setState({rounds:rounds})
          }
        )
      }
    )

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>Hello World</div>
        <div>{this.state.rounds.length}</div>
        <div>{this.state.rounds.length ? this.state.rounds[0].name : '' }</div>


      </div>
    );
  }
}

export default App;
