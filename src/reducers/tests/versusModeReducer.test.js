import {
  CHANGE_MODE,
  ONE_PLAYER,
  TWO_PLAYER,
  TWO_PLAYER_CHANGE_TURN,
  TWO_PLAYER_UPDATE_SCORE,
} from "../../actions/actionTypes";
import { versusModeReducer } from "../versusModeReducer";

describe("versusModeReducer", () => {
  it("should not change initial", () => {
    let initialState = null;
    let action = { type: CHANGE_MODE };
    let reducer = versusModeReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });

  it("should change state to object {playerNum: 1, player1: 0, player2: 0}", () => {
    let initialState = null;
    let action = { type: TWO_PLAYER };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(playerNumTurn).toEqual(1);
    expect(player1).toEqual(0);
    expect(player2).toEqual(0);
  });
  it("should change state to object {playerNum: 1, player1: 0, player2: 0}", () => {
    let initialState = null;
    let action = { type: TWO_PLAYER };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(1);
    expect(player1).toEqual(0);
    expect(player2).toEqual(0);
  });
  it("should change state to object {playerNum: 1, player1: 0, player2: 0}", () => {
    let initialState = { playerNumTurn: 2, player1: 18, player2: 10 };
    let action = { type: TWO_PLAYER };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(1);
    expect(player1).toEqual(0);
    expect(player2).toEqual(0);
  });
  it("should change state to object {playerNum: 1, player1: 19, player2: 0}", () => {
    let initialState = { playerNumTurn: 1, player1: 18, player2: 0 };
    let action = {
      type: TWO_PLAYER_UPDATE_SCORE,
      playerNum: "player1",
      playerScore: "add",
    };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(1);
    expect(player1).toEqual(19);
    expect(player2).toEqual(0);
  });
  it("should change state to object {playerNum: 2, player1: 3, player2: 2}", () => {
    let initialState = { playerNumTurn: 2, player1: 3, player2: 1 };
    let action = {
      type: TWO_PLAYER_UPDATE_SCORE,
      playerNum: "player2",
      playerScore: "add",
    };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(2);
    expect(player1).toEqual(3);
    expect(player2).toEqual(2);
  });
  it("should change state to object {playerNum: 1, player1: 4, player2: 0}", () => {
    let initialState = { playerNumTurn: 1, player1: 0, player2: 0 };
    let action = {
      type: TWO_PLAYER_UPDATE_SCORE,
      playerNum: "player1",
      playerScore: 4,
    };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(1);
    expect(player1).toEqual(4);
    expect(player2).toEqual(0);
  });
  it("should change state to object {playerNum: 2, player1: 0, player2: 19}", () => {
    let initialState = { playerNumTurn: 2, player1: 0, player2: 0 };
    let action = {
      type: TWO_PLAYER_UPDATE_SCORE,
      playerNum: "player2",
      playerScore: 19,
    };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(2);
    expect(player1).toEqual(0);
    expect(player2).toEqual(19);
  });

  it("should change state to object {playerNum: 2, player1: 18, player2: 0}", () => {
    let initialState = { playerNumTurn: 1, player1: 18, player2: 0 };
    let action = {
      type: TWO_PLAYER_CHANGE_TURN,
    };
    let reducer = versusModeReducer(initialState, action);
    let { playerNumTurn, player1, player2 } = reducer;
    expect(reducer).not.toEqual(initialState);
    expect(playerNumTurn).toEqual(2);
    expect(player1).toEqual(18);
    expect(player2).toEqual(0);
  });
  it("should change state to false", () => {
    let initialState = null;
    let action = {
      type: ONE_PLAYER,
    };
    let reducer = versusModeReducer(initialState, action);
    expect(reducer).toEqual(false);
  });
});
