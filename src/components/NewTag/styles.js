import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 13rem;
  min-width: 8rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "none" : theme.COLORS.BLUE};

  color: ${({ theme, $isNew }) =>
    $isNew ? theme.COLORS.RED : theme.COLORS.YELLOW};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GREEN}` : "none"};
  border-radius: 0.8rem;

  padding: 0.5rem 1.6rem;

  button {
    background: none;
    border: none;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
  }

  .deleteButton {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  .addButton {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  input {
    height: 3.2rem;
    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: "Roboto", serif;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;
