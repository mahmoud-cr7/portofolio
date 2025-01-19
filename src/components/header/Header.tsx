import "./Header.css";
import { Colors } from "../../values/Colors";

interface HeaderProps {
  onProjectsLinkClick: () => void;
  onAboutLinkClick: () => void;
  onContactLinkClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onProjectsLinkClick,
  onAboutLinkClick,
  onContactLinkClick,
}) => {
  return (
    <div className="header" style={{ backgroundColor: Colors.primary }}>
      <h1 style={{ color: Colors.text }}>
        MAHMOUD <span>WAGEEH</span>
      </h1>
      <div className="links">
        <p
          className="projects-link"
          style={{ color: Colors.text }}
          onClick={onProjectsLinkClick}
        >
          PROJECTS
        </p>
        <p
          className="about-link"
          style={{ color: Colors.text }}
          onClick={onAboutLinkClick}
        >
          ABOUT
        </p>
        <p
          className="contact-link"
          style={{ color: Colors.text }}
          onClick={onContactLinkClick}
        >
          CONTACT
        </p>
      </div>
    </div>
  );
};

export default Header;
