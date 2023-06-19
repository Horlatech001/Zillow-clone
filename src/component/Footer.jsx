import React from "react";
import Apple from "../images/app-store.svg";
import Google from "../images/google-play.svg";
import ZillowLogo from "../images/zillow-logo.svg";
import Instagram from "../images/icon-instagram.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import FooterArt from "../images/footer-art.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <hr />
      <div>
        <ul className="footer-list">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Zestimate</a>
          </li>
          <li>
            <a href="">Research</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Advertise</a>
          </li>
          <li>
            <a href="">Fair Housing Guide</a>
          </li>
          <li>
            <a href="">Terms of use</a>
          </li>
          <li>
            <a href="">Privacy portal</a>
          </li>
          <li>
            <a href="">Cookie Preference</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">AI</a>
          </li>
          <li>
            <a href="">Mobile Apps</a>
          </li>
          <li>
            <a href="">Trulia</a>
          </li>
          <li>
            <a href="">StreetEasy</a>
          </li>
          <li>
            <a href="">HotPads</a>
          </li>
          <li>
            <a href="">Out East</a>
          </li>
          <li>
            <a href="">ShowingTimes+</a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="disclaimer pt-3 text-center">
        <p>
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please let us know.
        </p>
        <p>
          Zillow, Inc. holds real estate brokerage licenses in multiple states.
          Zillow (Canada), Inc. holds real estate brokerage licenses in multiple
          provinces.
        </p>
        <a href="#">§ 442-H New York Standard Operating Procedures</a>
        <a href="#">§ New York Fair Housing Notice</a>
        <p>California DRE #1522444</p>
        <a href="#">Contact Zillow.Inc.Brokage</a>
        <p className="mt-3">
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by CREA and identify the quality of services provided
          by real estate professionals who are members of CREA. Used under
          license.
        </p>
        <div className="app-image d-flex justify-content-center gap-3 mt-4">
          <img src={Apple} alt="apple-app" />
          <img src={Google} alt="google-play" />
        </div>
        <div className="icons mt-5 gap-4 mb-5">
          <img src={ZillowLogo} alt="zillow-logo" />
          <div className="social-icons d-flex gap-3">
            <span>Follow us: </span>
            <img src={Facebook} alt="facebook" className="rounded-3" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-img">
          <img src={FooterArt} alt="footer-art" />
        </div>
    </div>
  );
};

export default Footer;
