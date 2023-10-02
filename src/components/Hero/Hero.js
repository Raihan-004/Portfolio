import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hi there! <br/> 
        I'm Raihan, and welcome to my Portfolio...
        </SectionTitle>
        <SectionText>
        I possess a deep understanding of algorithms, data processes, model evaluation, and deployment. I have a unique talent for combining functionality with visual appeal, integrating seamlessly with machine learning models. Known for my exceptional work ethic, I approach tasks with boundless enthusiasm, always committed to going the extra mile and consistently achieving optimal results.
        </SectionText>
        <Button onClick={() => window.location='https://gmail.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;