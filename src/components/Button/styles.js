import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;

  width: 100%;
  height: 4.8rem;
  border-radius: 0.5rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  padding: 1.2rem 3.2rem;

  &:disabled {
    opacity: 0.5;
  }
`;
