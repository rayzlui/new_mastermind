import React from "react";
import { render, screen } from "@testing-library/react";
import { Mastermind } from "../Mastermind";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { TIMED_MODE } from "../../actions/actionTypes";

//we just need to test if the correct container is being displayed
//we're going to test the buttons in those specific container tests

let mockStore = configureStore();
const mockState = {
  userBoard: {
    numbersGuessed: 0,
    board: new Array(4),
    hints: {},
    hintCount: 0,
  },
  userSelected: null,
  moveHistory: [],
  correctCode: { correctCode: [], countOfEachNum: 0 },
  advancedOptions: null,
  gameStatus: null,
  winner: null,
  score: 0,
  gameType: null,
  isTwoPlayer: null,
  turnChange: null,
};
let store = mockStore(mockState);

describe("Mastermind", () => {
  it("should return amount of players buttons", () => {
    let mockProps = {
      gameStatus: null,
      winner: null,
      versusComputer: null,
      gameType: null,
      isTwoPlayer: null,
    };
    let TestComponent = (
      <Provider store={store}>
        <Mastermind {...mockProps} />
      </Provider>
    );
    render(TestComponent);
    let buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(2);
    let button1 = screen.getByText("One Player");
    let button2 = screen.getByText("Two Player");
    expect(button1).toBeValid();
    expect(button2).toBeValid();
  });
  it("should return game select buttons", () => {
    let mockProps = {
      gameStatus: null,
      winner: null,
      versusComputer: null,
      gameType: null,
      isTwoPlayer: false,
    };
    let TestComponent = (
      <Provider store={store}>
        <Mastermind {...mockProps} />
      </Provider>
    );
    render(TestComponent);
    let buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(2);
    let button1 = screen.getByText("Classic Mode");
    let button2 = screen.getByText("Timed Mode");
    expect(button1).toBeValid();
    expect(button2).toBeValid();
  });
  it("should return design own code component", () => {
    let mockProps = {
      gameStatus: null,
      winner: null,
      versusComputer: false,
      gameType: TIMED_MODE,
      isTwoPlayer: true,
    };
    let TestComponent = (
      <Provider store={store}>
        <Mastermind {...mockProps} />
      </Provider>
    );
    render(TestComponent);
    let title = screen.getByText("Design Code");
    expect(title).toBeValid();
  });
  it("should return game options component", () => {
    let mockProps = {
      gameStatus: null,
      winner: null,
      versusComputer: true,
      gameType: TIMED_MODE,
      isTwoPlayer: true,
    };
    let TestComponent = (
      <Provider store={store}>
        <Mastermind {...mockProps} />
      </Provider>
    );
    render(TestComponent);
    let button1 = screen.getByText("Quick Play");
    let button2 = screen.getByText("Advanced Options");
    expect(button1).toBeValid();
    expect(button2).toBeValid();
  });
  it("should return game over component", () => {
    let mockProps = {
      gameStatus: null,
      winner: false,
      versusComputer: true,
      gameType: TIMED_MODE,
      isTwoPlayer: false,
    };
    let TestComponent = (
      <Provider store={store}>
        <Mastermind {...mockProps} />
      </Provider>
    );
    render(TestComponent);
    let title = screen.getByText("Game Over!");
    expect(title).toBeValid();
  });
});
