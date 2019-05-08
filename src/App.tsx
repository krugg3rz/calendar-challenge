import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import EventContainer from "./containers/eventContainer/eventContainer";
import Header from "./components/header/header";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <EventContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
