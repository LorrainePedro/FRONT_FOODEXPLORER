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

  user-select: none;
`;

export const Content = styled.div`
  .headerMenu {
    background-color: #001119;
    display: flex;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;
  }

  .pixIcon {
    margin-top: 0.4rem;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .pixIcon:hover {
    transform: rotate(180deg);
    color: red;
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
    transition: 0.8s ease;
  }

  li:hover p {
    color: ${({ theme }) => theme.COLORS.BLUE};
    transition: color 0.4s ease;
  }

  li:hover span {
    color: ${({ theme }) => theme.COLORS.RED};
    transition: color 0.4s ease;
  }

  .back,
  p {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.INPUT};
  }

  button {
    color: red;
  }

  li {
  }
`;

export const Logout = styled.div``;
