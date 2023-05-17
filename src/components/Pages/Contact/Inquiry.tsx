import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [phone, setPhone] = useState("");

  const config = {
    Host: "smtp.elasticemail.com",
    SecureToken: "203535ba-ae6d-4dbc-b645-20992a37d00a",
    To: 'bill181297@gmail.com',
    From: email,
    Subject: subject,
    Body: body,
  }

  const sendMail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('service_im3qwdb', 'template_071b5tb', e.target, 'JaTPExH68HKRX3IB1')
  }

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
                  <a href="tel:+91 95740 31178" className="contact-details__number-1">+91 95740 31178</a>
                  <a href="tel:+91 77779 95414" className="contact-details__number-2">+91 77779 95414</a>
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
          </div>
          <div className="contact-form">
            <form id="contactForm" onSubmit={sendMail}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="from_name" id="from_name" className="form-control" required
                      data-error="Please enter your name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="email" name="email_from" id="email" className="form-control" required
                      data-error="Please enter your email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="phone_from" id="phone_from" required
                      data-error="Please enter your number" className="form-control" placeholder="Phone" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="subject_from" id="subject_from" className="form-control" required
                      data-error="Please enter your subject" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea name="body_from" className="form-control" id="body_from" required
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
