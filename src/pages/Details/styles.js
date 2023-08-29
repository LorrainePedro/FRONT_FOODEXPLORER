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
  margin-top: 3.2rem;

  width: 32rem;
  height: 68rem;

  a {
    color: ${({ theme }) => theme.COLORS.GRAY};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 140%;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 113rem;

    gap: 4.7rem;

    .main {
      display: flex;
      gap: 4.7rem;
      align-items: center;
      align-self: center;
    }

    a {
      > h2 {
        font-weight: bold;
        font-size: 2.4rem;
      }
    }
  }
`;
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;

  img {
    width: 26.4rem;
  }

  @media (min-width: 1024px) {
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

    > p {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 2.2rem;
      line-height: 160%;
    }
  }

  .editDish {
    background-color: #750310;
    width: 31.6rem;
    height: 3.8rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    padding: 2.4rem 1.2rem;
  }

  @media (min-width: 1024px) {
    margin-top: -0.1rem;

    .editDish {
      position: relative;
      top: 1rem;
      width: 13.1rem;
      height: 4.8rem;

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    /* position: relative;
      top: 1rem;
      width: 16.2rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 100;
      padding: 2rem 2.4rem;
    } */

    .amount {
      margin-top: 1.5rem;
    }
  }
`;
