import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.2rem;
  width: 12rem;
  padding: 1.5rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.INGREDIENTS};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.INPUTCONTENT}` : "none"};

  border-radius: 0.8rem;

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.INPUTCONTENT : theme.COLORS.WHITE};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 3.2rem;
    width: 8rem;

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.INPUTCONTENT};
    }
  }
`;
