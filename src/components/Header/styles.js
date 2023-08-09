import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  grid-area: header;
  width: 100%;

  height: 6.5rem;
  padding: 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  svg {
    font-size: 2.4rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.3rem;
  }

  h1 {
    font-family: "Roboto";
    font-size: 2.1rem;
  }
`;

export const OrderContent = styled.div`
  svg {
    font-size: 2.6rem;
  }

  span {
    position: fixed;
    border-radius: 99%;
    background-color: #92000e;

    width: 2rem;
    height: 2rem;

    top: 1.2rem;
    right: 2.2rem;

    font-size: 1.4rem;
    line-height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
