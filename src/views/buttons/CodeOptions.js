import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const CodeOptionButtons = styled.button`
  height: 6vw;
  width: 6vw;
  min-width: 25px;
  min-height: 25px;
  background-color: ${(props) => props.color};
`;
export function CodeOptions(props) {
  let { userSelected, inputChoiceInto, gameSize, pegColors } = props;
  let result = [];
  for (let i = 1; i <= gameSize; i++) {
    result.push(
      <CodeOptionButtons
        onClick={
          userSelected !== null ? () => inputChoiceInto(userSelected, i) : null
        }
        color={pegColors[i]}
        key={`code options ${i}`}
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
  pegColors: PropTypes.object,
};
