import styles from "../css/About.module.css";

const About = () => {
  return (
    <div className={styles.body}>
      <h2>About</h2>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h2>Interests</h2>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
};

export default About;
