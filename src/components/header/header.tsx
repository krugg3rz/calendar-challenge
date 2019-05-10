import * as React from "react";
import styles from "./header.module.scss";
// import SearchBar from "../searchBar/searchBar";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }

  public onSearchTextChange = (searchText: string) => {};

  render() {
    return (
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>
          Interpretive Dance Institute&trade;
        </h1>
        <h2 className={styles.headerSubTitle}>Upcoming Events</h2>
        {/* <SearchBar /> */}
      </section>
    );
  }
}

export default Header;
