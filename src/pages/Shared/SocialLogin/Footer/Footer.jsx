import { NavLink } from "react-router-dom";
import logo from "../../../assets/footer-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pt-8 pb-3 bg-neutral">
      <div className="max-w-screen-xl px-4 mx-auto grid grid-cols-4 gap-4">
        <div className="text-gray-400">
          <img src={logo} className="h-12" alt="" />
          <p>
            Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse
            suscipit sagittis leo sit met entum estibulum dignissim posuere
            cubilia deleniti atque corrupti quos dolores vero eos et accusamu.
          </p>
        </div>
        <div>
          <h2 className="text-gray-50">About School</h2>
          <div className="saperator"></div>
          <ul className="text-gray-400">
            <li>
              <NavLink to="/blog" className="hover:text-gray-100">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors" className="hover:text-gray-100">
                Our Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-100">
                Our Students
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-gray-100">
                Our Partners
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray-50">Top Classes</h2>
          <div className="saperator"></div>
          <ul className="text-gray-400">
            <li>
              <NavLink to="/classes" className="hover:text-gray-100">
                Russian
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes" className="hover:text-gray-100">
                German
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes" className="hover:text-gray-100">
                Spanish
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes" className="hover:text-gray-100">
                Mandarin
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray-50">Contact</h2>
          <div className="saperator"></div>
          <ul className="text-gray-400">
            <li>olaconversa@language-academy.com</li>
            <li>Call Us: 1-800-123-1234</li>
            <li>Brooklyn, NY 10036, United States</li>
          </ul>
        </div>
      </div>
      <div className="py-1 mt-5 footer-center bg-gray-500 text-base-content">
        <div>
          <p>
            Ola Conversa Language-academy © 2023 All Rights Reserved. Terms of
            use and Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
