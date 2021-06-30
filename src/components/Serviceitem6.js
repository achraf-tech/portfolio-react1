import React from "react";
import { FaGithub } from "react-icons/fa";
import "../App.css";

const ServiceItem6 = () => {
  return (
    <div data-aos="fade-left">
      <div className="services__box">
        <FaGithub className="common-icons" />
        <div className="services__box-header">FaApple</div>
        <div className="services__box-p">It is defined as the connections</div>
      </div>
    </div>
  );
};

export default ServiceItem6;
