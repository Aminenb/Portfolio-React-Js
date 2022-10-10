import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";


const progressData = [
  {
    id: 1,
    title: "Web Development",
    percantage: 90,
    progressColor: "#FFED78",
  },
  {
    id: 2,
    title: "Mobile Development",
    percantage: 80,
    progressColor: "#92B4EC",
  },
  {
    id: 3,
    title: "UI/UX Design",
    percantage: 95,
    progressColor: "#FFED78",
  },
  {
    id: 4,
    title: "UI/UX Design",
    percantage: 95,
    progressColor: "#92B4EC",
  },
  
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 20,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Satisfied clients",
    count: 10,
    icon: "icon-people",
  },
  {
    id: 3,
    title: "Technologies",
    count: 15,
    icon: "icon-badge",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 5,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container aboutme">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src="images/maphoto.jpg" className="maphoto2" />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm about-section">
            <div className="rounded bg-white shadow-dark profile-section ">
              <div className="row">
                <div className="col-md-6">
                  <p className="profil">I am currently a student engineer in 2nd year software engineering, at the Mohamed VI International Academy of Civil Aviation (AIAC), Casablanca . My academic experiences have helped me develop the ability to meet challenges with tight deadlines and steep learning curves. I have worked on multiple academic and personal projects which allowed me to enrich my training and discover the field by putting my knowledge into practice.
                 </p>
                  <div className="mt-3">
                    <a target="_blank" href="https://drive.google.com/file/d/1T6X-JlFmdOgOHljXBnWwvSjrEIFtwA3b/view" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6 skills">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
