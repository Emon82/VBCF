import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./footer.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
export default function footer() {
  return (
    <>
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="color">
                <h2 className="h1-responsive font-weight-bold my-4">
                  Contact Us
                </h2>
                {/* <!--Section description--> */}
                <p className="w-responsive mx-auto mb-5">
                  Victorian Bangladeshi Community Foundation - VBCF
                </p>

                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-md- mb-md-0 mb-5">
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      }}
                      validationSchema={ContactSchema}
                      onSubmit={(values, actions) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          actions.setSubmitting(false);
                        }, 1000);
                      }}
                    >
                      {(props) => (
                        <form onSubmit={props.handleSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="md-form mb-0">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.name}
                                  className="form-control"
                                  required
                                />
                                <label for="name" className="">
                                  Your name
                                </label>
                                {props.errors.name && props.touched.name ? (
                                  <div style={{ color: "red" }}>
                                    {props.errors.name}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="md-form mb-0">
                                <input
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.email}
                                  type="text"
                                  id="email"
                                  name="email"
                                  className="form-control"
                                  required
                                />
                                <label for="email" className="">
                                  Your email
                                </label>
                                {props.errors.email && props.touched.email ? (
                                  <div style={{ color: "red" }}>
                                    {props.errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="md-form mb-0">
                                <input
                                  type="text"
                                  id="subject"
                                  name="subject"
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.subject}
                                  className="form-control"
                                />
                                <label for="subject" className="">
                                  Subject
                                </label>
                                {props.errors.subject &&
                                props.touched.subject ? (
                                  <div style={{ color: "red" }}>
                                    {props.errors.subject}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="md-form">
                                <textarea
                                  type="text"
                                  id="message"
                                  name="message"
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.message}
                                  rows="2"
                                  className="form-control md-textarea"
                                ></textarea>
                                <label for="message">Your message</label>
                                {props.errors.message &&
                                props.touched.message ? (
                                  <div style={{ color: "red" }}>
                                    {props.errors.message}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>

                          <div className="text-md-left">
                            <button type="submit" className="btn btn-primary">
                              Send
                            </button>
                          </div>
                          <div className="status"></div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <div className="footer-about">
                <h3 className="text-white">About</h3>
                <p className="text-white">
                  Western Region Bengali School (WRBS) is an ethnic language
                  school targeting the second generation Australian Bangladeshis
                  living in the north and western suburbs of Melbourne. However,
                  it is open to all Australian Bangladeshi living in Victoria.
                  WRBS formed in 2006, in Hoppers Crossing, Victoria with goals
                  of promoting Bangla literacy and numeracy and passing on the
                  rich Bangladeshi cultural heritage to our next generation
                  Australian-Bangladeshi. The school has come a long way since
                  its inception as an entity that currently has 152 enrolled
                  students.
                </p>

                <h3 className="text-white mb-3">Social</h3>
                <i className="text-white fa fa-facebook"></i>
                <i className="text-white fa fa-youtube"></i>
                <i className="text-white fa fa-twitter"></i>
                <i className="text-white fa fa-instagram"></i>
                <i className="text-white fa fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copiright">
        <h6 className="footer">
          Victorian Bangladeshi Community Foundation, PO BOX 1348 Werribee
          Plaza, Vic 3029, Australia
        </h6>
        <span>©2017 by Victorian Bangladeshi Community Foundation - VBCF.</span>
        <span>
          {" "}
          Powered by{" "}
          <a href="http://www.techknowgram.com">TechKnowGram Limited</a>
        </span>
      </div>
    </>
  );
}
