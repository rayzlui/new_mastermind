import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const CodeOptionButtons = styled.button`
  height: 7vw;
  width: 7vw;
  min-width: 25px;
  min-height: 25px;
`;
export function CodeOptions(props) {
  let { userSelected, inputChoiceInto, gameSize } = props;
  let result = [];
  for (let i = 1; i <= gameSize; i++) {
    result.push(
      <CodeOptionButtons
        onClick={
          userSelected !== null ? () => inputChoiceInto(userSelected, i) : null
        }
      >
        {i}
      </CodeOptionButtons>
    );
  }
  return result;
}

CodeOptions.propTypes = {
  userSelected: PropTypes.number,
  inputChoiceInto: PropTypes.func,
  gameSize: PropTypes.number,
};
