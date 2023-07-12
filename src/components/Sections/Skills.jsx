import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent: "",
  progressData: [
    {
      id: 1,
      name: "Python",
      percentage: 95,
    },
    {
      id: 1,
      name: "Django / Django Rest Framework",
      percentage: 95,
    },
    {
      id: 1,
      name: "JavaScript",
      percentage: 90,
    },
    {
      id: 1,
      name: "React JS / Next Js",
      percentage: 90,
    },

    {
      id: 3,
      name: "AWS",
      percentage: 90,
    },
    {
      id: 2,
      name: "React Native",
      percentage: 90,
    },
    {
      id: 4,
      name: "Selenium",
      percentage: 90,
    },
    {
      id: 4,
      name: "Machine Learning",
      percentage: 85,
    },
    ,
    {
      id: 4,
      name: "PyQt5",
      percentage: 90,
    },
    ,
    {
      id: 4,
      name: "HTML / CSS",
      percentage: 90,
    },
  ],
};

function Skills() {
  return (
    <>
      <div className="row -mt-50">
        {skillData.progressData.map((progress) => (
          <div className="col-md-6 mt-50" key={progress.id}>
            <TrackVisibility once>
              <Skill progress={progress} />
            </TrackVisibility>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
