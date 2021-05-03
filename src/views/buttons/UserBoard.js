import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { CodeOptionsContainer } from "../../containers/CodeOptionsContainer";
let UserBoardButton = styled.button`
  height: 9vw;
  width: 9vw;
  background-color: ${(props) => (props.highlight ? "green" : "white;")};
  font-size: 2vw;
  min-width: 40px;
  min-height: 40px;
`;

export function UserBoard(props) {
  let result = [];
  let { userBoard, changeInputSpot, userSelected } = props;

  for (let i = 0; i < userBoard.length; i++) {
    result.push(
      <UserBoardButton
        boardLength={userBoard.length}
        highlight={userSelected === i}
        key={`userboard index ${i}`}
        onClick={() => changeInputSpot(i)}
      >
        {userBoard[i] || `Index ${i + 1}`}
      </UserBoardButton>
    );
  }
  let showOptions =
    userSelected !== null ? (
      <section className={"code_options"}>
        <h1>Code Options</h1>
        <CodeOptionsContainer />
      </section>
    ) : null;
  return (
    <section className={"user_interaction"}>
      <section className={"code_select"}>{result}</section>
      {showOptions}
    </section>
  );
}

UserBoard.propTypes = {
  userBoard: PropTypes.array,
  changeInputSpot: PropTypes.func,
  userSelected: PropTypes.number,
};
