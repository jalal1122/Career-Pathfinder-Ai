import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AiSuggestionsSection = ({ isDataAvailable}) => {
  // Career Options States
  const [careerOptionHeading, setcareerOptionHeading] = useState(null);
  const [careerOptionSubHeadings, setcareerOptionSubHeadings] = useState(null);
  const [
    careerOptionSubHeadingsDescription,
    setcareerOptionSubHeadingsDescription,
  ] = useState(null);

  // Skills Needed States

  const [skillsNeededHeading, setskillsNeededHeading] = useState(null);
  const [skillsNeededSubHeadings, setskillsNeededSubHeadings] = useState(null);
  const [
    skillsNeededSubHeadinsDescription,
    setskillsNeededSubHeadinsDescription,
  ] = useState(null);

  // Learning Roadmap States
  const [learningRoadmapHeading, setlearningRoadmapHeading] = useState(null);
  const [learningRoadmapSubHeadings, setlearningRoadmapSubHeadings] =
    useState(null);
  const [
    learningRoadmapSubHeadinsDescription,
    setlearningRoadmapSubHeadinsDescription,
  ] = useState(null);

  useEffect(() => {
    if (isDataAvailable) {
      setcareerOptionHeading(
        JSON.parse(localStorage.getItem("bestCareerHeading"))
      );
      setcareerOptionSubHeadings(
        JSON.parse(localStorage.getItem("bestCareerSubHeadings"))
      );
      setcareerOptionSubHeadingsDescription(
        JSON.parse(localStorage.getItem("bestCareerSubHeadingsDescription"))
      );
      setskillsNeededHeading(
        JSON.parse(localStorage.getItem("skillsNeededHeading"))
      );
      setskillsNeededSubHeadings(
        JSON.parse(localStorage.getItem("skillsNeededSubHeadings"))
      );
      setskillsNeededSubHeadinsDescription(
        JSON.parse(localStorage.getItem("skillsNeededSubHeadinsDescription"))
      );
      setlearningRoadmapHeading(
        JSON.parse(localStorage.getItem("learningRoadmapHeading"))
      );
      setlearningRoadmapSubHeadings(
        JSON.parse(localStorage.getItem("learningRoadmapSubHeadings"))
      );
      setlearningRoadmapSubHeadinsDescription(
        JSON.parse(localStorage.getItem("learningRoadmapSubHeadinsDescription"))
      );
    }
  }, [isDataAvailable]);

  console.log(careerOptionHeading);
  

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div ref={ref} initial={{opacity: 0, y: 50}} animate={inView ? {opacity: 1, y: 0 } : {}} transition={{duration: 1.2, ease: "easeInOut"}}>
      {/* Section Div */}
      <div className="SectionContainer bg-white w-full text-[#0D2B4E]">
        {/* Heading Div*/}
        <div className="suggestion-div bg-[#CBDDE7] w-full h-[50vh] p-4 mb-20">
          {/* Heading */}
          <h1 className="md:text-6xl text-4xl font-bold text-center mt-30 mb-20">
            Ai Powered-Suggestions
          </h1>
          
          {/* Loader */}
          {/* Suggestion Cards Div */}
        </div>
        {isDataAvailable && (
          <div className="suggestions-cards rounded-lg p-10 flex justify-center gap-10 flex-wrap 2xl:flex-wrap mt-[-25vh]">
            {/* Best Career Card */}
            <div className="card-career w-[300px] sm:w-[450px] md:p-8 p-3 rounded-2xl bg-[#CBDDE7] md:border-18 border-10 border-white shadow-md shadow-black/30">
              {careerOptionHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold flex items-center justify-center gap-2 mb-5">
                  <div className="flex items-center justify-center p-3 xl:p-5 bg-white h-auto w-25 rounded-full invert">
                    <img src="/career-option.png" alt="" className="w-15" />
                  </div>{" "}
                  {careerOptionHeading}
                </h1>
              )}
              {careerOptionSubHeadings &&
                careerOptionSubHeadings.map((heading, index) => (
                  <div key={index}>
                    <h1
                      className={`${
                        index === 0 ? "text-4xl" : "text-3xl"
                      } text-[#0D2B4E] mb-5 font-semibold text-center break-all`}
                    >
                      {heading} {index === 0 ? " " : ":"}
                    </h1>
                    {careerOptionSubHeadingsDescription[index] && (
                      <p className="text-2xl text-black   mb-4 font-semibold text-center">
                        {careerOptionSubHeadingsDescription[index]}
                      </p>
                    )}
                  </div>
                ))}
            </div>
            {/* Skills Needed Card */}
            <div className="card-skills-needed w-[300px] sm:w-[450px] md:p-8 p-3 rounded-2xl bg-[#CBDDE7] md:border-18 border-10 border-white shadow-md shadow-black/30">
              {setskillsNeededHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold flex items-center justify-center gap-2 mb-5">
                  <div className="flex items-center justify-center p-3 xl:p-5 bg-white h-auto w-25 rounded-full invert">
                    <img src="/skills-needed.png" alt="" className="w-15" />
                  </div>{" "}
                  {skillsNeededHeading}
                </h1>
              )}
              {skillsNeededSubHeadings &&
                skillsNeededSubHeadings.map((heading, index) => (
                  <div key={index}>
                    <h1 className="text-3xl text-[#0D2B4E] mb-5 font-semibold text-center break-all">
                      {heading} :
                    </h1>
                    {skillsNeededSubHeadinsDescription[index] && (
                      <p className="text-2xl text-black   mb-4 font-semibold text-center">
                        {skillsNeededSubHeadinsDescription[index]}
                      </p>
                    )}
                  </div>
                ))}
            </div>
            {/* Learning RoadMap Card */}
            <div className="card-learning-roadmap w-[300px] sm:w-[450px] md:p-8 p-3 rounded-2xl bg-[#CBDDE7] md:border-18 border-10 border-white shadow-md shadow-black/30">
              {learningRoadmapHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold flex items-center justify-center gap-2 mb-5">
                  <div className="flex items-center justify-center p-3 xl:p-5 bg-white h-auto w-25 rounded-full invert">
                    <img src="/road-map.png" alt="" className="w-15" />
                  </div>{" "}
                  {learningRoadmapHeading}
                </h1>
              )}
              {learningRoadmapSubHeadings &&
                learningRoadmapSubHeadings.map((heading, index) => (
                  <div key={index}>
                    <h1 className="text-3xl text-[#0D2B4E] mb-5 font-semibold text-center break-all">
                      {heading} :
                    </h1>
                    {learningRoadmapSubHeadinsDescription[index] && (
                      <p className="text-2xl text-black   mb-4 font-semibold text-center">
                        {learningRoadmapSubHeadinsDescription[index]}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AiSuggestionsSection;
