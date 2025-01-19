import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleProjectHover = () => {
    setIsProjectHovered(true);
    setTimeout(() => setIsProjectHovered(false), 500);
  };
  const handleContactHover = () => {
    setIsContactHovered(true);
    setTimeout(() => setIsContactHovered(false), 2500);
  };

  const handleAboutHover = () => {
    setIsAboutHovered(true);
    setTimeout(() => setIsAboutHovered(false), 500);
  };
  return (
    <div>
      <Home
        onProjectsLinkClick={handleProjectHover}
        isProjectHovered={isProjectHovered}
        isContactHovered={isContactHovered}
        isAboutHovered={isAboutHovered}
        onContactLinkClick={handleContactHover}
        onAboutLinkClick={handleAboutHover}
      />
    </div>
  );
}

export default App;
