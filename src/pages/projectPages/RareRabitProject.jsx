import React from "react";
import Footer from "../../components/footer/Footer";
import ProjectPage from "./ProjectPage";
import rare1 from "../../assets/projects/rare.jpeg";
import rare2 from "../../assets/projects/rare2.jpeg";
import rare3 from "../../assets/projects/rare3.jpeg";
import rare4 from "../../assets/projects/rare4.jpeg";

const RareRabitProject = () => {
  return (
    <div>
      <ProjectPage title={"Rare Rabit"} />
      <div className="burger-images">
        <img
          src={rare1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img src={rare2} alt="" data-aos-duration="1500" data-aos="fade-left" />
        <img
          src={rare3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img src={rare4} alt="" data-aos-duration="1500" data-aos="fade-left" />
      </div>
      <Footer />
    </div>
  );
};

export default RareRabitProject;
