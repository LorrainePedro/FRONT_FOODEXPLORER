import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 42rem;
`;

export const Main = styled.div`
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  position: relative;
  width: 37.6rem;
  height: 12rem;
  margin-top: 4.4rem;
  margin-left: 3rem;

  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  // border: 1px solid red;

  > img {
    margin-left: -3rem;
    margin-bottom: 3.5rem;
    width: 19rem;
    height: 15rem;
  }

  .title {
    h1,
    p {
      color: ${({ theme }) => theme.COLORS.GRAY};
      line-height: 140%;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 0.3rem;
    }

    > p {
      font-size: 1.2rem;
    }
  }
`;
export const Content = styled.div`
  width: 21rem;
  height: 29rem;
  padding: 2.4rem;

  margin-top: 8rem; ///tirar
  margin-left: 8rem; ///tirar

  .favoriteSvg {
    position: relative;
    bottom: 8rem;
    left: 15rem;

    width: 2.4rem;
    height: 2.2rem;
  }

  img {
    margin-left: 1rem;
    width: 8.8rem;
  }

  border: 1px solid red;
  border-radius: 0.8rem;

  .dishTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    gap: 1.2rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    .arrow {
      position: absolute;
      margin-top: 0.5rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.BLUE};
      font-family: "Roboto", sans-serif;
      //font-size: 1.6rem;
      line-height: 100%;
    }
  }
`;
export const BottomRow = styled.div`
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
`;
