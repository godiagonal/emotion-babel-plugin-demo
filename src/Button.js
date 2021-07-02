import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledButton = styled.button`
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, color }) => theme.color[color]};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      filter: grayscale(100%);
      pointer-events: none;
    `}
`;

export const Button = ({ children, color, disabled }) => {
  return (
    <StyledButton color={color} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
