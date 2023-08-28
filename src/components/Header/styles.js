import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  grid-area: header;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.2rem;
  padding: 5.6rem 2.8rem 2.4rem;

  .menu {
    svg {
      font-size: 2.4rem;
    }
  }

  .searchInput {
    display: none;
  }

  .deskOrder {
    width: 10rem;
    background-color: transparent;
    text-indent: -9999px;
    margin-left: -6rem;
  }

  @media (min-width: 1024px) {
    justify-content: center;

    .menu {
      display: none;
    }

    .searchInput {
      border-radius: 0.5rem;
      width: 58rem;
      display: block;
      Input {
        padding-right: 2rem;
      }
    }

    .deskOrder {
      background-color: ${({ theme }) => theme.COLORS.RED};
      width: 21.4rem;
      height: 4.8rem;
      font-size: 1.4rem;
      text-indent: 0.5rem;
      margin-left: 2rem;
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 19.7rem;
  gap: 1rem;

  img {
    width: 2.3rem;
  }

  h1 {
    font-family: "Roboto";
    font-size: 2.1rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    position: relative;

    h1 {
      font-size: 2.4rem;
    }
  }
`;

export const Logout = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
