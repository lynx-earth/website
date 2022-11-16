import styled, { css } from "styled-components";

interface SolutionsProps {
  solution: number;
}

const SolutionsSectionContainer = styled.section`
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  padding-top: 2rem;

  @media (min-width: 768px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Solution = styled.article<SolutionsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  flex-basis: 25%;
  padding: 2.5rem;

  @media (min-width: 768px) {
    margin: 0;

    ${(props) =>
      props.solution === 1
        ? css`
            margin-top: 0rem;
          `
        : props.solution === 2
        ? css`
            margin-top: 8rem;
          `
        : css`
            margin-top: 16rem;
          `}
  }
`;

const SolutionImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 1rem;
`;

const SolutionTitle = styled.h3`
  width: 90%;
  height: 3.5rem;
  font-size: ${(props) => props.theme.fontSize.h3};
  color: ${(props) => props.theme.colors.text_dark};
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const SolutionText = styled.p`
  font-size: ${(props) => props.theme.fontSize.text};
  color: ${(props) => props.theme.colors.tertiary};
  line-height: 1.5rem;
  padding: 1rem;
`;

export {
  SolutionsSectionContainer,
  Solution,
  SolutionImage,
  SolutionTitle,
  SolutionText,
};
