import React, { Component } from "react";
import './styles.css'

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>Lo que dicen nuestros clientes</h2>
          </div>
          <div className="testimonial-box">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
