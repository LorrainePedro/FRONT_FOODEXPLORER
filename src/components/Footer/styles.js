import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  background: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.8rem;
  padding-right: 2.8rem;
  height: 7.7rem;

  span {
    font-family: "DM Sans";
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    padding: 2.4rem 12rem;

    span {
      font-family: "Roboto";
      font-size: 1.4rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.2rem;
  }

  h1 {
    font-family: "Roboto";
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LOGOFOOTER};
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.4rem;
    }
  }
`;
