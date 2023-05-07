import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Inquiry() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const config = {
    Host: "smtp.elasticemail.com",
    SecureToken: "203535ba-ae6d-4dbc-b645-20992a37d00a",
    To: 'bill181297@gmail.com',
    From: email,
    Subject: subject,
    Body: body,
  }

  // const submitHandler = () => {
  //   if (window.Email)
  // }

  return (
    <>
      <section className="contact-details">
        <div className="container">
          <ul className="list-unstyled contact-details__list">
            <li>
              <div className="contact-details__icon">
                <span className="fa fa-phone-square"></span>
              </div>
              <div className="contact-details__content">
                <h6>
                  <a href="tel:+91 94514 42632" className="contact-details__number-1">+91 94514 42632</a>
                  <a href="tel:+91 73101 76777" className="contact-details__number-2">+91 73101 76777</a>
                </h6>
              </div>
            </li>
            <li>
              <div className="contact-details__icon">
                <span className="fa fa-envelope"></span>
              </div>
              <div className="contact-details__content">
                <h6>
                  <a href="mailto:info@cifseindia.org" className="contact-details__number-1">info@cifseindia.org</a>
                </h6>
              </div>
            </li>
            <li>
              <div className="contact-details__icon">
                <span className="fa fa-map-marker"></span>
              </div>
              <div className="contact-details__content">
                <h6>CIFSE Fire College Sector 5C, Near KH-3 Circle, Pathika Bus Stand Road, Gandhinagar, Gujarat- 382006</h6>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-area mt-5 mb-5">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i>
              Message Us
            </span>
            <h2>Drop Us Message for Any Query</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          </div>
          <div className="contact-form">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="name" id="name" className="form-control" required
                      data-error="Please enter your name" placeholder="Name" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control" required
                      data-error="Please enter your email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="phone_number" id="phone_number" required
                      data-error="Please enter your number" className="form-control" placeholder="Phone" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required
                      data-error="Please enter your subject" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea name="message" className="form-control" id="message" required
                      data-error="Write your message" placeholder="Your Message" onChange={(e) => setBody(e.target.value)}></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn">Send Message</button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="google-map google-map-two">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3666.6074841184777!2d72.62914961497147!3d23.220971084852977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDEzJzE1LjUiTiA3MsKwMzcnNTIuOCJF!5e0!3m2!1sen!2sin!4v1680615797710!5m2!1sen!2sin" width="100%" height="600" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}
export default Inquiry
