/* eslint-disable react/no-unescaped-entities */

import Headline from '../shared/Headline';
import skills from '../../public/skills.js'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
    return (
      <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
        <div>
          <Headline
            title={"ABOUT ME"}
            subtitle={
              "Here you will find more information about me, what I do, and my current skills mostly in terms of Data and technology"
            }
          />
        </div>

        {/* About content */}
        <div className="flex flex-col md:flex-row items-start justify-start">
          {/* left side */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-1/2 my-8"
          >
            <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
            <div className="md:w-10/12 text-lg text-[#666] mb-8">
              <p className="mb-5">
                

Dedicated and results-driven <strong>Data Scientist</strong> with a Master's Degree in Electrical Engineering - Control. Proficient in SQL, Python, Tableau, and PowerBI, I excel in extracting, cleaning, and analyzing data to develop insightful models. 
My proactive problem-solving skills, coupled with strong communication and leadership abilities, have consistently contributed to enhanced decision-making processes and efficiency throughout my diverse experience in data analysis and predictive modeling.
              </p>

              <p className="mb-5">
                
              </p>

              <p className="mb-5">
              Demonstrating robust soft skills, I bring strong communication and reporting abilities to collaborative team environments.
               With a self-motivated and organized approach, I thrive on learning new skills and showcase meticulous attention to detail in problem-solving. As a proactive leader, I have successfully managed and led teams, fostering a dynamic and productive work atmosphere.
              </p>
            </div>

            {/* <button className='btn py-4 px-14'>Contact</button> */}
          </motion.div>

          {/* right side */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-1/2 my-8"
          >
            <h4 className="text-2xl font-bold mb-8">My Skills</h4>
            <div className="flex flex-wrap gap-3 md:w-10/12">
              {skills.map((skill) => (
                <p
                  key={skill.id}
                  className="bg-slate-300 text-light py-2 px-4 rounded"
                >
                  {skill.title}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default About;