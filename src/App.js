import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleAddOnClick() {
    this.props.store.dispatch(addItem());
  }

  handleRemOnClick() {
    this.props.removeItem();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="App">
        <div className="btn-box">
          <button onClick={(event) => this.handleAddOnClick(event)}>Add</button>
          <button onClick={(event) => this.handleRemOnClick(event)}>Remove</button>
        </div>
        <br/>
        <p>{this.props.items.length}</p>
        <br/>
        <div>{items}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: () => dispatch({ type: "DECREASE_COUNT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
