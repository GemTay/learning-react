import React, { Component } from 'react';
import Counters from "./components/counters";
import './App.css';
import ItemQuantity from './components/itemQuantity';
import ItemTotal from './components/itemTotal';
import PriceTotal from './components/priceTotal';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0, name: "apple", price: 0.62},
        { id: 2, value: 0, name: "orange", price: 0.30},
        { id: 3, value: 0, name: "pineapple", price: 0.75},
        { id: 4, value: 0, name: "avocado", price: 0.80},
        { id: 5, value: 0, name: "bread", price: 1.10},
        { id: 6, value: 0, name: "milk", price: 1.09},
        { id: 7, value: 0, name: "eggs", price: 2.50},
        { id: 8, value: 0, name: "pasta", price: 1.00},
    ],
    item_total: 0,
    price_total: 0
};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
    this.setState({item_total: this.state.item_total + 1 });
    this.setState({price_total: this.state.price_total + counters[index].price });
};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  if (counters[index].value > 0) {
    counters[index].value--;

  this.setState({ counters });
  this.setState({item_total: this.state.item_total - 1 });
  this.setState({price_total: this.state.price_total - counters[index].price });
  }
};

handleReset = () => {
    this.setState({ counters: [
      { id: 1, value: 0, name: "apple", price: 0.62},
      { id: 2, value: 0, name: "orange", price: 0.30},
      { id: 3, value: 0, name: "pineapple", price: 0.75},
      { id: 4, value: 0, name: "avocado", price: 0.80},
    ],
    item_total: 0,
    price_total: 0
  });
};

handleDelete = counterId => {
  let deletedItemValue = this.state.counters.filter(c => c.id === counterId)[0].value;
  this.setState({item_total: this.state.item_total - deletedItemValue });
  this.setState({price_total: this.state.price_total - (this.state.counters.filter(c => c.id === counterId)[0].price * deletedItemValue) });
  const counters =  this.state.counters.filter(c => c.id  !== counterId);
  this.setState({ counters });
};

render() {
  return (
    <React.Fragment>
        <ItemTotal itemTotal = {this.state.item_total}/>
        <ItemQuantity itemQuantity = {this.state.counters.filter(c => c.value > 0).length}/>
        <PriceTotal priceTotal = {this.state.price_total}/>
        <main className="container" style={{margin:0}}>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
    </React.Fragment>
    );
  }
}

export default App;
