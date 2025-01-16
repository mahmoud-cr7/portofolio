/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Colors } from "../../values/Colors";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: Colors.primary }}>
      <p style={{ color: Colors.text }}>
        <a href="www.linkedin.com/in/mahmoud-wageeh-a96093247" target="_blank">
          LINKEDIN
        </a>
      </p>
      <p style={{ color: Colors.text }}>
        <a href="https://github.com/mahmoud-cr7" target="_blank">
          GITHUB
        </a>
      </p>
      <p style={{ color: Colors.text }}>
        <a
          href="https://www.facebook.com/profile.php?id=100009877262014"
          target="_blank"
        >
          FACEBOOK
        </a>
      </p>
    </div>
  );
};

export default Footer;
