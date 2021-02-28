import React, { Component } from "react";
import image1 from "./images/companies.png";
import image2 from "./images/companies-sm.png";
import './styles.css';

export default class Companies extends Component {
  render() {
    return (
      <section className="companies">
        <h1>
          Trusted in production by <span>100+ tech</span> companies
        </h1>
        <img
          src={image1}
          alt="jumbotail rupeek meesho browserstack mpokket slice slintel groww lifelong porter cloudtail verloop avail"
          className="img-lg"
        />
        <img
          src={image2}
          alt="jumbotail rupeek meesho browserstack mpokket slice slintel groww lifelong porter cloudtail verloop avail"
          className="img-sm"
        />
      </section>
    );
  }
}
