import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white bg-dark py-4" id="contact">
      <div className="container">
        <div className="row vh-100 d-flex justify-content-around align-items-center">
          <div className="col-12 col-lg-6">
            <iframe
              title="Google-Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2591076019726!2d11.58549961505705!3d48.12452636004989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7a6ae41f0f%3A0x83fe7076b2716f86!2sRegerpl.%205%2C%2081541%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1573644873814!5m2!1sen!2sde"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-map-marker-alt pr-3"></i>
              <div className="text-light">
                Goldenes Vlies M.M.M.
                <br />
                Regerplatz 5, 81541 Munich Germany
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-envelope pr-3"></i>
              <div>
                <a
                  href="mailto:goldenes.vlies.mmm@gmail.com"
                  className="text-light"
                >
                  goldenes.vlies.mmm@gmail.com
                </a>
                <br />
                <a href="mailto:office@vignehautain.com" className="text-light">
                  office@vignehautain.com
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-phone pr-3"></i>
              <a href="tel:+4917669521145" className="text-light">
                +49-176-69521145
              </a>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-user-cog pr-3"></i>
              <Link to="/admin">Admin Access</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
