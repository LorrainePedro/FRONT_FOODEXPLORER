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

  label {
    color: ${({ theme }) => theme.COLORS.GRAY};
    //font-family: "Roboto";
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  padding: 3.2rem;
  margin: 0 auto;
  height: 100vh;

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY};
    display: flex;
    align-items: center;
    gap: 1rem;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: "Poppins";
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;

    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
  }
`;

export const Form = styled.div`
  width: 36.5rem;

  select {
    background-color: ${({ theme }) => theme.COLORS.INPUT};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 4.8rem;
    padding: 1.4rem;
    border: none;
    border-radius: 0.5rem;
  }

  .firstSection {
    display: flex;
    flex-direction: column;
  }

  Textarea {
    width: 36.4rem;
    height: 17rem;
  }
`;

export const InputWrapper = styled.div`
  .selectCtg {
    display: flex;
    flex-direction: column;
  }
  /* label {
    color: ${({ theme }) => theme.COLORS.LABELS};
    font-size: 1.6rem;
  } */

  /* .labels {
    margin-top: 1rem;
    margin-bottom: 1rem;
  } */
`;

export const ImageUpload = styled.div`
  border: 1px solid red;
  height: 4.8rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  border-radius: 0.5rem;

  .addFile {
    display: none;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LABELS};
    font-family: "Poppins", serif;
    font-size: 1.4rem;
    font-weight: 100;
    line-height: 2.4rem;
    padding: 0.5rem;
  }
`;

export const IngredientsTags = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  height: 4.8rem;
  border-radius: 0.5rem;
`;

export const Description = styled.div``;
