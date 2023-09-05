import styled from "styled-components";

export const Container = styled.textarea`
  color: ${({ theme }) => theme.COLORS.INPUTCONTENT};
  background: ${({ theme }) => theme.COLORS.INPUT};

  line-height: 100%;

  border-radius: 0.5rem;
  padding: 1.4rem;

  resize: none;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.INPUTCONTENT};
    font-family: "Roboto";
  }
`;
