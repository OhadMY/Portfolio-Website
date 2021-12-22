import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Ohad Mor Yosef <br />
        Fullstack Web-Developer
      </SectionTitle>
      <SectionText>
        Need to write some meaningful information that will sum up my ideals
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.co.il/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
