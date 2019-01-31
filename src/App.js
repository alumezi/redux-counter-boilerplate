import React, { Component } from "react";
import { connect } from "react-redux";
import { Increment, Decrement } from "./actionCreators/operations";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.state.value}</h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch(Increment());
    },
    onDecrement: () => {
      dispatch(Decrement());
    }
  };
};

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default VisibleApp;
