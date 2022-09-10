import React, { Component } from "react";
import {Link} from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="breadcrumb-title">
                  <h2>Contact Us</h2>
                </div>
              </div>
              <div className="col-auto float-right ml-auto breadcrumb-menu">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="contact-us">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="contact-queries">
                    <h4 className="mb-4">Drop your Queries</h4>
                    <div className="row">
                      <div className="form-group col-xl-6">
                        <label className="mr-sm-2">First Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group col-xl-6">
                        <label className="mr-sm-2">Last Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group col-xl-6">
                        <label className="mr-sm-2">Email</label>
                        <input className="form-control" type="email" />
                      </div>
                      <div className="form-group col-xl-6">
                        <label className="mr-sm-2">Mobile Number</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group col-xl-12">
                        <label className="mr-sm-2">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                      </div>
                      <div className="col-xl-12 mt-4">
                        <button
                          className="btn btn-primary btn-lg pl-5 pr-5"
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="contact-details">
                    <div className="contact-info">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="contact-data">
                        <h4>Address</h4>
                        <p>
                          367 Hillcrest Lane, Irvine, California, United States
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="contact-info">
                      <i className="fas fa-phone-alt"></i>
                      <div className="contact-data">
                        <h4>Phone</h4>
                        <p>+21 256 259 8796</p>
                        <p>+21 895 158 6545</p>
                      </div>
                    </div>
                    <hr />
                    <div className="contact-info">
                      <i className="fab fa-skype"></i>
                      <div className="contact-data">
                        <h4>Skype</h4>
                        <p>truelysell</p>
                      </div>
                    </div>
                    <hr />
                    <div className="contact-info">
                      <i className="far fa-envelope"></i>
                      <div className="contact-data">
                        <h4>Email</h4>
                        <p>truelysell@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="map-grid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.68136328788!2d76.82714556974858!3d11.012014523817232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1596472179383!5m2!1sen!2sin"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="contact-map"
          ></iframe>
        </div>
      </>
    );
  }
}
export default Contact;
