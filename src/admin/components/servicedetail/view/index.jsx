import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG01 from "../../../assets/images/services/service-02.jpg";
import IMG02 from "../../../assets/images/services/service-02.jpg";
import IMG03 from "../../../assets/images/services/service-02.jpg";

import IMG04 from "../../../assets/images/provider/provider-01.jpg";
import Slider from "react-slick";

class ServicesDetail extends Component {
 

  render() {
    var settings = {
        dots: true,
        infinite: true,
        loop:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
      <>
        <SidebarNav />
        <div className="page-wrapper">
			<div className="content container-fluid">
				<div className="row">
					<div className="col-lg-8">
						<div className="card">
							<div className="card-body">
								<div className="service-header">
									<div className="service-inner">
										<h2>Car Repair Services</h2>
										<address className="service-location"><i className="fas fa-location-arrow"></i> Hanover, Maryland</address>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(4)</span>
										</div>
										<div className="service-cate">
											<a href={"#"}>Automobile</a>
										</div>
									</div>
									<div className="service-amount">
										<span>$150</span>
									</div>
								</div>
								<div className="service-description">
									<div className="service-images">
										
                                    <Slider {...settings}>
      <div>
       <img src={IMG01} />
      </div>
	 

   

                                            </Slider>
									</div>
									<h5 className="card-title">Service Details</h5>
									<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card provider-widget clearfix">
							<div className="card-body">
								<h5 className="card-title">Service Provider</h5>
								<div className="about-author">
									<div className="about-provider-img">
										<div className="provider-img-wrap">
											<a href={"#"}>
												<img className="img-fluid rounded-circle" alt="" src={IMG04} />
											</a>
										</div>
									</div>
									<div className="provider-details">
										<a href={"#"} className="ser-provider-name">Thomas Herzberg</a>
										<p className="last-seen"><i className="fas fa-circle online"></i> Online</p>
										<p className="text-muted mb-1">Member Since Apr 2020</p>
									</div>
								</div>
								<hr />
								<div className="provider-info">
									<p className="mb-1"><i className="far fa-envelope"></i>  <a href="#">thomasherzberg@example.com</a>
									</p>
									<p className="mb-0"><i className="fas fa-phone-alt"></i> xxxxxxxx50</p>
								</div>
							</div>
						</div>
						<div className="card available-widget">
							<div className="card-body">
								<h5 className="card-title">Service Availability</h5>
								<ul>
									<li><span>Monday</span>09:00 AM - 06:00 PM</li>
									<li><span>Tuesday</span>09:00 AM - 06:00 PM</li>
									<li><span>Wednesday</span>09:00 AM - 06:00 PM</li>
									<li><span>Thursday</span>09:00 AM - 06:00 PM</li>
									<li><span>Friday</span>09:00 AM - 06:00 PM</li>
									<li><span>Saturday</span>09:00 AM - 06:00 PM</li>
									<li><span>Sunday</span>09:00 AM - 06:00 PM</li>
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

export default ServicesDetail;
