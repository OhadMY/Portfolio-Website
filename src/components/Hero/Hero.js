import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row>
    <LeftSection>
      <SectionTitle>
        Ohad Mor Yosef <br />
        Fullstack Web-Developer
      </SectionTitle>
      <SectionText>
        Full stack developer graduate with a passion of developing scalable web
        applications. <br />
        I'm efficient and highly motivated.
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/ohadmy/", "_blank")
        }
      >
        Learn More (Demo)
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
