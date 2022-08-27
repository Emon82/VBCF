import React from "react";
import "./index.css";

const Feedback = () => {
  return (
    <div>
      <div className="container">
        <div className="about-header-container text-center">
          <h2 className="about-title text-uppercase">
            Parents Feedback/Suggestion submission form
          </h2>
          <div className="row">
            <div className="container">
              <div className="row justify-content-center form-container">
                <div className="col-md-6">
                  <div className="container">
                    <form class="row g-3 text-left">
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">
                          Parent's First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">
                          Parent's Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">
                          Student's First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">
                          Student's Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">
                          Your child's grade/level
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputAddress" class="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputAddress2" class="form-label">
                          Address 2
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputCity" class="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="inputState" class="form-label">
                          State
                        </label>
                        <select id="inputState" class="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <label for="inputZip" class="form-label">
                          Zip
                        </label>
                        <input type="text" class="form-control" id="inputZip" />
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label class="form-check-label" for="gridCheck">
                            Check me out
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
