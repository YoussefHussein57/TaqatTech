import "./footer.css";
import { Link } from "react-router-dom";
import vector from "../../Assets/Logo/white-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer d-flex flex-column align-items-center">
      {/* <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div> */}
      <div className="footer__container container w-100  ">
        <div className="row pb-5  flex-md-row w-100 d-flex align-items-center ">
          {/* Logo & Nav Links */}
          <div className="col-12 col-md-8 d-flex flex-column align-items-start gap-5">
            <div className="frame-logo ">
              <img src={vector} alt="Logo" />
            </div>

            <ul className="d-flex flex-wrap flex-column gap-2 flex-md-row justify-content-start align-items-start  text-light list-unstyled mb-4">
              <li className="nav-item mx-2 fw-medium">
                <Link to="/about" className="nav-link text-nowrap">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/case" className="nav-link text-nowrap">
                  Case Study
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/contactUs" className="nav-link text-nowrap">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/career" className="nav-link">
                  Career
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="text-light ">
              <h6 className="heading6 pb-4">Contact Us</h6>
              <p className="mb-1">+974 – 44124944</p>
              <p className="mb-1">D ring – Al sadd st.</p>
              <p className="mb-1">Doha, Qatar</p>
              <p className="mb-0">contact@taqat.qa</p>
            </div>
          </div>

          {/* Social + Newsletter */}
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center text-light mt-5 gap-5">
            {/* Social Icons */}
            <div className="frame-social d-flex gap-3 mb-4 icon order-2 order-md-1 ">
              <FontAwesomeIcon className="faIcon" icon={faFacebookF} />
              <FontAwesomeIcon className="faIcon" icon={faYoutube} />
              <FontAwesomeIcon className="faIcon" icon={faXTwitter} />
              <FontAwesomeIcon className="faIcon" icon={faInstagram} />
            </div>

            {/* Newsletter */}
            <div style={{ maxWidth: "300px" }} className="order-1 order-md-2">
              <h6>News letters</h6>
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control inputGrp"
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="subscribeBtn btn text-light"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
      <div className="w-100 col-md-8 gap-4 d-flex justify-content-between text-light mt-5 pt-3 border-top bottomBar">
        <div className="mt-4">
          <small>cookies</small> &nbsp; | &nbsp;
          <small>Terms & conditions</small>
        </div>
        <div className="mt-4">
          <small>All right reserved © 2024 TaqatTechnology.com</small>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
