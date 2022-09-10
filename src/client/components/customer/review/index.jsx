import React, { Component } from "react";
import Sidebar from "../sidebar";

import Service01 from "../../../assets/images/services/service-12.jpg";
import Service02 from "../../../assets/images/services/service-11.jpg";
import Service03 from "../../../assets/images/services/service-10.jpg";

import User01 from "../../../assets/images/provider/provider-01.jpg";
import User02 from "../../../assets/images/provider/provider-02.jpg";
import User03 from "../../../assets/images/provider/provider-03.jpg";
import User04 from "../../../assets/images/provider/provider-04.jpg";

class Reviews extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className="col-xl-9 col-md-8">
                <h4 className="widget-title">Reviews</h4>
                <div className="card review-card mb-0">
                  <div className="card-body">
                    <div className="review-list">
                      <div className="review-img">
                        <img
                          className="rounded img-fluid"
                          src={Service01}
                          alt=""
                        />
                      </div>
                      <div className="review-info">
                        <h5>
                          <a href="#0">Building Construction Services</a>
                        </h5>
                        <div className="review-date">
                          July 11, 2020 11:38 am
                        </div>
                        <p className="mb-2">Good Work</p>
                        <div className="review-user">
                          <img
                            className="avatar-xs rounded-circle"
                            src={User01}
                            alt=""
                          />{" "}
                          Jeffrey Akridge
                        </div>
                      </div>
                      <div className="review-count">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="d-inline-block average-rating">
                            (5)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="review-list">
                      <div className="review-img">
                        <img
                          className="rounded img-fluid"
                          src={Service02}
                          alt=""
                        />
                      </div>
                      <div className="review-info">
                        <h5>
                          <a href="#0">Commercial Painting Services</a>
                        </h5>
                        <div className="review-date">
                          July 05, 2020 15:33 pm
                        </div>
                        <p className="mb-2">Best Work</p>
                        <div className="review-user">
                          <img
                            className="avatar-xs rounded-circle"
                            src={User02}
                            alt=""
                          />{" "}
                          Nancy Olson
                        </div>
                      </div>
                      <div className="review-count">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="d-inline-block average-rating">
                            (5)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="review-list">
                      <div className="review-img">
                        <img
                          className="rounded img-fluid"
                          src={Service02}
                          alt=""
                        />
                      </div>
                      <div className="review-info">
                        <h5>
                          <a href="#0">Plumbing Services</a>
                        </h5>
                        <div className="review-date">
                          June 29, 2020 05:04 am
                        </div>
                        <p className="mb-2">Excellent Service</p>
                        <div className="review-user">
                          <img
                            className="avatar-xs rounded-circle"
                            src={User03}
                            alt=""
                          />{" "}
                          Ramona Kingsley
                        </div>
                      </div>
                      <div className="review-count">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">
                            (4)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="review-list">
                      <div className="review-img">
                        <img
                          className="rounded img-fluid"
                          src={Service03}
                          alt=""
                        />
                      </div>
                      <div className="review-info">
                        <h5>
                          <a href="">Wooden Carpentry Work</a>
                        </h5>
                        <div className="review-date">
                          June 26, 2020 02:22 am
                        </div>
                        <p className="mb-2">Thanks</p>
                        <div className="review-user">
                          <img
                            className="avatar-xs rounded-circle"
                            src={User04}
                            alt=""
                          />{" "}
                          Ricardo Lung
                        </div>
                      </div>
                      <div className="review-count">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="d-inline-block average-rating">
                            (5)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Reviews;
