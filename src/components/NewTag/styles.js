import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.INGREDIENTS};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.INPUTCONTENT}` : "none"};

  border-radius: 0.8rem;

  button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    margin-left: -2.5rem;
    padding-right: 1rem;

    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.INPUTCONTENT : theme.COLORS.WHITE};
  }

  input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 3.2rem;
    width: 11.8rem;
    padding: 1.6rem;

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.INPUTCONTENT};
    }
  }
`;
