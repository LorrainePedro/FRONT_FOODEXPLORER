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
  padding: 5.7rem 2.8rem 2.4rem;

  .menu {
    width: 2.4rem;
    height: 2.4rem;
    display: inline-block;

    svg {
      font-size: 2.4rem;
      transition: transform 0.3s ease, font-size 0.3s ease, color 0.3s ease;

      &:hover {
        transform: rotate(180deg);
        font-size: 2.7rem;
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
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
      transition: transform 0.3s;
    }
    img:hover {
      transform: rotate(360deg);
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
  .logoutIcon {
    transition: transform 0.3s ease;
  }

  .logoutIcon:hover {
    transform: translateX(1rem);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
