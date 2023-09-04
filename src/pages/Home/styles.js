import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;

  grid-template-areas:
    "header"
    "content"
    "footer";

  grid-template-rows: 11.4rem auto 7.7rem;

  .sections {
    h2 {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-family: "Poppins", serif;
      font-size: 1.8rem;
      font-weight: 300;
      line-height: 140%;
      margin-left: 2.5rem;
      margin-bottom: 1.6rem;
      text-transform: capitalize;
      user-select: none;
      transition: color 0.8s ease;

      width: 21rem;
    }

    h2:hover {
      color: ${({ theme }) => theme.COLORS.BLUE};
    }

    @media (min-width: 1024px) {
      width: 112rem;
      margin: 0 auto;

      margin-top: 6.2rem;

      > h2 {
        margin-left: 0.1rem;
        font-size: 3.2rem;
        font-weight: 300;
        line-height: 140%;
      }
    }
  }
`;

export const Main = styled.div`
  overflow-y: auto;
`;

export const MainImg = styled.div`
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  position: relative;

  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  margin-left: 3rem;
  margin-top: 4.4rem;
  margin-bottom: 1.5rem;

  height: 12rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(1rem);
  }

  @media (min-width: 428px) {
    width: 37.6rem;
  }

  @media (min-width: 600px) {
    margin-left: 5rem;
    width: 40rem;
    &:hover {
      transform: scale(1.1);
    }
  }

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

  @media (min-width: 1024px) {
    width: 112rem;
    height: 26rem;
    display: flex;
    margin: 0 auto;
    margin-top: 18rem;

    > .title h1 {
      font-weight: 300;
      font-size: 4rem;
    }

    > .title p {
      font-size: 1.6rem;
    }

    > .mainImg {
      width: 55rem;
      height: 40rem;
      margin-top: -14.7rem;
      margin-left: -4rem;
      margin-bottom: -1rem;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  width: 41.2rem;
  margin-left: 2.4rem;
  margin-bottom: 2.4rem;
  gap: 1.6rem;

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
  .scrollLeft,
  .scrollRight {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 112rem;
    .hidden {
      display: none;
    }

    .scrollLeft,
    .scrollRight {
      display: block;
      position: absolute;
      border: none;
      background: transparent;
      font-size: 5rem;
      font-weight: 100;
      color: white;
      height: 30rem;
      width: 4.5rem;
      transition: box-shadow 0.2s ease;
      cursor: pointer;

      margin-top: 8rem;
    }
    .scrollLeft:hover,
    .scrollRight:hover {
      box-shadow: 0 0 2px 2px whitesmoke;
      border-radius: 0.5rem;
    }

    .scrollLeft {
      margin-left: -2.4rem;
    }

    .scrollRight {
      margin-left: 107rem;
    }

    .cards {
      margin-left: -2.4rem;
    }
  }
`;
