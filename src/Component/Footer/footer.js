import axios from 'axios';
import { Formik } from 'formik';
import React, { useLayoutEffect, useState } from 'react';
import * as Yup from 'yup';
import './footer.css';


const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function Footer() 
{

  const [footerData, setFooterData] = useState({});


  useLayoutEffect(() => {
    axios.get("http://localhost:8000/api/footer").then(response => response.data).then(data=> {
      setFooterData(data[0]);
      console.log(data[0]);
    })
  }, [])

  return (
    <div>

      <section>
        <div className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="color">
                  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                  {/* <!--Section description--> */}
                  <p className="text-center w-responsive mx-auto mb-5">Victorian Bangladeshi Community Foundation - VBCF</p>

                  <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md- mb-md-0 mb-5">
                      <Formik
                        initialValues={{
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={(values, actions) => {
                          const feedbackObject= {
                            name: values.name,
                            email: values.email,
                            subject: values.subject,
                            suggestion: values.message
                          };
                          axios.post('http://localhost:8000/api/send-mail', feedbackObject)
                          .then(function (response) {
                            console.log(response);
                            alert("Successfully submitted feedback");

                            actions.setSubmitting(false);
                            actions.resetForm();
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                          // setTimeout(() => {
                          //   alert(JSON.stringify(values, null, 2));
                          //   actions.setSubmitting(false);
                          // }, 1000);
                        }}
                      >

                        {props => (
                          <form onSubmit={props.handleSubmit}>

                            <div className="row">

                              <div className="col-md-6">
                                <div className="md-form mb-0">
                                  <input type="text" id="name" name="name"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.name}
                                    className="form-control" required />
                                  <label for="name" className="">Your name</label>
                                  {props.errors.name && props.touched.name ? (
                                    <div style={{color: "red"}}>{props.errors.name}</div>
                                  ) : null}
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="md-form mb-0">
                                  <input
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                    type="text" id="email" name="email"
                                    className="form-control" required />
                                  <label for="email" className="">Your email</label>
                                  {props.errors.email && props.touched.email ? (
                                    <div style={{color: "red"}}>{props.errors.email}</div>
                                  ) : null}
                                </div>
                              </div>

                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <div className="md-form mb-0">
                                  <input type="text" id="subject" name="subject"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.subject}
                                    className="form-control" />
                                  <label for="subject" className="">Subject</label>
                                  {props.errors.subject && props.touched.subject ? (
                                    <div style={{color: "red"}}>{props.errors.subject}</div>
                                  ) : null}
                                </div>
                              </div>
                            </div>

                            <div className="row">

                              <div className="col-md-12">

                                <div className="md-form">
                                  <textarea type="text" id="message" name="message"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.message}
                                    rows="2"
                                    className="form-control md-textarea"></textarea>
                                  <label for="message">Your message</label>
                                  {props.errors.message && props.touched.message ? (
                                    <div style={{color: "red"}}>{props.errors.message}</div>
                                  ) : null}
                                </div>

                              </div>
                            </div>

                            <div className="text-center text-md-left">
                              <button type='submit' className="btn btn-primary">Send</button>
                            </div>
                            <div className="status">
                            </div>

                          </form>
                        )}
                      </Formik>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          /</div>
      </section>
      <section>
        <div className="copiright">
          <h6>{footerData.title},{footerData.address}</h6>
          <span>{footerData.copyiright}</span>
        </div>
      </section>
      {/* <!-- /footer  --> */}
    </div>
  )
}