import React, { useEffect, useState } from "react";
import CarouselFade from "../Carousel";
import backgroundImage1 from "../Image/backgroundImage1.jpg";
import backgroundImage2 from "../Image/backgroundImage2.jpg";
import backgroundImage3 from "../Image/backgroundImage3.jpg";
import backgroundImage4 from "../Image/backgroundImage4.jpg";
import backgroundImage5 from "../Image/backgroundImage5.jpg";
import backgroundImage6 from "../Image/backgroundImage6.jpg";
import cardimage from "../Image/cardImage.jpg";
import image3 from "../Image/imag3.jpg";
import image2 from "../Image/image2.jpg";
import model1 from "../Image/model1.jpg";
import model10 from "../Image/model10.jpg";
import model11 from "../Image/model11.jpg";
import model12 from "../Image/model12.jpg";
import model2 from "../Image/model2.jpg";
import model3 from "../Image/model3.jpg";
import model4 from "../Image/model4.jpg";
import model5 from "../Image/model5.jpg";
import model6 from "../Image/model6.jpg";
import model7 from "../Image/model7.jpg";
import model8 from "../Image/model8.jpg";
import model9 from "../Image/model9.jpg";
import what_we1 from "../Image/what_we1.jpg";
import what_we2 from "../Image/what_we2.jpg";
import what_we3 from "../Image/what_we3.jpg";
import "./home.css";

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalImage, setshowModalImage] = useState("");
  const [modalVideo, setshowModalVideo] = useState("");
  const [modalVideoTitle, setModalVideoTitle] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.147:8000/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div>
      <div className="container pt-3">
        <CarouselFade im1={model9} im2={model12} im3={model11} im4={model10} />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="about">
              <h1 class="About-text text-uppercase">About us</h1>
              <div class="Victorian">
                <h5 class="text-center">
                  Victorian Bangladeshi Community Foundation (VBCF) is
                  established in 2006 with the motto of "Bringing Community
                  Together".{" "}
                </h5>
              </div>
              <div class="container">
                <div class="btnn">
                  <div class="moreBtn">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h1 class="card-title">VBCF social media</h1>
                <img src={cardimage} class="card_image" alt="" />
                <a href="http://">
                  Day -2 Bangladesh High Commission Consulate Camp In Melbourne.
                  We introduced Justice of the Peace J...
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={image2} class="card_image" alt="" />
                <a href="http://">
                  Bangladesh high commission consulate camp going on. We VBCF
                  team is working for the community. Tomor...
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={image3} class="card_image" alt="" />
                <a href="http://">
                  Community Hub Consultation Session ( Friday 24th Jun 2022).
                  Video : Rimon Chakraborty. Technical Su...
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card large-card">
              <div class="card-body">
                <h1 class="card-title">VBCF event calendar</h1>
                <h3 class="Upcoming_event">Upcoming events</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="what_we2">
        <h1 className="text-uppercase">What we do</h1>
      </div>
      <div class="container py-3">
        <div class="row gy-4 justify-content-start">
          <div class="col-sm-3">
            <div className="hossceNa">
              <img className="img-fluid w-80" src={what_we1} alt="" />
              <div class="py-3">
                <span className="font-weight-bold">
                  Victorian Bangladeshi Cultural Society
                </span>
              </div>
              <div class="more-btn">
                <div className="moreBtn">More</div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="hossceNa">
              <img className="img-fluid w-80" src={what_we2} alt="" />
              <div class="py-3">
                <span className="font-weight-bold">
                  Victorian Bangladeshi Cultural Society
                </span>
              </div>
              <div class="more-btn">
                <div className="moreBtn">More</div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="hossceNa">
              <img className="img-fluid w-80" src={what_we3} alt="" />
              <div class="py-3">
                <span className="font-weight-bold">
                  Victorian Bangladeshi Cultural Society
                </span>
              </div>
              <div class="more-btn">
                <div className="moreBtn">More</div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="hossceNa">
              <img className="img-fluid w-80" src={what_we1} alt="" />
              <div class="py-3">
                <span className="font-weight-bold">
                  Victorian Bangladeshi Cultural Society
                </span>
              </div>
              <div class="more-btn">
                <div className="moreBtn">More</div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="hossceNa">
              <img className="img-fluid w-80" src={what_we1} alt="" />
              <div class="py-3">
                <span className="font-weight-bold">
                  Victorian Bangladeshi Cultural Society
                </span>
              </div>
              <div class="more-btn">
                <div className="moreBtn">More</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="what_we2">
        <h1 className="text-uppercase">VBCF programs</h1>
      </div>

      <div class="container py-3">
        <div class="row">
          <div class="col-md-6">
            <div className="main-div">
              <img className="img-fluid w-100" src={backgroundImage1} alt="" />
              <div class="backdrop">
                <h4 style={{ textAlign: "center" }}>
                  <a style={{ color: "white" }} href="">
                    {" "}
                    Facebook Session on Centrelink and Govt. Financial Support
                    package during coronavirus situation
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="main-div">
              <img className="img-fluid w-100" src={backgroundImage2} alt="" />
              <div class="backdrop">
                <h4 style={{ textAlign: "center" }}>
                  <a style={{ color: "white" }} href="">
                    {" "}
                    Live Facebook Session on Finance and banking support during
                    coronavirus situation
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="main-div">
              <img className="img-fluid w-100" src={backgroundImage3} alt="" />
              <div class="backdrop">
                <h4 style={{ textAlign: "center" }}>
                  <a style={{ color: "white" }} href="">
                    {" "}
                    Live Facebook Session on Current coronavirus situation
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="main-div">
              <img className="img-fluid w-100" src={backgroundImage4} alt="" />
              <div class="backdrop">
                <h4 style={{ textAlign: "center" }}>
                  <a style={{ color: "white" }} href="">
                    {" "}
                    WRBS KID EID Anandamela
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="main-div">
              <img className="img-fluid w-100" src={backgroundImage5} alt="" />
              <div class="backdrop">
                <h4 style={{ textAlign: "center" }}>
                  <a style={{ color: "white" }} href="">
                    IMLD 2020
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="main-div">
              <img className="img-fluid w-100" src={backgroundImage6} alt="" />
              <div class="backdrop">
                <h4 style={{ textAlign: "center" }}>
                  <a style={{ color: "white" }} href="">
                    Australia Day Parade 2020
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mediaQuary7">
        <div class="photo-gallary">
          <h2>VBCF PHOTO GALLERY</h2>
        </div>

        {/* <!-- Trigger/Open The Modal --> */}
        <div class="container py-3">
          <div class="row gy-4">
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model1);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model1} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model2);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model2} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model3);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model3} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model4);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model4} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model5);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model5} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model6);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model6} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model7);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model7} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model8);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model8} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model9);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model9} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model10);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model10} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model11);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model11} alt="" />
              </div>
            </div>
            <div class="col-md-3">
              <div
                className="gallery-image"
                onClick={() => {
                  setshowModalImage(model12);
                }}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img class="img-fluid w-100" src={model12} alt="" />
              </div>
            </div>
          </div>
          {/* <div id="myModal" class={`modal ${showModal ? "show_modal" : ""}`}>
            <div class="modal-content">
              <span onClick={() => setshowModal(false)} class="close">
                &times;
              </span>
              <img style={{ height: "700px" }} src={modalImage} alt="" />
            </div>
          </div> */}

          <div
            id="imageModal"
            class={`modal fade 
            `}
            tabindex="-1"
            role="dialog"
            aria-labelledby="imageModalModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="imageModalModalLabel">
                    Gallery Image
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    style={{ height: "650px" }}
                    className="img-fluid w-100"
                    src={modalImage}
                    alt=""
                  />
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="video-channel">
        <h2>VBCF VIDEO CHANNEL </h2>
      </div>
      <div class="container py-3">
        <div class="row gy-5">
          {videos.length &&
            videos.map((video) => (
              <div class="col-sm-4">
                <div
                  onClick={() => {
                    setshowModalVideo(video.url);
                    setModalVideoTitle(video.title);
                    // setshowModalV(true);
                  }}
                  class="myVideoBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <div className="videoOverlay"></div>
                  <iframe
                    class="ifram"
                    src={video.url}
                    title={video.title}
                    allowfullscreen
                  ></iframe>
                </div>
                <span class="ANANDAMELA">{video.title}</span>
              </div>
            ))}

          <div
            id="videoModal"
            class={`modal fade 
            `}
            tabindex="-1"
            role="dialog"
            aria-labelledby="videoModalModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="videoModalModalLabel">
                    {modalVideoTitle}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    onClick={() => setshowModalVideo("")}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <iframe
                    // width={1268}
                    // height={713}
                    class="iframVideo"
                    src={modalVideo}
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="mediaQuary9">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="address">
                <div class="row">
                  <div class="col-md-4">
                    <div class="hard">
                      <i className="fa fa-map-marker"></i>
                      <h5 class="card-title">Address</h5>
                      <p>
                        5th Floor, Quantum Emerald Point, 1/B Gareeb-e-Nawaz
                        Ave, Dhaka 1230 | (EIIN-27893)
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hard">
                      <i className="fa fa-phone"></i>
                      <h5 class="card-title">Phone Number</h5>
                      <p> 09678221191</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hard">
                      <i className="fa fa-envelope"></i>
                      <h5 class="card-title">Email Address</h5>
                      <p>cs.netizen@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
