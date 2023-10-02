import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Educations = () => {

  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>
      <SectionDivider />
      <SectionText> 
        <br />
      Pursuing Bachelor of Science in CSE <br />
      Chittagong University of Engineering Technology 2019 to ongoing <br />
      CGPA 3.85/4.00 <br /> <br />
      Higher Secondary School Certificate <br />
      Chattogram Govt. Model School College, 2016-18, Science <br />
      GPA 5.00/5.00 <br /> <br />
      Secondary School Certificate <br />
      Katakhali High School, 2014-16 <br />
      GPA 5.00/5.00

      </SectionText>
    </Section>
  );
};

export default Educations;