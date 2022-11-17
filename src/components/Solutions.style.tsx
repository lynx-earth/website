import styled, { css } from "styled-components";

interface SolutionsProps {
  solution: number;
}

const SolutionsSectionContainer = styled.section`
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 913px) {
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
  padding: 1rem 0rem;

  @media (min-width: 768px) {
    padding: 2rem 7rem;
  }

  @media (min-width: 913px) {
    padding: 0;

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
  height: 2.5rem;
  font-size: ${(props) => props.theme.fontSize.h4};
  color: ${(props) => props.theme.colors.text_dark};
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    height: 3.5rem;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

const SolutionText = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.tertiary};
  line-height: 1.5;
  padding: 1rem;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.text};
  }
`;

export {
  SolutionsSectionContainer,
  Solution,
  SolutionImage,
  SolutionTitle,
  SolutionText,
};
