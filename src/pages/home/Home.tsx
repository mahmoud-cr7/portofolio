import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import "./Home.css";
import brief from "../../assets/brief.png";
import arrow from "../../assets/arrow.png";
import quate from "../../assets/quate.png";
import profile from "../../assets/profile3.png";
import { Colors } from "../../values/Colors";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="main">
          <div className="first">
            <div className="quote " style={{ backgroundColor: Colors.primary }}>
              <img src={quate} alt="" />
              <h1 style={{ color: Colors.secondary }}>
                “Your website is your canvas—turn your ideas into reality”
              </h1>
            </div>
            <div
              className="profile-image"
              style={{ backgroundColor: Colors.secondary }}
            >
              <img src={profile} alt="" />
            </div>
          </div>
          <div className="second">
            <div className="brief" style={{ backgroundColor: Colors.primary }}>
              <img src={brief} alt="" />
              <p style={{ color: Colors.secondary }}>
                Hi, I’m Mahmoud, a software developer with experience in
                front-end development, specializing in React and TypeScript. I
                have a solid foundation in programming fundamentals, including
                data structures and algorithms, which helps me craft efficient
                and scalable solutions. My passion lies in creating
                user-friendly, responsive web applications that deliver a
                seamless experience.
              </p>
            </div>
            <div
              className="contact"
              style={{ backgroundColor: Colors.secondary }}
            >
              <div className="arrow">
                <p style={{ color: Colors.primary }}>Have a project in mind?</p>
                <img src={arrow} alt="" />
              </div>
              <h1 style={{ color: Colors.primary }}>Contact Me</h1>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
