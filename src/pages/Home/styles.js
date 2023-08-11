import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  cursor: pointer;
`;

export const Main = styled.div`
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  position: relative;

  height: 12rem;
  margin-top: 4.4rem;
  margin-left: 3rem;
  margin-bottom: 6.2rem;

  display: flex;
  align-items: center;
  border-radius: 0.3rem;

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

export const Content = styled.div``;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 43.6rem;
  height: 34rem;
  border: 1px solid red;
  margin-left: 2.4rem;
  margin-bottom: 2.4rem;
  gap: 1.6rem;

  h2 {
    color: RED;
    font-family: "Poppins", serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
    border: 1px solid green;
  }

  .cards {
    display: flex;
    gap: 1.6rem;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 0.1rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;
