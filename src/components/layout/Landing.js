import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <h1>stop watch</h1>
      <img src="/logo192.png" alt="stop watch" />
      <Link className="exercise-btn" to="/start">
        start
      </Link>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        quod quaerat temporibus animi voluptates assumenda vitae dolores iure
        rerum ipsum. Veritatis maxime magnam dolor vel iure quis aliquam alias
        qui.
      </p>

      <a href="#">link</a>
    </div>
  );
};

export default Landing;
