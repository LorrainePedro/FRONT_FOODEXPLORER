import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 11.4rem;
  padding: 5rem 2.8rem 2.8rem;

  .main {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 3.2rem;

    @media (min-width: 800px) {
      margin: 0 auto;
    }
  }
  .menu {
    svg {
      font-size: 2.4rem;
    }

    @media (min-width: 800px) {
      display: none;
    }
  }

  .brand {
    margin-right: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.3rem;
    }

    h1 {
      font-family: "Roboto";
      font-size: 2.1rem;
    }
  }

  .deskOrder {
    width: 21.4rem;
    height: 4.8rem;
    font-size: 1.4rem;
  }

  @media (max-width: 800px) {
    .deskOrder {
      width: 10rem;
      background-color: transparent;
      text-indent: -9999px;
      margin-right: -3.5rem;
    }
  }
`;

export const Logo = styled.div`
  @media (min-width: 800px) {
    display: flex;
    gap: 3.2rem;

    .brand {
      h1 {
        font-size: 2.4rem;
      }
    }
  }
`;

export const Search = styled.div`
  display: none;

  @media (min-width: 800px) {
    width: 58rem;
    display: block;
  }
`;

export const Logout = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
