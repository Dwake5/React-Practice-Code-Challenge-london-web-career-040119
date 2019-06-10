import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    sushiEaten: [],
    money: 100,
    page: 1
  }

  fetchSushis =() => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis}))
  }

  componentDidMount = () => {
    this.fetchSushis()
  }

  filterSushis = () => {
    let startIndex = ((this.state.page-1)*4)
    return this.state.sushis.slice(startIndex, startIndex+4)
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.filterSushis()}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;