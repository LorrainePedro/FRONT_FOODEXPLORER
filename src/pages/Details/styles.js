import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  //position: fixed;

  display: grid;
  grid-template-rows: 6.5rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;
export const Content = styled.div`
  //position: relative;
  // margin-bottom: 3.5rem;
  margin: 0 auto;
  margin-top: 3.6rem;
  width: 32rem;
  border: 1px solid red;

  @media (min-width: 1024px) {
    width: 140rem;
    height: 47rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    //margin-top: 13rem;
    //  padding: 12rem;

    //justify-content: center;
    // gap: 4.7rem;
  }
`;
export const Image = styled.div`
  width: 26rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  > a {
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 2rem;
    margin-left: -2rem;
  }

  @media (min-width: 1024px) {
    //  margin-left: 12rem;
    img {
      width: 39rem;
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
    margin: 0 auto;
    margin-right: 4rem;
    margin-top: 12rem;

    > h1 {
      font-size: 4rem;
      // font-weight: 100;
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
  display: flex;
  gap: 2.4rem;
  padding: 0.6rem;
  //align-items: center;
  flex-wrap: wrap;

  /* @media (min-width: 800px) {
    flex-wrap: nowrap;
  } */
`;
export const BottomRow = styled.div`
  display: flex;
  margin-top: 1.8rem;
  margin-bottom: 8rem;

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
`;
