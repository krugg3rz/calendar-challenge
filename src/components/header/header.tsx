import * as React from "react";
import styles from "./header.module.scss";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.header}>
        <h1 className={styles.headerTitle}>
          Interpretive Dance Institute&trade;
        </h1>
      </section>
    );
  }
}

export default Header;
