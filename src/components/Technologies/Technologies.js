import React from "react";
import { DiReact, DiRedis, DiStreamline } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Here are some of the technologies I have been working with so far
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" style={{ "marginRight": "5px" }} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js <br />
            Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRedis size="3rem" style={{ "marginRight": "5px" }} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.Js <br />
            Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiStreamline size="3rem" style={{ "marginRight": "5px" }} />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MYSQL <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
