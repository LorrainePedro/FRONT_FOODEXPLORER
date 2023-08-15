import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  height: 3.2rem;

  padding: 1rem 1.6rem;

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
    width: 9rem;

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.INPUTCONTENT};
    }
  }
`;
