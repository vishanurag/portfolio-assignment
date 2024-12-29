import React from 'react'
import SectionHeading from './assets/SectionHeading'

const Skills = () => {
  return (
    <div id='Skills' className='mt-[150px] min-h-[50vh] flex flex-col items-center gap-10'>
      <div className="section-heading">
        <SectionHeading title={'My Skills'} />

        <div className="flex flex-col-reverse skill-set container  items-center md:flex-row md:justify-center gap-10">


          <div className="tf-tree example ">
            <ul>
              <li>
                <span className="tf-nc rounded-lg ">Skills</span>

                <ul>
                  <li>
                    <span className="tf-nc rounded-lg">Languages</span>
                    <ul>
                          <li><span className="tf-nc rounded-lg">C</span></li>
                          <li><span className="tf-nc rounded-lg">C++</span></li>
                          <li><span className="tf-nc rounded-lg">Python</span></li>                      
                    </ul>
                  </li>
                  <li>
                    <span className="tf-nc rounded-lg">Web</span>
                    <ul>
                      <li><span className="tf-nc rounded-lg">Frontend</span>
                        <ul>
                          <li><span className="tf-nc rounded-lg">HTML</span></li>
                          <li><span className="tf-nc rounded-lg">CSS</span></li>
                          <li><span className="tf-nc rounded-lg">JavaScript</span></li>
                          <li><span className="tf-nc rounded-lg">ReactJS</span></li>
                        </ul>
                      </li>
                      <li>
                        <span className="tf-nc rounded-lg">Backend</span>
                        <ul>
                          <li><span className="tf-nc rounded-lg" >PHP</span></li>
                          <li><span className="tf-nc rounded-lg">NodeJS</span></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="tf-nc rounded-lg">Android</span>
                    <ul>
                      <li><span className="tf-nc rounded-lg">XML</span></li>
                      <li>
                        <span className="tf-nc rounded-lg">Java</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="tf-nc rounded-lg">DBMS</span>
                    <ul>
                      <li><span className="tf-nc rounded-lg">MySQL</span></li>
                      <li>
                        <span className="tf-nc rounded-lg">Oracle</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="tf-nc rounded-lg">Tools</span>
                    <ul>


                      <li>
                        <span className="tf-nc rounded-lg">IDEs</span>

                        <ul>
                          <li>
                            <span className="tf-nc rounded-lg">VSCode</span>

                          </li>
                          <li>
                            <span className="tf-nc rounded-lg min-w-[max-content]">Android Studio</span>
                          </li>
                          
                        </ul>
                      </li>
                      <li>
                        <span className="tf-nc rounded-lg">Deployment</span>

                        <ul>
                          <li>

                            <span className="tf-nc rounded-lg">Github</span>

                          </li>
                          <li>
                            <span className="tf-nc rounded-lg">AWS</span>

                          </li>
                          <li>
                            <span className="tf-nc rounded-lg">Firebase</span>
                          </li>
                        </ul>
                      </li>
                    </ul>

                  </li>
                </ul>

              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
