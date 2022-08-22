import React, { useEffect, useState } from 'react';
import ControlledCarousel from '../Carousel';
import backgroundImage1 from '../Image/backgroundImage1.jpg';
import backgroundImage2 from '../Image/backgroundImage2.jpg';
import backgroundImage3 from '../Image/backgroundImage3.jpg';
import backgroundImage4 from '../Image/backgroundImage4.jpg';
import backgroundImage5 from '../Image/backgroundImage5.jpg';
import backgroundImage6 from '../Image/backgroundImage6.jpg';
import cardimage from '../Image/cardImage.jpg';
import image from '../Image/cover.jpg';
import image3 from '../Image/imag3.jpg';
import image2 from '../Image/image2.jpg';
import model1 from '../Image/model1.jpg';
import model10 from '../Image/model10.jpg';
import model11 from '../Image/model11.jpg';
import model12 from '../Image/model12.jpg';
import model2 from '../Image/model2.jpg';
import model3 from '../Image/model3.jpg';
import model4 from '../Image/model4.jpg';
import model5 from '../Image/model5.jpg';
import model6 from '../Image/model6.jpg';
import model7 from '../Image/model7.jpg';
import model8 from '../Image/model8.jpg';
import model9 from '../Image/model9.jpg';
import what_we1 from '../Image/what_we1.jpg';
import what_we2 from '../Image/what_we2.jpg';
import what_we3 from '../Image/what_we3.jpg';
import './home.css';

