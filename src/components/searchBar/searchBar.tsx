import * as React from "react";
import styles from "./searchBar.module.scss";

export interface IProps {
  searchText: string;
  onSearchTextChange: (value: string) => void;
}

export interface IState {}

class SearchBar extends React.Component<IProps, IState> {
  public render() {
    return (
      <input
        className={styles.searchBar}
        placeholder="search criteria"
        value={this.props.searchText}
        onChange={this.onChange}
      />
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onSearchTextChange(event.target.value);
  };
}

export default SearchBar;
