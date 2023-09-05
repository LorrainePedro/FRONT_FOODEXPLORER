import styled from "styled-components";

export const Container = styled.div`
  background: #0d1d25;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;

  > input {
    color: ${({ theme }) => theme.COLORS.LABELS};
    height: 4.8rem;
    width: 100%;

    padding: 1.4rem;

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.INPUTCONTENT};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
