import "./App.css";
import { Provider } from "react-redux";
import store from "./createStore";
import { MastermindContainer } from "./containers/MastermindContainer";
import React from "react";
import { TitleContainer } from "./containers/TitleContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <TitleContainer />
        <MastermindContainer />
      </div>
    </Provider>
  );
}

export default App;
