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

  @media (min-width: 1024px) {
    border: 1px solid red;
    width: 113rem;
    //height: 47rem;
    display: flex;

    gap: 4.7rem;

    //flex-direction: row;
    //align-items: center;
    // margin: 0 auto;
  }
`;
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-bottom: 1.6rem;
  img {
    width: 26.4rem;
  }

  > .backButton {
    position: relative;
    margin-right: 20rem;
    border: 1px solid blue;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    display: flex;
    align-items: center;

    line-height: 140%;
    font-weight: 300;
    margin-bottom: 1.6rem;
    margin-top: 2.6rem;
  }

  @media (min-width: 1024px) {
    img {
      width: 39rem;
    }

    .backButton {
      margin-bottom: 4.2rem;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    font-weight: 100;
    font-size: 2.7rem;
    line-height: 140%;
  }

  > p {
    line-height: 140%;
  }

  > h1,
  p {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  @media (min-width: 1024px) {
    border: 1px solid green;
    width: 69rem;
    height: 30rem;
    margin-top: 15.3rem;

    > h1 {
      font-size: 4rem;
      // font-family: "Poppins";
      font-weight: 500;
    }
    p {
      //  font-family: "Poppins";
      font-size: 2.4rem;
      line-height: 140%;
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
  // padding-right: 2.5rem;
  //padding-left: 2.5rem;

  grid-template-columns: 1fr 1fr 1fr;
  // row-gap: 2.4rem;

  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
  }
`;
export const BottomRow = styled.div`
  display: flex;
  margin-top: 1rem;

  .amount {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-right: 2rem;

    > p {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 2.2rem;
      line-height: 160%;
    }
  }

  button {
    width: 19rem;
    height: 3.8rem;
    font-size: 0.9rem;
    border-radius: 0.4rem;
    margin-left: 1rem;
  }

  @media (min-width: 800px) {
    button {
      width: 16.2rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 100;
      padding: 2rem 2.4rem;

      background-color: #750310;
    }
  }
`;
