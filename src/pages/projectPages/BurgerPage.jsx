import React from "react";
import ProjectPage from "./ProjectPage";
import burger1 from "../../assets/projects/burger1.jpeg";
import burger2 from "../../assets/projects/burger2.jpeg";
import burger3 from "../../assets/projects/burger3.jpg";
import burger4 from "../../assets/projects/burger4.jpeg";

import Footer from "../../components/footer/Footer";

const BurgerPage = () => {
  return (
    <div>
      <ProjectPage title={"Burger Division"} />
      <div className="rare-images">
        <img
          src={burger1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={burger2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={burger3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={burger4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
      </div>
      <Footer />
    </div>
  );
};

export default BurgerPage;
