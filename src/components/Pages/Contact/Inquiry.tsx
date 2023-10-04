import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import { API_END_POINT, config } from '../../../constants/const';
import ToastMessage from "../../../components/common/ToastMessage";

function Inquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [phone, setPhone] = useState("");

  function resetData() {
    setName("");
    setEmail("");
    setBody("");
    setPhone("")
  }

  const sendMail = async (e: any) => {
    e.preventDefault();
    let obj = {
      name: name || "",
      from: email || "",
      phone: phone || "",
      message: body || ""
    }

    const sendEnquiry = await axios.post(`${API_END_POINT}/user/enquiry`, obj, config)
      .then((res) => {
        toast.success(res?.data?.msg);
        resetData();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return res;
      })
      .catch((error) => {
        return error?.response?.data;
      });
  }

  return (
    <>
      <ToastMessage />
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
                  <a href="tel:+91 98985 57778" className="contact-details__number-2">+91 98985 57778</a>
                </h6>
              </div>
            </li>
            <li>
              <div className="contact-details__icon">
                <span className="fa fa-envelope"></span>
              </div>
              <div className="contact-details__content">
                <h6>
                  <a href="mailto:info@cifse.in" className="contact-details__number-1">info@cifse.in</a>
                </h6>
              </div>
            </li>
            <li>
              <div className="contact-details__icon">
                <span className="fa fa-map-marker"></span>
              </div>
              <div className="contact-details__content">
                <h6>CIFSE Fire College Sector 5D, Near KH-3 Circle, Pathika Bus Stand Road, Gandhinagar, Gujarat- 382006</h6>
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
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input value={name} type="text" name="from_name" id="from_name" className="form-control" required
                      data-error="Please enter your name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input value={email} type="email" name="email_from" id="email" className="form-control" required
                      data-error="Please enter your email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input value={phone} type="number" name="phone_from" id="phone_from" required
                      data-error="Please enter your number" className="form-control" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input type="text" name="subject_from" id="subject_from" className="form-control" required
                      data-error="Please enter your subject" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                    <div className="help-block with-errors"></div>
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea value={body} name="body_from" className="form-control" id="body_from" required
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
