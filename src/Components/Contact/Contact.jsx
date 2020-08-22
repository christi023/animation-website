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

  // method
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
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

                <iframe
                  title="google location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
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
            {/* <div className="container contact_div">  
              <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        id="name"
                        placeholder="Enter your name"
                        value={data.fullName}
                        onChange={InputEvent}
                      />
                      <div className="validate"></div>
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="name">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="mobile number"
                        value={data.phone}
                        onChange={InputEvent}
                      />
                      <div className="validate"></div>
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="name">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        id="email"
                        placeholder="name@example.com"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                      <div className="validate"></div>
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="name">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        value={data.subject}
                        onChange={InputEvent}
                        placeholder="Please enter at a subject"
                      />
                      <div className="validate"></div>
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="name">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="4"
                        data-rule="required"
                        value={data.message}
                        onChange={InputEvent}
                        placeholder="Please write something for us"
                      ></textarea>
                      <div className="validate"></div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
