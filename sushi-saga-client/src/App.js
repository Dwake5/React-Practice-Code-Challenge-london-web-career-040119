import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    money: 100,
    page: 1
  };

  fetchSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis =>
        sushis.map(sushi => {
          return { ...sushi, isEaten: false };
        })
      )
      .then(sushis => this.setState({ sushis }));
  };

  componentDidMount = () => {
    this.fetchSushis();
  };

  filterSushis = () => {
    let startIndex = (this.state.page - 1) * 4;
    return this.state.sushis.slice(startIndex, startIndex + 4);
  };

  moreHandler = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  clickHandler = id => {
    const changedSushi = this.state.sushis.find(sushi => sushi.id === id);
    if (changedSushi.isEaten || changedSushi.price > this.state.money) return;
    this.setState({
      sushis: this.state.sushis.map(sushi => {
        if (sushi.id === id) {
          sushi.isEaten = true;
        }
        return sushi;
      }),
      money: this.state.money - changedSushi.price
    });
  };

  getEatenSushis = () => {
    return this.state.sushis.filter(sushi => sushi.isEaten === true);
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          moreHandler={this.moreHandler}
          clickHandler={this.clickHandler}
          sushis={this.filterSushis()}
        />
        <Table money={this.state.money} eatenSushis={this.getEatenSushis()} />
      </div>
    );
  }
}

export default App;
