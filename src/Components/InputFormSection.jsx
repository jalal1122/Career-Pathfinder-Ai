import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoogleGenAI } from "@google/genai";
import { Link } from "react-scroll";

const InputFormSection = ({ handleDataAvailability, handleLoading }) => {
  const apiKey = import.meta.env.VITE_API_API_KEY;

  const ai = new GoogleGenAI({ apiKey: apiKey });

  const [btnDisabled, setBtnDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    localStorage.clear();
    handleDataAvailability(false);
    handleLoading(true);
    
    

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `my name is ${data.FullName} and I am interested in ${data.interests}. I have skills in ${data.skills} and my education is ${data.education}. I prefer ${data.workType} work style. My career goals are ${data.careerGoals}. so give me Best-fit career options, Skills needed, Learning roadmap and make it short`,
    });
    let res = response.text.replaceAll("*", "");

    console.log(res);

    const paragraphs = res.split("\n\n");

    // Career Options filtering
    let bestCareerHeading = paragraphs[1];
    let bestCareerSubHeadings = paragraphs[2].split("\n").map((heading) => {
      return heading.split(":")[0];
    });
    let bestCareerSubHeadingsDescription = paragraphs[2]
      .split("\n")
      .map((heading) => {
        return heading.split(":")[1];
      });

    // skills Needed filtering

    let skillsNeededHeading = paragraphs[3];
    let skillsNeededSubHeadings = paragraphs[4].split("\n").map((heading) => {
      return heading.split(":")[0];
    });
    let skillsNeededSubHeadinsDescription = paragraphs[4]
      .split("\n")
      .map((heading) => {
        return heading.split(":")[1];
      });

    // Learning Roadmap filtering

    let learningRoadmapHeading = paragraphs[5];
    let learningRoadmapSubHeadings = paragraphs[6]
      .split("\n")
      .map((heading) => {
        return heading.split(":")[0];
      });

    let learningRoadmapSubHeadinsDescription = paragraphs[6]
      .split("\n")
      .map((heading) => {
        return heading.split(":")[1];
      });

    localStorage.setItem(
      "bestCareerHeading",
      JSON.stringify(bestCareerHeading)
    );

    localStorage.setItem(
      "bestCareerSubHeadings",
      JSON.stringify(bestCareerSubHeadings)
    );

    localStorage.setItem(
      "bestCareerSubHeadingsDescription",
      JSON.stringify(bestCareerSubHeadingsDescription)
    );

    localStorage.setItem(
      "skillsNeededHeading",
      JSON.stringify(skillsNeededHeading)
    );

    localStorage.setItem(
      "skillsNeededSubHeadings",
      JSON.stringify(skillsNeededSubHeadings)
    );

    localStorage.setItem(
      "skillsNeededSubHeadinsDescription",
      JSON.stringify(skillsNeededSubHeadinsDescription)
    );

    localStorage.setItem(
      "learningRoadmapHeading",
      JSON.stringify(learningRoadmapHeading)
    );

    localStorage.setItem(
      "learningRoadmapSubHeadings",
      JSON.stringify(learningRoadmapSubHeadings)
    );

    localStorage.setItem(
      "learningRoadmapSubHeadinsDescription",
      JSON.stringify(learningRoadmapSubHeadinsDescription)
    );

    handleDataAvailability(true);
  };

  return (
    <>
      {/* Input SEction main div */}
      <div
        className="w-full h-screen flex justify-center items-center bg-[#D7E4EA] text-[#0D2B4E]"
        id="inputFormSection"
      >
        {/* centered input section div */}
        <div className="input-section-container flex flex-col justify-center items-center gap-10 w-[50vw] h-[80vh] text-center">
          {/* Heading  */}
          <h1 className="text-6xl font-bold">
            &quot;Tell Us About Yourself&quot;
          </h1>
          {/* Description */}
          <p className="text-2xl font-semibold">
            Help us understand your background, interests, and goals. Our AI
            assistant will use this information to generate personalized career
            paths tailored just for you.
          </p>
          {/* Input Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="inputQuestionForm flex flex-wrap justify-center items-center gap-10 p-5"
          >
            {/* FullName Div */}
            <div className="fullName input-section-inputs gap-2">
              <label htmlFor="fullName" className="label-class">
                Full Name
              </label>
              <input
                defaultValue=""
                {...register("FullName", { required: true })}
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="bg-white input-class"
              />
              {errors.FullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Interests Div */}
            <div className="interests input-section-inputs gap-2">
              <label htmlFor="interests" className="label-class">
                Interests
              </label>
              <input
                {...register("interests", { required: true })}
                type="text"
                id="interests"
                placeholder="Enter your interests"
                className="bg-white input-class"
              />
              {errors.interests && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Skills Div */}
            <div className="skills input-section-inputs gap-2">
              <label htmlFor="skills" className="label-class">
                Skills
              </label>
              <input
                {...register("skills", { required: true })}
                type="text"
                id="skills"
                placeholder="What skills do you have?"
                className="bg-white input-class"
              />
              {errors.skills && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Education Div */}
            <div className="education input-section-inputs gap-2">
              <label htmlFor="education" className="label-class">
                Education
              </label>
              <input
                {...register("education", { required: true })}
                type="text"
                id="education"
                placeholder="what is your education?"
                className="bg-white input-class"
              />
              {errors.education && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Work Type Select Div */}
            <div className="workType input-section-inputs gap-2">
              <label htmlFor="workType" className="label-class">
                Prefered Work Style
              </label>
              <select
                {...register("workType")}
                id="workType"
                className="bg-white p-3 rounded-[8px] shadow-md text-[#0D2B4E] text-xl w-[250px]"
              >
                <option value="No Preference">No Preference</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">Onsite</option>
              </select>
            </div>
            {/* Career Goals Div */}
            <div className="workType input-section-inputs gap-2">
              <label htmlFor="careerGoals" className="label-class">
                Career Goals
              </label>
              <textarea
                {...register("careerGoals")}
                placeholder="your career goals here"
                id="careerGoals"
                rows={1}
                className="bg-white input-class"
              ></textarea>
            </div>
            {/* Generate Career Path Button */}
            {/* <Link to="aiSuggestionsSection" smooth={true} duration={500} offset={-100}> */}
              <button
                {...register("submit")}
                onClick={() => {
                  isSubmitting ? setBtnDisabled(true) : setBtnDisabled(false);
                }}
                disabled={btnDisabled}
                type="submit"
                className="rounded-2xl bg-[#0D2B4E] text-white px-9 py-3 text-2xl hover:scale-105 active:scale-95"
              >
                Generate Career Path 🔍
              </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default InputFormSection;
