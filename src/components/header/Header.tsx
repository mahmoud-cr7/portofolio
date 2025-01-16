import "./Header.css";
import { Colors } from "../../values/Colors";
const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: Colors.primary }}>
      <h1 style={{ color: Colors.text }}>
        MAHMOUD <span>WAGEEH</span>
      </h1>
      <div className="links">
        <p style={{ color: Colors.text }}>PROJECTS</p>
        <p style={{ color: Colors.text }}>ABOUT</p>
        <p style={{ color: Colors.text }}>CONTACT</p>
      </div>
    </div>
  );
};

export default Header;
