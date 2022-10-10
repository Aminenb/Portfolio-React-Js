import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Engineering Degree",
    years: "2020 - Present",
    content:
      "Mohammed VI International Academy Of Civil Aviation (AIAC) - Software Engineering",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2018 - 2020",
    content:
      "Prepatory Classes For Engineering Schools Mathematics and Physics (MP)",
  },
  {
    id: 3,
    title: "baccalaureate",
    years: "2017 - 2018",
    content:
      "Science of mathematics - Option A",
  },
];

const experienceData = [
  
  {
    id: 2,
    title: "Front-End Developer",
    years: "2020 - Present",
    content:
      "Web and mobile development - UI/UX design",
  },
  {
    id: 1,
    title: "Trainee",
    years: "July 2020 - August 2020",
    content:
      "Web and Mobile development Engineer Intern in the company Centexam.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
