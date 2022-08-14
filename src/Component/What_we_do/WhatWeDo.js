import React from 'react';
import backgroundImage6 from '../Image/backgroundImage6.jpg';
import model1 from '../Image/model1.jpg';
import model2 from '../Image/model2.jpg';
import model3 from '../Image/model3.jpg';
import model4 from '../Image/model4.jpg';
import what_we1 from '../Image/what_we1.jpg';
import './WhatWeDo.css';
export default function WhatWeDo() {

  return (
    <div>
      <div className="container">
        <img style={{ width: '100%', height: '500px' }} src={backgroundImage6} alt="" />
        <h2 className="title">
          Western Region Bangla School - WRBS</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="costomizeImg">
              <img style={{ width: '63%' }} src={what_we1} alt="" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="aboutWe">
              <h2 style={{ padding: "10px" }}>About</h2>
              <h4 style={{ padding: "10px" }}>Western Region Bengla School (WRBS) is providing an Ethnic Language and Cultural Service, known as the Bengali Language School.</h4>
              <p style={{ padding: "10px" }}>Western Region Bengla School (WRBS) is an ethnic language school targeting the second generation Australian Bangladeshis living in the north- western suburbs of Melbourne. It is a non-profit organization [established in 2006 and incorporated in 2007 under the Associations Incorporation Act 1981 Section 7] in Hoppers Crossing, Melbourne with the goal of promoting Bangla literacy and numeracy and passing on the rich Bangladeshi cultural heritage to our next generation Australian-Bangladeshi population. </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title">
        WRBS Enrolment Form</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6"><button style={{ width: "90%", margin: "10px" }} type="button" class="btn btn-secondary">WRBS-Student Enrolment Form (Apply Online)</button>
          </div>
          <div className="col-md-6"><button style={{ width: "90%", margin: "10px" }} type="button" class="btn btn-secondary">WRBS-Student Enrolment Form (PDF Version)</button>
          </div>
        </div>
        <h2 className="title">
          WRBS Feedback Form</h2>
        <div className="btnCostomize">
          <button style={{ margin: "10px" }} type="button" class="btn btn-secondary">WRBS Online Feedback Form</button>
        </div>
        <h2 className="title">
          WRBS Policies</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3" style={{ backgroundColor: "rgb(104, 176, 77)" }}><img className='cardImage' src={model1} alt="" />
            <h5 className="ImgTitle"> WRBS Child Safety Policy</h5>
            <p>This child safe policy is publicly available in our website</p>
            <a href="#" class="card-link">Read More</a>
          </div>
          <div className="col-3"style={{ backgroundColor: "rgb(218, 85, 85)" }} ><img className='cardImage' src={model2} alt="" />
            <h5 className="ImgTitle">WRBS Code of Conduct</h5>
            <p>This Child Safe Code of Conduct is publicly available in our website</p>
            <a href="#" class="card-link">Read More</a>
          </div>
          <div className="col-3" style={{ backgroundColor: "rgb(104, 176, 77)" }}><img className='cardImage' src={model3} alt="" />
            <h5 className="ImgTitle">WRBS Anti Bullying Policy</h5>
            <p>Western Region Bengali School Inc. is committed to provide a safe and </p>
            <a href="#" class="card-link">Read More</a>
          </div>
          <div className="col-3" style={{ backgroundColor: "rgb(218, 85, 85)" }}><img className='cardImage' src={model4} alt="" />
            <h5 className="ImgTitle">WRBS Child Safety factsheet for Parent</h5>
            <p>How to keep children safe</p>
            <a href="#" class="card-link">Read More</a>
          </div>
        </div>



      </div>
      {/* // */}
      <div className="container">
        <h1 className='hunfun'>Meet The Team</h1>
        <div className="circleCard">
          <div className="row">
            <div className="col-4"><img className='circle' src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h5 className="ImgTitle"> Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h5 className="ImgTitle">Asst. Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model3} alt="" />

              <p> Kazi Iqbal Hossain </p>
              <h5 className="ImgTitle"></h5>
            </div>
          </div>

        </div>

      </div>
      <div className="container">
        <div className="circleCard">
          <div className="row">
            <div className="col-4"><img className='circle' src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h5 className="ImgTitle"> Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h5 className="ImgTitle">Asst. Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model3} alt="" />

              <p> Kazi Iqbal Hossain </p>
              <h5 className="ImgTitle"></h5>
            </div>
          </div>

        </div>

      </div>
      <div className="container">
        <div className="circleCard">
          <div className="row">
            <div className="col-4"><img className='circle' src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h5 className="ImgTitle"> Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h5 className="ImgTitle">Asst. Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model3} alt="" />

              <p> Kazi Iqbal Hossain </p>
              <h5 className="ImgTitle"></h5>
            </div>
          </div>

        </div>

      </div>
      <div className="container">
        <div className="circleCard">
          <div className="row">
            <div className="col-4"><img className='circle' src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h5 className="ImgTitle"> Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h5 className="ImgTitle">Asst. Principal</h5>
            </div>
            <div className="col-4" ><img className='circle' src={model3} alt="" />

              <p> Kazi Iqbal Hossain </p>
              <h5 className="ImgTitle"></h5>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
