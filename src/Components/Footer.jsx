import React from 'react'

export default function Footer() {
    return (
        <footer className="text-white bg-dark py-4" id="contact">
        <div className="container">
          <div className="row vh-100 d-flex justify-content-around align-items-center">
            <div className="col-12 col-lg-6">
              <iframe title="Google-Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2591076019726!2d11.58549961505705!3d48.12452636004989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7a6ae41f0f%3A0x83fe7076b2716f86!2sRegerpl.%205%2C%2081541%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1573644873814!5m2!1sen!2sde"
                width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row pb-2">
                <div className="col-1"><i className="fa fa-map-marker text-light"></i></div>
                <div className="col-11">
                  <p className="text-light">Goldenes Vlies M.M.M.<br />
                    Regerplatz, 5 81541 Munich Germany</p>
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-1"><i className="fa fa-envelope text-light"></i></div>
                <div className="col-11">
                  <a href="mailto:goldenes.vlies.mmm@gmail.com" className="text-light">goldenes.vlies.mmm@gmail.com</a><br />
                  <a href="mailto:office@vignehautain.com" className="text-light">office@vignehautain.com</a>
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-1"><i className="fa fa-phone text-light"></i></div>
                <div className="col-11">
                  <address><a href="tel:+4917669521145" className="text-light">+49-176-69521145</a></address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
