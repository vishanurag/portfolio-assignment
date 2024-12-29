import React from 'react'
import SectionHeading from './assets/SectionHeading'
import College from './assets/College'

const Education = () => {

  const eduData = [
    {
      "name": "Madhav Institute of Technology & Science, Gwalior",
      "degree": "Bachelor of Technology in Computer Science & Engineering",
      "duration": "2024-2027",
      "cgpaTitle": " ",
      "cgpa": " ",
      "lineHeight": true
    },
    {
      "name": "Dr. B.R. Abmedkar Polytechnic College, Gwalior",
      "degree": "Engineering Diploma in Computer Science & Engineering",
      "duration": "2021-2024",
      "cgpaTitle": "CGPA: ",
      "cgpa": " 8.8/10",
      "lineHeight": true
    },
    {
      "name": "Sanskar Public School, Gwalior",
      "degree": "High School",
      "duration": "2020-2021",
      "cgpaTitle": "Parcentage: ",
      "cgpa": " 76/100",
      "lineHeight": false
    },
  ];

  return (
    <div id='Education'>
      <SectionHeading title={'Educational Qualifications'} />

      <div className="container mt-10 md:px-20">

        {
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

export default Education
