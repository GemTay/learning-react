import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/itemQuantity';
import Counters from "./components/counters";
import './App.css';
import ItemQuantity from './components/itemQuantity';
import ItemTotal from './components/itemTotal';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ],
    total: 0
};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
    this.setState({total: this.state.total + 1 });
};

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
};

handleDelete = counterId => {
  this.setState({total: this.state.total - this.state.counters.filter(c => c.id === counterId)[0].value });
  const counters =  this.state.counters.filter(c => c.id  !== counterId);
  this.setState({ counters });
};

render() {
  return (
    <React.Fragment>
        <ItemTotal itemTotal = {this.state.total}/>
        <ItemQuantity itemQuantity = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container" style={{margin:0}}>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
    </React.Fragment>
    );
  }
}

export default App;
