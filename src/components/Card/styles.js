import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDCARD};
  width: 21rem;
  height: 29rem;
  padding: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    margin-bottom: 3rem;
  }

  .favoriteSvg,
  .pencilSvg {
    position: relative;
    bottom: 8rem;
    left: 15rem;

    width: 2.4rem;
    height: 2.2rem;

    @media (min-width: 800px) {
      bottom: 16rem;
      left: 23rem;
    }
  }

  svg:hover path {
    color: ${({ theme }) => theme.COLORS.RED};
    transition: 0.8s;
  }

  img {
    margin-left: 1rem;
    width: 8.8rem;
  }

  border-radius: 0.8rem;

  .dishTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    gap: 1.2rem;

    h1,
    p {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    h1 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    p {
      display: none;
      text-align: center;
    }

    .arrow {
      position: relative;
      margin-top: 0.5rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.BLUE};
      font-family: "Roboto", sans-serif;
      line-height: 100%;
    }

    @media (min-width: 800px) {
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        line-height: 140%;
        font-weight: bold;
      }

      p {
        display: block;
      }

      span {
        font-family: "Roboto", sans-serif;
        font-size: 3.2rem;
        line-height: 160%;
        margin-bottom: 1.5rem;
      }
    }
  }

  .bottomRow {
    display: flex;
    flex-direction: column;

    .amount {
      display: flex;
      align-items: center;
      align-self: center;
      gap: 1.4rem;
      margin: 1.6rem;
      > p {
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
        line-height: 100%;
      }
    }

    button {
      width: 16.2rem;
      height: 3.2rem;
      font-size: 0.9rem;
      border-radius: 0.4rem;

      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    @media (min-width: 800px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 20rem;

      button {
        height: 4.8rem;
        width: 9.2rem;
      }

      p {
        font-size: 2rem;
        line-height: 160%;
        font-weight: bold;
      }

      .amount {
        margin-left: 3rem;
      }
    }
  }

  @media (min-width: 800px) {
    min-width: 30.4rem;
    height: 46.2rem;

    img {
      width: 17.6rem;
    }
  }
`;
