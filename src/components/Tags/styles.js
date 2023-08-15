import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.TAGS};
  width: 8rem;
  height: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 0.5rem;
`;
