import ReactDOM from "react-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 30px;

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 60px;
    `}
`;

function App() {
  return (
    <div>
      <Title>Regular title</Title>
      <Title size="large">Large title</Title>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
