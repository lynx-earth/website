import styled, { css } from "styled-components";

interface SolutionsProps {
  solution: number;
}

const SolutionsSectionContainer = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  padding: 5rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.colors.background_light};

  @media (min-width: 281px) {
    padding: 5rem 2rem 2rem 2rem;
  }

  @media (min-width: 913px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    padding: 8rem 0 0 0;
  }

  @media (min-width: 1440px) {
    height: 85vh;
  }
`;

const SolutionSectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.text_dark};
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 913px) {
    position: absolute;
    top: 5%;
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

    /* ${(props) =>
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
          `} */
  }
`;

const SolutionImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
`;

const SolutionTitle = styled.h3`
  width: 90%;
  height: 1.5rem;
  font-size: ${(props) => props.theme.fontSize.h4};
  color: ${(props) => props.theme.colors.text_dark};
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    height: 2.5rem;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

const SolutionText = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.colors.tertiary};
  line-height: 1.5;
  padding: 1rem;

  @media (min-width: 281px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.text};
  }
`;

export {
  SolutionsSectionContainer,
  SolutionSectionTitle,
  Solution,
  SolutionImage,
  SolutionTitle,
  SolutionText,
};
