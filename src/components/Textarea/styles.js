import styled from "styled-components";

export const Container = styled.textarea`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  width: 112rem;
  height: 20rem;

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
