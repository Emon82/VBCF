import React from "react";
import { Link } from "react-router-dom";
import backgroundImage6 from "../Image/backgroundImage6.jpg";
import model1 from "../Image/model1.jpg";
import model2 from "../Image/model2.jpg";
import model3 from "../Image/model3.jpg";
import what_we1 from "../Image/what_we1.jpg";
import "./WhatWeDo.css";
export default function WhatWeDo() {
  return (
    <>
      <div className="container">
        <img
          style={{ height: "500px" }}
          className="img-fluid w-100"
          src={backgroundImage6}
          alt=""
        />
        <h2 className="title bd">Western Region Bangla School - WRBS</h2>
        <div className="row gy-3">
          <div className="col-md-3">
            <div className="costomizeImg">
              <img
                // style={{ width: "63%" }}
                className="img-fluid w-100"
                src={what_we1}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="aboutWe">
              <h2 style={{ padding: "10px" }}>About</h2>
              <h4 style={{ padding: "10px" }}>
                Western Region Bengla School (WRBS) is providing an Ethnic
                Language and Cultural Service, known as the Bengali Language
                School.
              </h4>
              <p style={{ padding: "10px" }}>
                Western Region Bengla School (WRBS) is an ethnic language school
                targeting the second generation Australian Bangladeshis living
                in the north- western suburbs of Melbourne. It is a non-profit
                organization [established in 2006 and incorporated in 2007 under
                the Associations Incorporation Act 1981 Section 7] in Hoppers
                Crossing, Melbourne with the goal of promoting Bangla literacy
                and numeracy and passing on the rich Bangladeshi cultural
                heritage to our next generation Australian-Bangladeshi
                population.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="title bd">WRBS Enrollment Form</h2>

        <div className="row">
          <div className="col-md-6">
            <div class="form-button-card text-center p-3">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              <h3>WRBS-Student Enrolment Form</h3>
              <button type="button" className="btn btn-success">
                Apply Online
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div class="form-button-card text-center p-3">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              <h3>WRBS-Student Enrolment Form</h3>
              <button type="button" className="btn btn-success">
                PDF Version
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="title bd">WRBS Feedback Form</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div class="form-button-card text-center p-3">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              <h3>WRBS-Online Feedback Form</h3>
              <Link
                to={"/feedback/1"}
                type="button"
                className="btn btn-success"
              >
                Submit Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <h2 className="title bd">WRBS Policies</h2>

        <div className="row policy-cards">
          <div className="col-md-3">
            <div class="policy-card">
              <i class="fa fa-lightbulb-o large-icon" aria-hidden="true"></i>
              <h4 className="ImgTitle"> WRBS Child Safety Policy</h4>
              <p>This child safe policy is publicly available in our website</p>
              <a href="#">
                Read More <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div class="policy-card">
              <i class="fa fa-balance-scale large-icon"></i>
              <h4 className="ImgTitle">WRBS Code of Conduct</h4>
              <p>
                This Child Safe Code of Conduct is publicly available in our
                website
              </p>
              <a href="#">
                Read More <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div class="policy-card">
              <i class="fa fa-gavel large-icon" aria-hidden="true"></i>

              <h4 className="ImgTitle">WRBS Anti Bullying Policy</h4>
              <p>
                Western Region Bengali School Inc. is committed to provide a
                safe and{" "}
              </p>
              <a href="#">
                Read More <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div class="policy-card">
              <i class="fa fa-child large-icon"></i>
              <h4 className="ImgTitle">
                WRBS Child Safety factsheet for Parent
              </h4>
              <p>How to keep children safe</p>
              <a href="#">
                Read More <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <h2 className="title bd">Meet The Team</h2>
        <div className="circleCard py-4">
          <div className="row">
            <div className="col-4">
              <img className="circle" src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h4 className="teamTitle">Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h4 className="teamTitle">Asst. Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model3} alt="" />

              <p>Kazi Iqbal Hossain </p>
              <h4 className="teamTitle"></h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-3">
        <div className="circleCard py-4">
          <div className="row">
            <div className="col-4">
              <img className="circle" src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h4 className="teamTitle">Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h4 className="teamTitle">Asst. Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model3} alt="" />

              <p>Kazi Iqbal Hossain </p>
              <h4 className="teamTitle"></h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="circleCard py-4">
          <div className="row">
            <div className="col-4">
              <img className="circle" src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h4 className="teamTitle"> Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h4 className="teamTitle">Asst. Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model3} alt="" />

              <p> Kazi Iqbal Hossain </p>
              <h4 className="teamTitle"></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-3">
        <div className="circleCard py-4">
          <div className="row">
            <div className="col-4">
              <img className="circle" src={model1} alt="" />
              <p>Morshed Kamal</p>
              <h4 className="teamTitle"> Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model2} alt="" />

              <p>Tamanna Rumin</p>
              <h4 className="teamTitle">Asst. Principal</h4>
            </div>
            <div className="col-4">
              <img className="circle" src={model3} alt="" />

              <p> Kazi Iqbal Hossain </p>
              <h4 className="teamTitle"></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
