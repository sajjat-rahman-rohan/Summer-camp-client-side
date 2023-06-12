/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "@smastrom/react-rating/style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-con banner-bg-1 flex justify-center items-center text-white text-center">
            <div className="banner-box md:w-2/4">
              <h1 className="text-5xl">Join Our Summer Camp Learning</h1>
              <h4 className="text-lg py-2">
                TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON`T MISS THIS
                OPPORTUNITY FOR YOUR SCHOOL
              </h4>
              <p>
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/signup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-2 flex justify-center items-center text-white text-center">
            <div className="banner-box md:w-2/4">
              <h1 className="text-5xl">Join Our Summer Camp Learning</h1>
              <h4 className="text-lg py-2">
                TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON`T MISS THIS
                OPPORTUNITY FOR YOUR SCHOOL
              </h4>
              <p>
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/signup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-3 flex justify-center items-center text-white text-center">
            <div className="banner-box md:w-2/4">
              <h1 className="text-5xl">Join Our Summer Camp Learning</h1>
              <h4 className="text-lg py-2">
                TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON`T MISS THIS
                OPPORTUNITY FOR YOUR SCHOOL
              </h4>
              <p>
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/signup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-4 flex justify-center items-center text-white text-center">
            <div className="banner-box md:w-2/4">
              <h1 className="text-5xl">Join Our Summer Camp Learning</h1>
              <h4 className="text-lg py-2">
                TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON`T MISS THIS
                OPPORTUNITY FOR YOUR SCHOOL
              </h4>
              <p>
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/signup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
