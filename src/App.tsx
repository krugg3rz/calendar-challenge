import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>My Calendar</h1>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
