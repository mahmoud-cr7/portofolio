import { useState } from "react";
import { Colors } from "../../values/Colors";
import Footer from "../footer/Footer";
import "./SideBar.css";

interface Project {
  title: string;
  description: string;
}

const SideBar: React.FC = () => {
  const [openProject, setOpenProject] = useState<number>(0); // 0-indexed, the first project is open by default

  const toggleProject = (index: number) => {
    if (openProject !== index) {
      setOpenProject(index);
    }
  };

  const projects: Project[] = [
    {
      title: "Online Store",
      description:
        " Embark on a collaborative journey with our team collage project, dedicated to crafting an innovative online store for selling tech products using React JS. Unite your expertise in design, development, and user experience to deliver a seamless shopping experience.",
    },
    {
      title: "Product Builder",
      description:
        " Unleash your imagination with our website project, where React and TypeScript converge to empower you in building and showcasing dynamic products. Seamlessly blend creativity and functionality as you craft an immersive digital experience tailored to your vision",
    },
    {
      title: " post blog",
      description:
        " This project is a React and TypeScript-based blogging platform featuring post creation, comments, likes, and real-time interactions. Users can log in via OAuth (Google, GitHub, etc.) for secure access. Each post has its own comment section and like button, enabling user engagement. The platform supports rich text editing and is fully responsive across devices. It's ideal for creating a modern, interactive blog with secure user authentication.",
    },
    {
      title: " BICS Store",
      description:
        "Embark on a dynamic journey of creativity with our collage project aimed at crafting a mobile application for selling cutting-edge tech products. Dive into the realms of design, coding, and user experience to fashion a platform that seamlessly connects tech enthusiasts with their next must-have gadgets",
    },
    {
      title: "SCMS",
      description:
        " The graduation project focuses on developing a robust Learning Management System (LMS) utilizing HTML, CSS, and JavaScript. This system aims to streamline educational processes by providing an intuitive platform for course management, student tracking, and resource sharing. The project emphasizes responsive design, ensuring accessibility across various devices. Additionally, it integrates interactive features to enhance user engagement and facilitate seamless learning experiences.",
    },
  ];

  return (
    <div>
      <div className="sideBar" style={{ backgroundColor: Colors.primary }}>
        <div className="projects">
          {projects.map((project, index) => (
            <div
              className={`project ${openProject === index ? "open" : "closed"}`}
              key={index}
            >
              <h1
                style={{ color: Colors.text, cursor: "pointer" }}
                onClick={() => toggleProject(index)}
              >
                {project.title}
              </h1>
              {openProject === index && (
                <p style={{ color: Colors.text }}>{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideBar;
