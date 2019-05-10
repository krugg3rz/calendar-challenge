import * as React from "react";
import { Component } from "react";
import styles from "./searchBar.module.scss";

export interface IProps {}

export interface IState {}

class Search extends Component {
  public state = {
    query: ""
  };

  public handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  public render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
