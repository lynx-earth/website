import React from "react";
import {
  SolutionsSectionContainer,
  SolutionSectionTitle,
  Solution,
  SolutionImage,
  SolutionTitle,
  SolutionText,
} from "./Solutions.style";
import riceField from "../assets/rice-field.jpg";
import forest from "../assets/forest.jpg";
import solarPanels from "../assets/solar-panel.jpg";
import { Element } from "react-scroll";

import _solutionsData from "../data/solutions.json";
import { _solutions } from "../globals";

const solutions = _solutionsData as _solutions[];

const Solutions = () => {
  return (
    <Element name="solutions">
      <SolutionsSectionContainer>
        <SolutionSectionTitle>Our Solution</SolutionSectionTitle>
        <Solution solution={1}>
          <SolutionImage src={riceField} />
          <SolutionTitle>{solutions[0].title}</SolutionTitle>
          <SolutionText>{solutions[0].subtitle}</SolutionText>
        </Solution>
        <Solution solution={2}>
          <SolutionImage src={forest} />
          <SolutionTitle>{solutions[1].title}</SolutionTitle>
          <SolutionText>{solutions[1].subtitle}</SolutionText>
        </Solution>
        <Solution solution={3}>
          <SolutionImage src={solarPanels} />
          <SolutionTitle>{solutions[2].title}</SolutionTitle>
          <SolutionText>{solutions[2].subtitle}</SolutionText>
        </Solution>
      </SolutionsSectionContainer>
    </Element>
  );
};

export default Solutions;
