import React, { Component } from "react";
import './styles.css';

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>NUESTROS SERVICIOS</h2>
            <p>
            Brindamos cobertura de mudanzas en toda Barcelona y alrededores con un servicio eficiente y personalizado, consulta nuestros precios y notarás la diferencia.
            </p>
          </div>
          <div className="services-box">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
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

export default Services;