import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 6.5rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  .headerMenu {
    background-color: #001119;
    display: flex;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;

    p {
      font-family: "Roboto", serif;
      font-size: 2.1rem;
      font-weight: 400;
    }
  }

  .options {
    width: 37.2rem;
    height: 68rem;
    margin: 3.6rem auto 2.8rem;

    Input {
      border-radius: 0.5rem;
    }
  }

  ul {
    list-style: none;
    margin-top: 2rem;
  }

  li {
    padding: 1rem;
  }

  .back {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    line-height: 140%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.INPUT};
  }
`;
