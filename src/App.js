import "./App.css";
import { Provider } from "react-redux";
import store from "./createStore";
import { MastermindContainer } from "./containers/MastermindContainer";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <section>
          <h1 className={"game_name"}>Mastermind</h1>
        </section>
        <MastermindContainer />
      </div>
    </Provider>
  );
}

export default App;
