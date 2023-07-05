import React from "react";
import ProjectPage from "./ProjectPage";
import starylight1 from "../../assets/projects/starylight1.jpeg";
import starylight2 from "../../assets/projects/starylight2.jpeg";
import starylight3 from "../../assets/projects/starylight3.jpeg";
import starylight4 from "../../assets/projects/starylight4.jpeg";
import starylight5 from "../../assets/projects/starylight5.jpeg";

import Footer from "../../components/footer/Footer";

const StaryProject = () => {
  return (
    <div>
      <ProjectPage title={"Stary Light"} />
      <div className="rare-images">
        <img
          src={starylight1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={starylight2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={starylight3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={starylight4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={starylight5}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
      </div>
      <Footer />
    </div>
  );
};

export default StaryProject;
