import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "UI/UX design",
    content:
      "Figma , Photoshop, Illustrator, Adobe XD, Canva",
    color: "#5E89EF",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Front-End Dev",
    content:
      "HTML/CSS, Bootstrap, ReactJs, JQUERY, Material-UI",
    color: "#ADDCE4",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/data.png",
    title: "Back-End Dev",
    content:
      "NODEJS, JEE, PHP, EXPRESS.JS",
    color: "#5E89EF",
    contentColor: "light",
  },
  {
    id: 4,
    icon: "images/app-development.png",
    title: "Mobile App Dev",
    content:
      "Flutter,  React native",
    color: "#ADDCE4",
    contentColor: "dark",
  },
  {
    id: 5,
    icon: "images/programming-language.png",
    title: "Programming",
    content:
      "C++, Java, Python",
    color: "#5E89EF",
    contentColor: "light",
  },
  {
    id: 5,
    icon: "images/database-storage.png",
    title: "Database",
    content:
      "Mysql, Oracle, MongoDB",
    color: "#ADDCE4",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
