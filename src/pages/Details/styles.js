import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const DetailsCard = styled.div`
  margin: 0 auto;
  margin-top: 1.6rem;
  width: 32rem;
  margin-bottom: 3.5rem;
  //height: 67rem;
  //  border: 1px solid red;
  // margin-bottom: 13.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > a {
    display: flex;
    font-size: 2.4rem;
    font-weight: 500;
  }

  img {
    align-self: center;
    width: 26rem;
  }

  h1 {
    font-weight: 500;
    font-size: 2.7rem;
  }

  p {
    text-align: justify;
  }

  h1,
  p {
    text-align: center;
  }
`;

export const IngredientTags = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 0.8rem;
`;

export const BottomRow = styled.div`
  display: flex;
  margin-top: 1.8rem;

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
