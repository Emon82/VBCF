import React from 'react'
import'./footer.css';
export default function footer() {
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
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                    {/* <!--Grid row--> */}
                    <div className="row">

                      {/* <!--Grid column--> */}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input type="text" id="name" name="name" className="form-control" required/>
                          <label for="name" className="">Your name</label>
                        </div>
                      </div>
                      {/* <!--Grid column--> */}

                      {/* <!--Grid column--> */}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input type="text" id="email" name="email" className="form-control" required/>
                          <label for="email" className="">Your email</label>
                        </div>
                      </div>
                      {/* <!--Grid column--> */}

                    </div>
                    {/* <!--Grid row--> */}

                    {/* <!--Grid row--> */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input type="text" id="subject" name="subject" className="form-control"/>
                          <label for="subject" className="">Subject</label>
                        </div>
                      </div>
                    </div>
                    {/* <!--Grid row--> */}

                    {/* <!--Grid row--> */}
                    <div className="row">

                      {/* <!--Grid column--> */}
                      <div className="col-md-12">

                        <div className="md-form">
                          <textarea type="text" id="message" name="message" rows="2"
                            className="form-control md-textarea"></textarea>
                          <label for="message">Your message</label>
                        </div>

                      </div>
                    </div>
                    {/* <!--Grid row--> */}

                  </form>

                  <div className="text-center text-md-left">
                    <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                  </div>
                  <div className="status">
                  </div>
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
      <h6>Victorian Bangladeshi Community Foundation, PO BOX 1348 Werribee Plaza, Vic 3029, Australia</h6>
      <span>©2017 by Victorian Bangladeshi Community Foundation - VBCF.</span>
    </div>
  </section>
  {/* <!-- /footer  --> */}
    </div>
    
  )
}
