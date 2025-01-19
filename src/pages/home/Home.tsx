import Header from "../../components/header/Header";
import "./Home.css";
import Content from "../../components/content/Content";
interface HomeProps {
  onProjectsLinkClick: () => void;
  onContactLinkClick: () => void;
  onAboutLinkClick: () => void;
  isProjectHovered: boolean;
  isAboutHovered: boolean;
  isContactHovered: boolean;
}
const Home: React.FC<HomeProps> = ({
  onProjectsLinkClick,
  isProjectHovered,
  isAboutHovered,
  isContactHovered,
  onContactLinkClick,
  onAboutLinkClick,
}) => {
  return (
    <div className="home">
      <Header
        onProjectsLinkClick={onProjectsLinkClick}
        onAboutLinkClick={onAboutLinkClick}
        onContactLinkClick={onContactLinkClick}
      />
      <Content isProjectHovered={isProjectHovered} isContactHovered={isContactHovered} isAboutHovered={isAboutHovered} />
    </div>
  );
};

export default Home;
