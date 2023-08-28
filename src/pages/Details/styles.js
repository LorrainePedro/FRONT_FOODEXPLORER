import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
export const Content = styled.div`
  margin: 0 auto;
  margin-top: 3.6rem;

  width: 32rem;
  height: 68rem;
  border: 1px solid red;

  > .backButton {
    color: ${({ theme }) => theme.COLORS.GRAY};
    line-height: 140%;
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 1px solid blue;
    margin-bottom: 1.6rem;
    //margin-top: 2.6rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 113rem;

    //height: 47rem;

    gap: 4.7rem;

    .main {
      display: flex;

      gap: 4.7rem;
      align-items: center;
      align-content: center;
      align-self: center;
    }
  }
`;
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;
  //align-content: center;

  img {
    width: 26.4rem;
  }

  @media (min-width: 1024px) {
    img {
      width: 39rem;
    }

    /* .backButton {
      margin-bottom: 4.2rem;
    } */
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    font-size: 2.7rem;
  }

  > h1,
  p {
    text-align: center;
    line-height: 140%;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  @media (min-width: 1024px) {
    border: 1px solid green;
    width: 69rem;
    height: 30rem;

    > h1 {
      font-size: 4rem;
      font-weight: 500;
    }
    p {
      font-size: 2.4rem;
    }

    > h1,
    p {
      text-align: start;
    }
  }
`;
export const IngredientTags = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 2.4rem;
  // padding-right: 2.5rem;
  //padding-left: 2.5rem;

  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.4rem;

  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
  }
`;
export const BottomRow = styled.div`
  display: flex;
  margin-top: 4rem;

  .amount {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-right: 2rem;

    //

    > p {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 2.2rem;
      line-height: 160%;
    }
  }

  button {
    background-color: #750310;
    width: 31.6rem;
    height: 3.8rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    padding: 2.4rem 1.2rem;
  }

  @media (min-width: 1024px) {
    margin-top: -0.1rem;
    button {
      position: relative;
      top: 1rem;
      min-width: 16.2rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 100;
      padding: 2rem 2.4rem;
    }

    .amount {
      margin-top: 1.5rem;
    }
  }
`;
