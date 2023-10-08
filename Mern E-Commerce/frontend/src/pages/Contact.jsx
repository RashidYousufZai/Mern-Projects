import "./Contact.scss";
import AboutPage from "../component/AboutPage";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact us";
  }, [])
  
  return (
    <div>
      <ScrollToTop />
      <AboutPage content="Contact Us" />
      <div>
        <section className="get-in-touch">
          <h1 className="title">Get in touch</h1>
          <form className="contact-form row">
            <div className="form-field col-lg-6">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="form-field col-lg-6 ">
              <input
                id="email"
                className="input-text js-input"
                type="email"
                required
              />
              <label className="label" htmlFor="email">
                E-mail
              </label>
            </div>
            <div className="form-field col-lg-6 ">
              <input
                id="company"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="company">
                Company Name
              </label>
            </div>
            <div className="form-field col-lg-6 ">
              <input
                id="phone"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="phone">
                Contact Number
              </label>
            </div>
            <div className="form-field col-lg-12">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="message">
                Message
              </label>
            </div>
            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" value="Submit" />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
