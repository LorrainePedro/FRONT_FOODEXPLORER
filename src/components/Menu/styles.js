import styled, { css } from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";

  background: ${({ theme }) => theme.COLORS.LOGIN};
  position: absolute;
  z-index: 4;
  width: 100%;
  left: 0;
  top: 0;

  pointer-events: none;

  opacity: 0;
  transition: 0.7s;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      pointer-events: auto;
      opacity: 1;
    `}

  .headerMenu {
    grid-area: header;
    padding: 5.9rem 2.7rem;
    height: 11.4rem;
    display: flex;
    gap: 1rem;

    p {
      font-family: "Roboto";
      font-size: 2.1rem;
    }

    .pixIcon {
      font-size: 2.4rem;
      transition: transform 0.3s ease, font-size 0.3s ease, color 0.3s ease;
    }

    .pixIcon:hover {
      transform: rotate(180deg);
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`;

export const Content = styled.div`
  grid-area: content;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  height: 122rem;
  display: flex;
  flex-direction: column;

  .options {
    padding: 2.8rem 3.6rem;

    ul {
      list-style: none;
      margin-top: 3.6rem;
    }

    li {
      padding: 1rem;
      transition: 0.8s ease;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.INPUT};
    }

    ul li:first-child p:hover {
      color: ${({ theme }) => theme.COLORS.BLUE};
      transition: color 0.4s ease;
    }

    ul li:nth-child(2):hover {
      color: ${({ theme }) => theme.COLORS.RED};
      transition: color 0.4s ease;
    }

    p,
    span {
      font-family: "Poppins";
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 140%;
    }
  }

  .list {
    margin-top: 5rem;
    width: 41.2rem;
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
`;

export const HamburgerButton = styled.div`
  height: 2.5rem;
`;
