import React, { Component } from "react";

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { search: '' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("Search.." + this.state.search);
    }
    myChangeHandler = (event) => {
      this.setState({search: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Search {this.state.search}</h1>
        <p></p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
        type='submit'
        />
        </form>
      );
      }
  }  

export default MyForm