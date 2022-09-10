import React, { Component } from "react";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";

import service01 from "../../../assets/images/services/service-01.jpg";
import service02 from "../../../assets/images/services/service-02.jpg";
import service03 from "../../../assets/images/services/service-03.jpg";
import service04 from "../../../assets/images/services/service-04.jpg";
import service05 from "../../../assets/images/services/service-05.jpg";
import service06 from "../../../assets/images/services/service-06.jpg";
import service07 from "../../../assets/images/services/service-07.jpg";
import service08 from "../../../assets/images/services/service-08.jpg";
import service09 from "../../../assets/images/services/service-09.jpg";

import user01 from "../../../assets/images/customer/user-01.jpg";
import user09 from "../../../assets/images/customer/user-09.jpg";

import { Table } from "antd";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }
  componentDidMount() {
    $('.fav-btn .fav-icon').on('click', function () {
        $(this).toggleClass('favourite');
  });
  }
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Service",
        dataIndex: "patientName",
        render: (text, record) => (
          <>
            <a href="#">
              <img  src={record.image} className="pro-avatar" />
                {record.service}
            </a>
          </>
        ),
      },
      {
        title: "Customer",
        dataIndex: "patientName",
        render: (text, record) => (
          <>
              <img src={record.customerimage} className="avatar-xs rounded-circle" />
              {record.customer}
          </>
        ),
      },
      {
        title: "Date",
        dataIndex: "status",
        render: (text, record) => (
          <>
            {record.date}
          </>
        ),
      },
      {
        title: "Amount",
        render: (text, record) => (
         <strong>
              {record.amount}
         </strong>
        ),
      },
      {
        title: "status",
        render: (text, record) => (
         
           <span className={`${record.status === "Payment Completed" ? "badge bg-success-light" : "badge bg-danger-light"}`}>
              {record.status}
         </span>
        ),
      },
    ];

    return (
      <>
        <div className="content">
  <div className="container">
    <div className="row">
        <Sidebar />
      <div className="col-xl-9 col-md-8">
        <h4 className="widget-title">Favourites</h4>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service01}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$25</span>
                  </div>
                  <div className="cate-list">
                    <Link className="bg-yellow" to="/pages/service-details">
                      Glass
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="title">
                  <a href="/pages/service-details">
                    Toughened Glass Fitting Services
                  </a>
                </h3>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <span className="d-inline-block average-rating">(4.3)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service03}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$45</span>
                  </div>
                  <div className="cate-list">
                    <Link className="bg-yellow" to="/pages/service-details">
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
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(4.5)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service02}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$50</span>
                  </div>
                  <div className="cate-list">
                    {" "}
                    <Link className="bg-yellow" to="/pages/service-details">
                      Automobile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="title">
                  <a href="/pages/service-details">Car Repair Services</a>
                </h3>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <span className="d-inline-block average-rating">(5)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service04}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$14</span>
                  </div>
                  <div className="cate-list">
                    <Link className="bg-yellow" to="/pages/service-details">
                      Car Wash
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="title">
                  <Link to="/pages/service-details">Steam Car Wash</Link>
                </h3>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(0)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service05}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$100</span>
                  </div>
                  <div className="cate-list">
                    <Link className="bg-yellow" to="/pages/service-details">
                      Cleaning
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="title">
                  <Link to="/pages/service-details">House Cleaning Services</Link>
                </h3>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(0)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service06}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$80</span>
                  </div>
                  <div className="cate-list">
                    {" "}
                    <Link className="bg-yellow" to="/pages/service-details">
                      Computer
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="title">
                  <Link to="/pages/service-details">
                    Computer &amp; Server AMC Service
                  </Link>
                </h3>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(0)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service07}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$5</span>
                  </div>
                  <div className="cate-list">
                    <Link className="bg-yellow" to="/pages/service-details">
                      Interior
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="title">
                  <Link to="/pages/service-details">Interior Designing</Link>
                </h3>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(4)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service08}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user01} />
                    </a>
                    <span className="service-price">$75</span>
                  </div>
                  <div className="cate-list">
                    <Link className="bg-yellow" to="/pages/service-details">
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
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(4)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="service-widget flex-fill">
              <div className="service-img">
                <Link to="/pages/service-details">
                  <img
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src={service09}
                  />
                </Link>
                <div className="fav-btn">
                  <a href="#" className="fav-icon">
                    <i className="fas fa-heart" />
                  </a>
                </div>
                <div className="item-info">
                  <div className="service-user">
                    <a href="#">
                      <img src={user09} />
                    </a>{" "}
                    <span className="service-price">$500</span>
                  </div>
                  <div className="cate-list">
                    {" "}
                    <Link className="bg-yellow" to="/pages/service-details">
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
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">(3)</span>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination Links */}
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
                  <i className="fas fa-angle-right" />
                </a>
              </li>
            </ul>
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
export default Favourites;
