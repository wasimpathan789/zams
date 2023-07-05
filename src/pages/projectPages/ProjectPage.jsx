import "./ProjectPage.css";
import Navbar from "../../components/navbar/Navbar";

const ProjectPage = ({ title, descrition, services }) => {
  return (
    <div>
      <Navbar />
      <div className="projectWrapper">
        <div className="project-banner">
          <div className="project-overlays "></div>

          <h1>{title}</h1>
          <h5>Photos</h5>
        </div>
        <div className="project-details">
          <div className="project-details-headlines">
            <h1>Client: </h1>
            <p> {title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
