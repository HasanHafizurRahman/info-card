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
      <div className="titile-button">
        <div>
          <h1 className="Title">Hasan Hafizur Rahman</h1>
          <h4 className="Title_two">Frontend Developer</h4>
          <p className="website">HasanHafizurRahman.netlify.app</p>
        </div>
        <div>
          <div className="buttons">
            <button class="email" href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKCAYAAABv7tTEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgBlZDRDYJAEER3DgrwH5BLlPirHWAFWgJWYAlIBWoHlGA9EhOQBmiAW/diIIRoxP26vXmz2R34ehmD1ZGIZzShGJy5DiNlopgIUzwExkxVVbEV90H68gdfWu5Z3TcIgsW+rh83+xvoKJFJqTz1CM7qssht43nRGvNwVcqmzEaE+i1Ys2KVGJi8g31fbneQgqA7U9hPHZhHcNwxY1O/ksR0ZZjdAO41lz6XlpjO+JKoov+rcQ3axGHnNIVmpsao9vICKlBXA4DqZ/QAAAAASUVORK5CYII="
                alt="Email Icon"
                width="15px"
              />
              Email
            </button>
            <button class="linkedin" href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBrZHhDYJADIVbwn9vAxyBEXAS3cARdANH8G4DR8ANGMENdIPzPa2GkEAo4SWPPq58pBTNOTcishefUonLYQEoRS/f4B388IJJVVvWOWDZyxd8b4169IKtfMfsYIUj3NgZe1u+HA5D8I5Ro205Mxv8F3qET8yFTIgPwk/4bEfdrzcJ2qjBKvWaC45qFbCyxVRwsFxbbzO4/yyAm/Tqyt8Rxa/0BoZNbORPq3F0AAAAAElFTkSuQmCC"
                alt="Email Icon"
                width="15px"
              />
              Linkedin
            </button>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
