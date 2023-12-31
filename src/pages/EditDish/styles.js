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
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.2rem;
  margin: 0 auto;

  span {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: "Roboto";
    font-size: 1.6rem;
  }

  .back {
    a {
      color: ${({ theme }) => theme.COLORS.GRAY};
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h2 {
        font-family: "Poppins";
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 140%;
      }
    }
  }

  .icon {
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(1rem);
    }
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: "Poppins";
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 140%;

    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1024px) {
    a {
      > h2 {
        font-weight: bold;
        font-size: 2.4rem;
      }
    }

    .ingredientsRow {
      display: flex;
      justify-content: space-between;

      .addTags {
        width: 83rem;
      }

      .price {
        width: 25rem;

        position: relative;
        bottom: 0.6rem;
      }
    }
  }
`;

export const Form = styled.div`
  width: 36.4rem;

  @media (min-width: 1024px) {
    width: 112rem;
  }
`;

export const InputWrapper = styled.div`
  .imgNew,
  .nameNew,
  .selectNew {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }

  select {
    background: ${({ theme }) => theme.COLORS.INPUT};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 4.8rem;
    padding: 1.6rem;
    border: none;
    border-radius: 0.5rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    .imgNew {
      width: 23rem;
    }
    .nameNew {
      width: 46rem;
    }
    .selectNew {
      width: 36.5rem;
    }

    .addFile {
      width: 21rem;
    }
  }
`;

export const ImageUpload = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.INPUT};

  .addFile {
    position: absolute;
    width: 36rem;
    height: 4.8rem;
    opacity: 0;

    margin-left: -2rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LABELS};
    font-family: "Poppins", serif;
    font-size: 1.4rem;
    font-weight: 100;
    line-height: 2.4rem;
    padding: 0.5rem;
  }

  @media (min-width: 1024px) {
    .addFile {
      width: 23rem;
    }
  }
`;

export const IngredientsTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.6rem;

  .addTags {
    background: ${({ theme }) => theme.COLORS.INPUT};
    min-height: 4.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 0.5rem;
    padding: 0.8rem;
    border-radius: 0.8rem;

    ${({ showTagsInTwoLines }) =>
      showTagsInTwoLines &&
      css`
        flex-direction: column;
        align-items: flex-start;
        margin-top: 0;
      `}
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  Textarea {
    width: 100%;
    height: 17rem;
  }

  .buttonRow {
    display: flex;
    gap: 3.2rem;

    .addButton {
      background: ${({ theme }) => theme.COLORS.TOMATOBUTTON};
    }
    .delButton {
      background: ${({ theme }) => theme.COLORS.INPUT};
    }

    .addButton,
    .delButton {
      font-family: "Poppins", serif;
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 2.4rem;
      padding: 2.4rem 1.2rem;

      @media (min-width: 1024px) {
        width: 19rem;
        position: relative;
        left: 70.7rem;
      }
    }
  }
`;
