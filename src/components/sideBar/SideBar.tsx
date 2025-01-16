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
      title: "Project 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
    },
    {
      title: "Project 6",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
    },
    {
      title: "Project 7",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde, inventore numquam delectus voluptatum, iste totam perferendis laudantium accusantium quisquam alias expedita? Optio facere deleniti ea sit magnam voluptatum. Id!",
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