const Home = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalImage, setshowModalImage] = useState("");
  const [showModalV, setshowModalV] = useState(false);
  const [modalVideo, setshowModalVideo] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.147:8000/api/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (

    <div>

      <section className='cover'>
        <div className="container">
          <ControlledCarousel im={image} />
        </div>
      </section>
      <section className='mediaQuary2'>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="about">
                <h1 class="About-text">About us</h1>
                <div class="Victorian">
                  <h5 class="text-center">Victorian Bangladeshi Community Foundation (VBCF) is<br /> established in 2006 with
                    the
                    motto of " Bringing <br /> Community Together". </h5>
                </div>
                <div class="container">
                  <div class="btnn">
                    <button type="button " class="btn btn-secondary ">More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section   className='mediaQuary3'>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-title">VBCF social media</h1>
                  <img src={cardimage} class="card_image" alt="" />
                  <a href="http://">Day -2 Bangladesh High Commission Consulate Camp In Melbourne. We introduced Justice of
                    the Peace J...</a>
                  <img src={image2} class="card_image" alt="" />
                  <a href="http://">Bangladesh high commission consulate camp going on. We VBCF team is working for the
                    community. Tomor...</a>
                  <img src={image3} class="card_image" alt="" />
                  <a href="http://">Community Hub Consultation Session ( Friday 24th Jun 2022). Video : Rimon Chakraborty.
                    Technical Su...</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-title">VBCF event calendar</h1>
                  <h3 class="Upcoming_event">Upcoming events</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='mediaQuary4'>
        <div class="what_we2">
          <h1>What we do</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-3 hossceNa">
              <img src={what_we1} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
            </div>
            <div class="col-sm-3 hossceNa">
              <img src={what_we2} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
            </div>
            <div class="col-sm-3 hossceNa">
              <img src={what_we3} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
            </div>
            <div class="col-sm-3 hossceNa ">
              <img src={what_we1} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
            </div>
            <div class="col-sm-3 hossceNa">
              <img src={what_we1} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
              
            </div>
            <div class="col-sm-3 hossceNa">
              <img src={what_we2} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
            </div>
            <div class="col-sm-3 hossceNa">
              <img src={what_we1} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              
              </div>
            </div>
            <div class="col-sm-3 hossceNa">
              <img src={what_we3} alt="" />
              <div class="">
                <span>Victorian Bangladeshi Cultural Society</span>
              </div>
              <div class="more-btn">
                <button type="button" class="btn btn-secondary" style={{ width: "50% ;" }}>More</button>
              </div>
             
            </div>
          </div>
        </div>
      </section>


      
      <section className='mediaQuary5'>
        <div class="what_we2">
          <h1>VBCF programs</h1>
        </div>
      </section>
      <section className='mediaQuary6'>
        <div class="back_clor">
          <div class="container">
            <div class="row" style={{ textAalign: "-webkit-center;" }}>
              <div class="col-6 main-div">
                
                  <img src={backgroundImage1} alt="" />
                  <div class="backdrop">
                    <h4 style={{ textAlign: "center" }}>
                      <a style={{ color: "white" }} href=""> Facebook Session on Centrelink and Govt. Financial Support package
                        during coronavirus situation</a>
                    </h4>
                </div>
              </div>
              <div class="col-6 main-div">
                
                  <img src={backgroundImage2} alt="" />
                  <div class="backdrop">
                    <h4 style={{ textAlign: "center" }}>
                      <a style={{ color: "white" }} href=""> Live Facebook Session on Finance and banking support during
                        coronavirus situation</a>
                    </h4>
                  
                </div>
              </div>
              <div class="col-6 main-div">
               
                  <img src={backgroundImage3} alt="" />
                  <div class="backdrop">
                    <h4 style={{ textAlign: "center" }}>
                      <a style={{ color: "white" }} href=""> Live Facebook Session on Current coronavirus situation</a>
                    </h4>
                 
                </div>
              </div>
              <div class="col-6 main-div">
                
                  <img src={backgroundImage4} alt="" />
                  <div class="backdrop">
                    <h4 style={{ textAlign: "center" }}>
                      <a style={{ color: "white" }} href=""> WRBS KID EID Anandamela</a>
                    </h4>
                  </div>
                
              </div>
              <div class="col-6 main-div">
                  <img src={backgroundImage5} alt="" />
                  <div class="backdrop">
                    <h4 style={{ textAlign: "center" }}>
                      <a style={{ color: "white" }} href="">
                        IMLD 2020</a>
                    </h4>
                 
                </div>
              </div>
              <div class="col-6 main-div">
                
                  <img src={backgroundImage6} alt="" />
                  <div class="backdrop">
                    <h4 style={{ textAlign: "center" }}>
                      <a style={{ color: "white" }} href="">
                        Australia Day Parade 2020</a>
                    </h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mediaQuary7'>
        <div class="photo-gallary">
          <h2>VBCF PHOTO GALLERY</h2>
        </div>

        {/* <!-- Trigger/Open The Modal --> */}
        <div class="container">
          <div class="row">
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model1); setshowModal(true) }} ><img class="Image-container" src={model1} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model2); setshowModal(true) }} ><img class="Image-container" src={model2} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn myBtn">
              <button onClick={() => { setshowModalImage(model3); setshowModal(true) }} ><img class="Image-container" src={model3} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model4); setshowModal(true) }} ><img class="Image-container" src={model4} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model5); setshowModal(true) }} ><img class="Image-container" src={model5} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model6); setshowModal(true) }} ><img class="Image-container" src={model6} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model7); setshowModal(true) }} ><img class="Image-container" src={model7} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model8); setshowModal(true) }} ><img class="Image-container" src={model8} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model9); setshowModal(true) }} ><img class="Image-container" src={model9} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model10); setshowModal(true) }} ><img class="Image-container" src={model10} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model11); setshowModal(true) }} ><img class="Image-container" src={model11} alt="" /></button>
            </div>
            <div class="col-md-3 myBtn">
              <button onClick={() => { setshowModalImage(model12); setshowModal(true) }} ><img class="Image-container" src={model12} alt="" /></button>
            </div>
          </div>
          <div id="myModal" class={`modal ${showModal ? "show_modal" : ""}`}>
            <div class="modal-content">
              <span onClick={() => setshowModal(false)} class="close">&times;</span>
              <img style={{ height: "700px" }} src={modalImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='mediaQuary8'>
        <div class="video-channel">
          <h2>VBCF VIDEO CHANNEL </h2>
        </div>
        <div class="container">
          <div class="row">
            {videos.length && videos.map(video => (
              <div class="col-sm-4">
                <button onClick={() => { setshowModalVideo(video.url); setshowModalV(true) }} class="myVideoBtn">
                  <div class="layer"></div>
                  <iframe class="ifram" src={video.url} title={video.title}
                    allowfullscreen></iframe>
                </button>
                <span class="ANANDAMELA">{video.title}</span>
              </div>
            ))}

            <div id="myid" class={`modal ${showModalV ? "show_modal" : ""}`}>
              <div class="modal-content">
                <span onClick={() => { setshowModalV(false); setshowModalVideo(""); }} id="vclose" class="close">&times;</span>
                <iframe height={713} width={1268} class="ifram" src={modalVideo} title="YouTube video" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mediaQuary9'>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="address">
                <div class="row">
                  <div class="col-md-4">
                    <div class="hard">
                      <i className='fa fa-map-marker'></i>
                      <h5 class="card-title">Address</h5>
                      <p>5th Floor, Quantum Emerald Point, 1/B Gareeb-e-Nawaz Ave, Dhaka 1230 | (EIIN-27893)</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hard">
                    <i className='fa fa-phone'></i>
                      <h5 class="card-title">Phone Number</h5>
                      <p> 09678221191</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hard">
                    <i className='fa fa-envelope'></i>
                      <h5 class="card-title">Email Address</h5>
                      <p>cs.netizen@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
