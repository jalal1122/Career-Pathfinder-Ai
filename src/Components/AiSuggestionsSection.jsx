import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const AiSuggestionsSection = ({ isDataAvailable, isLoading, handleLoading}) => {
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
     
      handleLoading(false)
    }
  }, [isDataAvailable, isLoading, handleLoading]);

  return (
    <>
      {/* Section Div */}
      <div className="SectionContainer bg-white w-full text-[#0D2B4E] p-10">
        {/* Heading Div*/}
        <div className="suggestion-div bg-[#CBDDE7] w-full h-[50vh] p-4">
          {/* Heading */}
          <h1 className="text-8xl font-bold text-center mt-30 mb-20">
            Ai Powered-Suggestions
          </h1>
          
          {/* Loader */}
          {isLoading && <Loader  />}
          {/* Suggestion Cards Div */}
        </div>
        {isDataAvailable && (
          <div className="suggestions-cards rounded-lg p-4 flex items-center justify-center gap-10 flex-wrap-reverse mt-[-25vh]">
            {/* Best Career Card */}
            <div className="card-career w-[40vw] p-8 rounded-2xl bg-[#CBDDE7] border-18 border-white shadow-md shadow-black/30">
              {careerOptionHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold flex items-center justify-center gap-2 mb-5">
                  <div className="flex items-center justify-center p-5 bg-white h-auto w-25 rounded-full invert">
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
                      } text-[#0D2B4E] mb-5 font-semibold text-center`}
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
            <div className="card-skills-needed w-[40vw] p-8 rounded-2xl bg-[#CBDDE7] border-18 border-white shadow-md shadow-black/30">
              {setskillsNeededHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold flex items-center justify-center gap-2 mb-5">
                  <div className="flex items-center justify-center p-5 bg-white h-auto w-25 rounded-full invert">
                    <img src="/skills-needed.png" alt="" className="w-15" />
                  </div>{" "}
                  {skillsNeededHeading}
                </h1>
              )}
              {skillsNeededSubHeadings &&
                skillsNeededSubHeadings.map((heading, index) => (
                  <div key={index}>
                    <h1 className="text-3xl text-[#0D2B4E] mb-5 font-semibold text-center">
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
            <div className="card-learning-roadmap w-[40vw] p-8 rounded-2xl bg-[#CBDDE7] border-18 border-white shadow-md shadow-black/30">
              {learningRoadmapHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold flex items-center justify-center gap-2 mb-5">
                  <div className="flex items-center justify-center p-5 bg-white h-auto w-25 rounded-full invert">
                    <img src="/road-map.png" alt="" className="w-15" />
                  </div>{" "}
                  {learningRoadmapHeading}
                </h1>
              )}
              {learningRoadmapSubHeadings &&
                learningRoadmapSubHeadings.map((heading, index) => (
                  <div key={index}>
                    <h1 className="text-3xl text-[#0D2B4E] mb-5 font-semibold text-center">
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
    </>
  );
};

export default AiSuggestionsSection;
