import "./Info.css";
import shanto from "../../asset/shanto.jpg";
import email from "../../asset/mail_FILL1_wght400_GRAD0_opsz48.svg";
import website from "../../asset/language_FILL0_wght400_GRAD0_opsz48.svg";
const Info = () => {
  return (
    <div className="infoBody">
      <div className="image">
        <img src={shanto} alt="shanto" />
      </div>
      <div>
        <h1 className="Title">Hasan Hafizur Rahman</h1>
        <h4 className="Title_two">Frontend Developer</h4>
        <p className="website">HasanHafizurRahman.netlify.app</p>
      </div>
      <div className="buttons">
        <div>
          <button className="email">
            <img src={email} alt="email" />
            <h3>Email</h3>
          </button>
        </div>
        <div>
          <button className="linkedin">
            <img src={website} alt="website" />
            <h3>website</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
