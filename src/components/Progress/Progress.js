import React from "react";
import { ProgressBar } from "react-bootstrap";
import { StyledProgress } from "../styles/Progress.styled";

const Progress = ({ score, city, name }) => {
  return (
    <StyledProgress>
      {score ? (
        <div data-cy="progess-bar" className="progress-bar">
          <p>{name}</p>
          <ProgressBar
            now={score}
            min={0}
            max={10}
            label={`${Math.round(score)}/10`}
          />
        </div>
      ) : (
        <p></p>
      )}
    </StyledProgress>
  );
};
export default Progress;
