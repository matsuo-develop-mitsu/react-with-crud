import React, { Component } from "react";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlePlus = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinus = () => {
    this.setState({ count: this.state.count - 1 });
    console.log();
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
