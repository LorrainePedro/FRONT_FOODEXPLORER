import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDCARD};
  width: 21rem;
  height: 29rem;
  padding: 2.4rem;

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
      position: relative;
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
