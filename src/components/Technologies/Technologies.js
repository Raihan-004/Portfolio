import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    {/* <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText> */}
    <List>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Good Level</ListTitle>
          <ListParagraph>
          C, C++, Python <br /> HTML, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Mid Level</ListTitle>
          <ListParagraph>
            Problem Solving (CP) <br />
            Microsoft office <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Basic Level</ListTitle>
          <ListParagraph>
          React, Javascript <br /> OOP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
    <br />
    <SectionDivider colorAlt />
  </Section>
 
);

export default Technologies;