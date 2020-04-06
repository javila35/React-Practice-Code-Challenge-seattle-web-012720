import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/MoneyForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      currentSushi: [],
      eaten: [],
      budget: 150
    }
  }

  addMoney = (amount) =>{
    this.setState((prevState) => {
      return {budget: parseInt(prevState.budget,10) + parseInt(amount,10)}
    });
  };

  eatSushi = (id, price) =>{
    this.setState((prevState) => {
      return {eaten: [...prevState.eaten, id], budget: prevState.budget - price}
    });
  };

  fetchSushi = 
    fetch(API)
    .then(res=>res.json())
    .then(data=>this.setState({
      allSushi: data,
      currentSushi: data.slice(0,4)
    }));
  
  onMoreSushi = () => {
    let lastPiece = this.state.currentSushi[3];
    let index = this.state.allSushi.indexOf(lastPiece);
    this.setState({
      currentSushi: this.state.allSushi.slice(index+1,index+5)
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.currentSushi} moreSushi={this.onMoreSushi} eatSushi={this.eatSushi} ateSushi={this.state.eaten} budget={this.state.budget} />
        <Table ateSushi={this.state.eaten} budget={this.state.budget} />
        <Form addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;