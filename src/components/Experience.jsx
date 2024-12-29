import React from 'react'
import SectionHeading from './assets/SectionHeading';
import College from './assets/College';

const Experience = () => {

  const eduData = [
    {
      "name": "Coders Cafe Club",
      "degree": "Software Developer & Founding Member",
      "duration": "Mar 2024 - Sep 2024",
      "cgpaTitle": "Gwalior, India",
      "cgpa": " ",
      "lineHeight": true
    },
    {
      "name": "Gurukul Dream Foundation",
      "degree": "Web Developer Intern",
      "duration": "Feb 2024 - Mar 2024",
      "cgpaTitle": "Gwalior, India",
      "cgpa": " ",
      "lineHeight": true
    },
    {
      "name": "Indo Ambercan Children's Academy",
      "degree": "Web Developer Intern",
      "duration": "Feb 2023 - May 2023",
      "cgpaTitle": "Ayodhya, India",
      "cgpa": " ",
      "lineHeight": false
    },
  ];


  return (
    <div id='Experience'>
      <SectionHeading title={'My Experience'} />

      <div className="container mt-10 md:px-20">

        {
          // Using College Component as Experience/Company Component 😅🧑‍💻...
          eduData.map((edu, index) => {
            return (
              <College key={index} name={edu.name} degree={edu.degree} duration={edu.duration} cgpaTitle={edu.cgpaTitle} cgpa={edu.cgpa} lineHeight={edu.lineHeight} />
            );
          })
        }

      </div>
    </div>
  )
}

export default Experience
