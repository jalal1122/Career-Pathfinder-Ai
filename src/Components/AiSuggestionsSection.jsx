import React, { useState } from "react";

const AiSuggestionsSection = () => {
  const skillsNeededHeading = localStorage.getItem("skillsNeededHeading");
  const skillsNeededSubHeadings = localStorage.getItem(
    "skillsNeededSubHeadings"
  );
  const skillsNeededSubHeadinsDescription = localStorage.getItem(
    "skillsNeededSubHeadinsDescription"
  );

  const learningRoadmapHeading = localStorage.getItem("learningRoadmapHeading");
  const learningRoadmapSubHeadings = localStorage.getItem(
    "learningRoadmapSubHeadings"
  );
  const learningRoadmapSubHeadinsDescription = localStorage.getItem(
    "learningRoadmapSubHeadinsDescription"
  );

  const [careerOptionHeading,setcareerOptionHeading] = useState(
    JSON.parse(localStorage.getItem("bestCareerHeading"))
  );
  const [careerOptionSubHeadings,setcareerOptionSubHeadings] = useState(
    JSON.parse(localStorage.getItem("bestCareerSubHeadings"))
  );
  const [careerOptionSubHeadingsDescription,setcareerOptionSubHeadingsDescription] = useState(
    JSON.parse(localStorage.getItem("bestCareerSubHeadingsDescription"))
  );

  return (
    <>
      <div className="SectionContainer bg-white w-full h-screen text-[#0D2B4E]">
        <div className="suggestion-div bg-[#CBDDE7] w-full h-[50vh] p-4">
          <h1 className="text-8xl font-bold text-center mt-30">
            Ai Powered-Suggestions
          </h1>
          <div className="suggestions-cards rounded-lg p-4 flex items-center justify-center gap-4">
            <div className="card w-[27vw] p-4 rounded-2xl bg-[#CBDDE7] border-18 border-white ">
              {careerOptionHeading && (
                <h1 className="text-4xl text-center text-[#0D2B4E] font-semibold">
                  <div className="flex items-center justify-center p-3 bg-white w-auto h-auto"><img src="/career-option.png" alt="" className="w-25"/></div> {careerOptionHeading}
                </h1>
              )}
              {careerOptionSubHeadings && careerOptionSubHeadings.map((heading, index) => {
                return (
                  <h1 key={index} className="text-3xl text-[#0D2B4E]"> {heading} :</h1>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSuggestionsSection;
