import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

            <Details
              position="SPES Baby"
              company="Municipal Capitol of Tarlac City"
              companyLink="#"
              time="Summer 2018"
              address="Capitol Macabulos Drive 2300 Tarlac Tarlac"
              //work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
            />
      

            <Details
              position="Work Immersion Assistant"
              company="City Hall Tarlac City"
              companyLink="#"
              time="Summer 2019"
              address="2300, Tarlac, Philippines"
              //work="Worked on a team responsible for developing a new mobile app
              //feature that allowed users to create and share short-form video
              //content, including designing and implementing a new user interface
              //and developing the backend infrastructure to support the feature."
            />

             <Details
              position="Technical Intern"
              company="My Creative Panda"
              companyLink="https://mycreativepanda.com/"
              time="2023"
              address="8070 8th St., Fairlane Subdivision, San Vicente Tarlac City, Tarlac 2300"
              work="Worked on a team responsible for updating news and events of some LGU website and, help seniors to develop some pages."
            />

             <Details
              position="Junior Web Developer"
              company="My Creative Panda"
              companyLink="https://mycreativepanda.com/"
              time="2023"
              address="8070 8th St., Fairlane Subdivision, San Vicente Tarlac City, Tarlac 2300"
              work="Worked on a team responsible for developing a creative website that meets the client's needs"
            />   

             <Details
              position="Technical IT Staff"
              company="Ramos General Hospital"
              companyLink="#"
              time="2023-2024"
              address="769 P. Hilario St. Brgy. Ligtasan, Tarlac City, Tarlac 2300"
              work="Worked on a team responsible for Technical Problems within the organization."
            />   
          </ul>
        </div>
        </div>
    );
};

export default Experience;
