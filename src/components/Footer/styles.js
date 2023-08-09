import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.HEADERFOOTER};
  width: 100%;
  min-width: 44.3rem;
  height: 7.7rem;

  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.9rem 2.7rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.2rem;
    }

    h1 {
      font-family: "Roboto";
      font-size: 1.5rem;
      color: #4d585e;
    }
  }

  > span {
    font-family: "DM Sans", sans-serif;
    color: #fffaf1;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
