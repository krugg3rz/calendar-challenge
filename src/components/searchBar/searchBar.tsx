import * as React from "react";
import { Component } from "react";
import styles from "./searchBar.module.scss";

export interface IProps {
  searchText: string;
  onSearchTextChange: (value: string) => void;
}

export interface IState {}

class SearchBar extends Component {
  public render() {
    return (
      <input
        className={styles.searchBar}
        type="text"
        onChange={this.onTextChange}
      />
    );
  }

  public onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onSearchTextChange(event.target.value);
  };
}

export default SearchBar;
