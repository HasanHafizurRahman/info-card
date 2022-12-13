import "./Footer.css";
import github from "../../asset/th (1).jpg";
import facebook from "../../asset/th.jpg";
import linkedin from "../../asset/th (2).jpg";
import twitter from "../../asset/th (3).jpg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={github} alt="github" />
      <img src={facebook} alt="facebook" />
      <img src={linkedin} alt="face" />
      <img src={twitter} alt="face" />
    </div>
  );
};

export default Footer;
