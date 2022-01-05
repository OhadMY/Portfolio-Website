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
      <SectionText nopadding nomarginleft>
        Full stack developer graduate with a passion of developing scalable web
        applications. <br />
        I'm efficient and highly motivated.
      </SectionText>
      <Button
        onClick={() =>
          window.open("/assets/OhadMorYosefResume.pdf", "_blank")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
