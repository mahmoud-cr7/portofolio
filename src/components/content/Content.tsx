import { Colors } from "../../values/Colors";
import SideBar from "../sideBar/SideBar";
import brief from "../../assets/brief.png";
import arrow from "../../assets/arrow.png";
import quate from "../../assets/quate.png";
import profile from "../../assets/profile6.png";

const Content = ({ isProjectHovered , isContactHovered, isAboutHovered }: { isProjectHovered: boolean , isContactHovered: boolean, isAboutHovered: boolean }) => {
  return (
    <>
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
            <div
              className={`brief ${isAboutHovered ? "brief-hovered" : ""}`}
              style={{ backgroundColor: Colors.primary }}
            >
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
              className={`contact ${isContactHovered ? "contact-hovered" : ""}`}
              style={{ backgroundColor: Colors.secondary }}
              onClick={() =>
                (window.location.href = "mailto:mahmoudwageeh666@gmail.com")
              }
            >
              <div className="arrow">
                <p style={{ color: Colors.primary }}>Have a project in mind?</p>
                <img src={arrow} alt="" />
              </div>
              <h1 style={{ color: Colors.primary }}>Contact Me</h1>
            </div>
          </div>
        </div>
        <SideBar isProjectHovered={isProjectHovered} />
      </div>
    </>
  );
};

export default Content;