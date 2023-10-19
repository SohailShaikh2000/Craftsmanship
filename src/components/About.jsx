import Youtube from "../assets/Youtube.svg";
import Instagram from "../assets/Instagram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Tiktok from "../assets/Tiktok.svg";
import Email from "../assets/Email.svg";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-us">
        <h2>HERITAGE</h2>
        <p>We take immense pride in crafting exceptional handmade axes</p>
        <div className="icons">
          <img src={Youtube} alt="Youtube" />
          <img src={Instagram} alt="Instagram" />
          <img src={Linkedin} alt="LinkedIn" />
          <img src={Tiktok} alt="TikTok" />
        </div>
      </div>
      <div className="contact-support">
        <p>About Us</p>
        <p>Location</p>
        <p>Team</p>
        <p>Contact Us</p>
      </div>
      <div className="privacy-terms">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Customer Support</p>
      </div>
      <div className="feedback">
        <p>Subscribe to our Newsletter</p>
        <div className="email-input">
          <input type="text" placeholder="Enter your email" />
          <img src={Email} alt="Copy" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
