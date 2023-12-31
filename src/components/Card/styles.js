import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  background: ${({ theme }) => theme.COLORS.BACKGROUNDCARD};
  width: 21rem;
  height: 29rem;
  padding: 2.4rem;

  .favoriteSvg,
  .pencilSvg {
    position: relative;
    bottom: 11rem;
    left: 14.5rem;

    width: 2.4rem;
    height: 2.2rem;
    transition: transform 0.5s ease;

    @media (min-width: 1024px) {
      bottom: 19rem;
      left: 23rem;
    }
  }

  .favoriteSvg:hover,
  .pencilSvg:hover {
    transform: scale(1.5);
  }

  svg:hover path {
    color: ${({ theme }) => theme.COLORS.RED};
    transition: color 0.8s ease;
  }

  img {
    margin-left: 1.2rem;
    width: 8.8rem;
    height: 8.8rem;
    margin-bottom: 0.8rem;
    margin-top: 2rem;
    border-radius: 50%;

    @media (min-width: 1024px) {
      margin-right: 4rem;
      width: 17.6rem;
      height: 17.6rem;
      border-radius: 50%;
    }
  }

  border-radius: 0.8rem;

  .dishTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    gap: 1.2rem;
    max-width: 25.6rem;

    h1,
    p {
      color: ${({ theme }) => theme.COLORS.GRAY};
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h1 {
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 2.4rem;
    }

    p {
      display: none;
    }

    span {
      color: ${({ theme }) => theme.COLORS.BLUE};
      font-family: "Roboto", sans-serif;
      line-height: 100%;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }

    @media (min-width: 1024px) {
      max-width: 28rem;

      h1 {
        height: 3.4rem;
        font-size: 2.4rem;
        line-height: 140%;
        font-weight: bold;
      }

      p {
        text-align: center;
        font-size: 1.4rem;
        line-height: 160%;
        height: 4.4rem;
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
    gap: 1rem;

    .amount {
      display: flex;
      align-items: center;
      align-self: center;
      gap: 1.4rem;

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

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 20rem;
      margin-left: 2.5rem;

      button {
        height: 4.8rem;
        width: 9.2rem;

        margin-top: -2rem;
      }

      p {
        font-size: 2rem;
        line-height: 160%;
        font-weight: bold;
      }

      .amount {
        margin-bottom: 2rem;
        p {
          font-size: 2rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    min-width: 30.4rem;
    height: 46.2rem;

    img {
      width: 17.6rem;
    }
  }
`;
