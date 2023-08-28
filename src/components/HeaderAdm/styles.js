import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: center;

  gap: 8.1rem;
  padding: 5.6rem 2.8rem 2.4rem;

  .menu {
    svg {
      font-size: 2.4rem;
    }
  }

  .searchInput,
  .newDish {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 3.2rem;

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

    .newDish {
      display: block;
      width: 21.4rem;
      font-size: 1.4rem;
    }
  }
`;
export const Logo = styled.div`
  .logoAndName {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.3rem;
    }

    h1 {
      width: 13rem;
      font-family: "Roboto";
      font-size: 2.1rem;
    }
  }
  span {
    color: ${({ theme }) => theme.COLORS.BLUE};
    margin-left: -1rem;
    padding-left: 0.4rem;
    font-size: 1.2rem;
    line-height: 160%;
  }

  @media (min-width: 1024px) {
    .logoAndName {
      h1 {
        width: 15rem;
        font-size: 2.4rem;
      }
      span {
        margin-top: 4.2rem;
        margin-left: -5.7rem;
      }
    }
  }
`;

export const Logout = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
