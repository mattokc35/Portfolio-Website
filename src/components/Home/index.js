import { Link, NavLink } from "react-router-dom";
import profilePic from "../../assets/images/intropic.jpeg";
import "./index.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Matthew Chen
        </h1>
        <h2>Software Engineer / Full-Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          {" "}
          CONTACT ME{" "}
        </Link>
      </div>
      <img src={profilePic} alt="profilepic"></img>
    </div>
  );
};

export default Home;
