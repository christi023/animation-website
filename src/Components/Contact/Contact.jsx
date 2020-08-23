import React, { useState } from 'react';

// styles
import './Contact.css';

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My mobile number is ${data.phone}. My email is ${data.email}.  `,
    );
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="my-5" style={{ paddingTop: '50px' }}>
            <h1 className="text-center"> Contact Us</h1>
          </div>
          <div className="row">
            <div
              className="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Location:</h4>
                  <p>Carlsvägen 5, Malmö,Sweden</p>
                </div>

                <div className="email">
                  <i className="fas fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="fas fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+46 876 765616</p>
                </div>

                <iframe
                  title="google location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4507.474260477943!2d13.057881679997548!3d55.60658848248515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a22d7772bae7%3A0xcd37675bf6f9af1f!2sBulltofta%2C%20Kirseberg%2C%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1598208002562!5m2!1ssv!2sse"
                  frameBorder="0"
                  style={{ border: '0', width: '100 %', height: '290px' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form onSubmit={formSubmit} className="email-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={data.fullName}
                      onChange={InputEvent}
                    />
                    <div className="validate"></div>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="name">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                    <div className="validate"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Subject</label>

                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={data.subject}
                    onChange={InputEvent}
                    placeholder="Please enter a subject"
                  />
                  <div className="validate"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    data-rule="required"
                    data-msg="Please write something for us"
                    value={data.message}
                    onChange={InputEvent}
                    placeholder="Please write something for us"
                  ></textarea>
                  <div className="validate"></div>
                </div>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
