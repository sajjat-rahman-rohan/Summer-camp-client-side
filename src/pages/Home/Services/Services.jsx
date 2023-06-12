/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/services/service-color1.png";
import img2 from "../../../assets/services/service-color2.png";
import img3 from "../../../assets/services/service-color3.png";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <div>
        <h2 className="text-center text-4xl">Our Services</h2>
        <div className="divider md:w-96 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div>
          <img src={img1} className="inline" alt="" />
          <h2>National Awards</h2>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.Create your
            pages and your site using the display in the front view, so you can
            see real-time changes.
          </p>
        </div>
        <div>
          <img src={img2} className="inline" alt="" />
          <h2>Best Teachers</h2>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.Create your
            pages and your site using the display in the front view, so you can
            see real-time changes.
          </p>
        </div>
        <div>
          <img src={img3} className="inline" alt="" />
          <h2>Many Classes</h2>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.Create your
            pages and your site using the display in the front view, so you can
            see real-time changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
