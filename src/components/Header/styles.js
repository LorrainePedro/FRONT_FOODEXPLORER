import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  grid-area: header;

  top: 0;
  position: relative;
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem;
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
    position: relative;
    border-radius: 99%;
    background-color: #92000e;

    width: 2rem;
    height: 2rem;

    bottom: 3.5rem;
    left: 1.5rem;

    font-size: 1.4rem;
    line-height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
