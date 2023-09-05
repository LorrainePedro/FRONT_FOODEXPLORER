import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 2rem;

    > Form {
      margin-top: 20rem;
      background: ${({ theme }) => theme.COLORS.LOGIN};
      width: 47rem;
      height: 54rem;
      border-radius: 1.6rem;
      padding: 6.5rem;
      > h1 {
        display: block;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: "Poppins";
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 2rem;
        text-align: center;
        margin-bottom: 0.8rem;
      }
    }
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.07rem;
  margin-top: 16rem;
  margin-right: 4rem;

  img {
    width: 4.3rem;
  }

  h1 {
    font-family: "Roboto", serif;
    font-size: 3.7rem;
    font-weight: bold;
  }

  img:hover {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }

  h1:hover {
    transform: translateX(1rem);
    transition: transform 0.5s ease;
  }
`;

export const Form = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;

  h1 {
    display: none;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LABELS};
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    margin-top: 2.4rem;
  }

  .loginButton {
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
`;

export const Register = styled.div`
  margin: 0 auto;

  a {
    font-family: "Poppins";
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
  }
`;
