import React, { Component } from "react";
import Sidebar from "../sidebar";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Modal } from "react-bootstrap";
import Service1 from "../../../assets/images/services/service-01.jpg";
import Service2 from "../../../assets/images/services/service-02.jpg";
import Service3 from "../../../assets/images/services/service-03.jpg";
import Service4 from "../../../assets/images/services/service-04.jpg";
import Service5 from "../../../assets/images/services/service-05.jpg";
import Service7 from "../../../assets/images/services/service-07.jpg";
import Service9 from "../../../assets/images/services/service-09.jpg";

import Provider01 from "../../../assets/images/provider/provider-01.jpg";
import Provider02 from "../../../assets/images/provider/provider-02.jpg";
import Provider03 from "../../../assets/images/provider/provider-03.jpg";
import Provider04 from "../../../assets/images/provider/provider-04.jpg";
import Provider05 from "../../../assets/images/provider/provider-05.jpg";
import Provider06 from "../../../assets/images/provider/provider-06.jpg";
import {Link} from "react-router-dom";

class MyServices extends Component {
  constructor() {
    super();
    this.state = {
      activeModal: null,
    };
  }

  openModal = (id) => {
    this.setState({ activeModal: id }, () => {});
  };
  handleCloseModal = () => {
    this.setState({ activeModal: false }, () => {});
  };

  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
                <h4 className="widget-title">My Services</h4>
                <Tabs defaultActiveKey="active" id="uncontrolled-tab-example">
                  <Tab eventKey="active" title="Active Services">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service1}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider01} alt="" />
                                </a>
                                <span className="service-price">$25</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Glass
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title text-truncate">
                              <Link to="/pages/service-details">
                                Toughened Glass Fitting Services
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <span className="d-inline-block average-rating">
                                (4.3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service2}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider02} alt="" />
                                </a>{" "}
                                <span className="service-price">$50</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Automobile
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Car Repair Services
                              </Link>
                            </h3>
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
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                      onClick={() =>
                                        this.handleShow("inactive")
                                      }
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service3}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider03} alt="" />
                                </a>
                                <span className="service-price">$45</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Electrical
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Electric Panel Repairing Service
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (4.5)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service4}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider04} alt="" />
                                </a>
                                <span className="service-price">$14</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Car Wash
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Steam Car Wash
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (0)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service5}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider05} alt="" />
                                </a>
                                <span className="service-price">$100</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Cleaning
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                House Cleaning Services
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (0)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service2}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider06} alt="" />
                                </a>{" "}
                                <span className="service-price">$80</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Computer
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Computer & Server AMC Service
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (0)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service7}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider02} alt="" />
                                </a>
                                <span className="service-price">$5</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Interior
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Interior Designing
                              </Link>
                            </h3>
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
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service2}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider01} alt="" />
                                </a>
                                <span className="service-price">$75</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Construction
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Building Construction Services
                              </Link>
                            </h3>
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
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service9}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img alt="" src={Provider02} />
                                </a>{" "}
                                <span className="service-price">$500</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Painting
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Commercial Painting Services
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pagination">
                        <ul>
                          <li className="active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">4</a>
                          </li>
                          <li className="arrow">
                            <a href="#">
                              <i className="fas fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Inactive" title="Inactive Services">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 inactive-service">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service9}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider02} alt="" />
                                </a>
                                <span className="service-price">$150</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Plumbing
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Plumbing Services
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="#"
                                      className="si-delete-inactive-service text-danger"
                                      data-id="149"
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="#"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 inactive-service">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service9}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img
                                    src={Provider01}
                                    alt=""
                                  />
                                </a>{" "}
                                <span className="service-price">$32</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Carpentry
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Wooden Carpentry Work
                              </Link>
                            </h3>
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
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="#"
                                      className="si-delete-inactive-service text-danger"
                                      data-id="120"
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="#"
                                      className="si-delete-active-service text-success"
                                      data-id="120"
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 inactive-service">
                        <div className="service-widget">
                          <div className="service-img">
                            <Link to="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service3}
                              />
                            </Link>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="#">
                                  <img src={Provider02} alt="" />
                                </a>
                                <span className="service-price">$54</span>
                              </div>
                              <div className="cate-list">
                                <Link
                                  className="bg-yellow"
                                  to="/pages/service-details"
                                >
                                  Appliance
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <Link to="/pages/service-details">
                                Air Conditioner Service
                              </Link>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="#"
                                      className="si-delete-inactive-service text-danger"
                                      data-id="107"
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="#"
                                      className="si-delete-active-service text-success"
                                      data-id="107"
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <Modal   show={this.state.activeModal === "inactive"}
            onHide={this.handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title><h5>Inactive Service?</h5></Modal.Title>
        </Modal.Header>
        <div className="modal-body">
						<p>Service is Booked and Inprogress..</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger si_accept_cancel" data-dismiss="modal">OK</button>
					</div>
      </Modal>
        </div>
      </>
    );
  }
}
export default MyServices;
