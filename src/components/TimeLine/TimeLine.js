import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {


  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am a dedicated and enthusiastic machine learning enthusiast with a strong understanding of algorithms, data preprocessing, model evaluation, and deployment. <br />
      I am renowned for an dedication and an exceptional work ethic, tasks are approached
      with boundless enthusiasm and a determination to go the extra mile, consistently
      achieving optimal results. <br />
      I possess skills in HTML, CSS, and JavaScript, allowing me to create functional
      and visually appealing web applications that integrate machine learning models
      seamlessly.

      </SectionText>
      <br /><br />
      <SectionDivider />
      <br />
      <br />
      <SectionTitle>Education</SectionTitle>
      <SectionText> 
      Pursuing Bachelor of Science in CSE <br />
      Chittagong University of Engineering Technology, 2019-2024 <br />
      CGPA: 3.85/4.00 <br /> <br />
      Higher Secondary School Certificate <br />
      Chattogram Govt. Model School College, 2016-18 <br />
      GPA: 5.00/5.00 <br /> <br />
      Secondary School Certificate <br />
      Katakhali High School, 2014-16 <br />
      GPA: 5.00/5.00

      </SectionText>
    </Section>
  );
};

export default Timeline;