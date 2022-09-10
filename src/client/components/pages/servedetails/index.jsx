import React, { Component } from "react";
import {Link} from "react-router-dom";

import Slider from "react-slick";
import Service3 from "../../../assets/images/services/service-03.jpg";
import Service4 from "../../../assets/images/services/service-04.jpg";
import Service5 from "../../../assets/images/services/service-05.jpg";
import Service6 from "../../../assets/images/services/service-06.jpg";
import Service7 from "../../../assets/images/services/service-07.jpg";
import Service8 from "../../../assets/images/services/service-08.jpg";
import Service9 from "../../../assets/images/services/service-09.jpg";
import provider1 from "../../../assets/images/provider/provider-01.jpg";
import IMG03 from "../../../assets/images/customer/user-03.jpg";
import IMG04 from "../../../assets/images/customer/user-04.jpg";
import IMG05 from "../../../assets/images/customer/user-05.jpg";
import IMG06 from "../../../assets/images/customer/user-06.jpg";
import IMG07 from "../../../assets/images/customer/user-07.jpg";
import IMG08 from "../../../assets/images/customer/user-08.jpg";
import IMG09 from "../../../assets/images/customer/user-09.jpg";



class ServicesDetail extends Component {


    constructor(props) {
		super(props)
		this.state = {
			type: 1
		}
	}
	getservicestatus(type) {
		this.setState({type: type})
	}
  componentDidMount() {
	  
	$('.fav-btn .fav-icon').on('click', function () {
		$(this).toggleClass('favourite');
  	});
	  
	if($('.popular-slider').length > 0 ){
		$('.popular-slider').owlCarousel({
			items:3,
			margin:30,
			dots:true,
			loop: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1170:{
					items:2
				}
			}
		});
	}
  }

  render() {
	const {type} = this.state;
	const settings2 = {
        dots: true,
        slidesToShow: 1,
		slidesToScroll: 1,
	   
        // variableWidth: true,
        arrows:false,

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                  
                }
            }
        ]
      };
	const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows:false,

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                  
                }
            }
        ]
      };
    return (
	
	      <>
            <div className="content">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="service-view">
							<div className="service-header">
								<div className="d-flex justify-content-between align-items-center">
									<h1>Car Repair Services</h1>
									<div className="fav-btn fav-btn-big">
										<a href="#" className="fav-icon with-border">
											<i className="fas fa-heart"></i>
										</a>
									</div>
								</div>
								<address className="service-location"><i className="fas fa-location-arrow"></i> Hanover, Maryland</address>
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<span className="d-inline-block average-rating">(5)</span>
								</div>
								<div className="service-cate">
									<a href="/pages/search">Automobile</a>
								</div>
							</div>
							<div className="service-images service-carousel ">
							<Slider {...settings}>
								<div>
									<img src={Service3}  className="img-fluid" />
								</div>
								<div>
									<img src={Service3}  className="img-fluid" />
								</div>
								<div>
									<img src={Service3}  className="img-fluid" />
								</div>
							</Slider>
						
							
							</div>
							<div className="service-details">
								<ul className="nav nav-pills service-tabs" id="pills-tab" role="tablist">
									<li className="nav-item">
										<a className={type == 1 ? `nav-link active`: `nav-link`} onClick={() => this.getservicestatus(1)} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
									</li>
									<li className="nav-item">
										<a className={type == 2 ? `nav-link active`: `nav-link`} onClick={() => this.getservicestatus(2)} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Services Offered</a>
									</li>
									<li className="nav-item">
										<a className={type == 3 ? `nav-link active`: `nav-link`} onClick={() => this.getservicestatus(3)}id="pills-book-tab" data-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-book" aria-selected="false">Reviews</a>
									</li>
								</ul>
								<div className="tab-content">
									{ type == 1 &&
										<div className="tab-pane fade show active"  id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
											<div className="card service-description">
												<div className="card-body">
													<h5 className="card-title">Service Details</h5>
													<p className="mb-0">Car wash is a facility used to clean the exterior and, in some cases, the interior of motor vehicles. Car washes can be self-serve, fully automated, or full-service with attendants who wash the vehicle.</p>
												</div>
											</div>
										</div>
									}

									{ type == 2 &&
										<div className="tab-pane fade  show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">Services Offered</h5>
												<div className="service-offer">
													<ul className="list-bullet">
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									}
									
									{ type == 3 &&
										<div className="tab-pane fade show active" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
											<div className="card review-box">
												<div className="card-body">
													<div className="review-list">
														<div className="review-img">
															<img className="rounded-circle" src={IMG03} />
														</div>
														<div className="review-info">
															<h5>Jeffrey Akridge</h5>
															<div className="review-date">August 06, 2020 20:07 pm</div>
															<p className="mb-0">Good Work</p>
														</div>
														<div className="review-count">
															<div className="rating">
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>
																<i className="fas fa-star filled"></i>	
																<span className="d-inline-block average-rating">(5.0)</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
  									}
								</div>
							</div>
						</div>
						<h4 className="card-title">Related Services</h4>
						<div className="service-carousel">
						<div className="popular-slider owl-carousel owl-theme">
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/service-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service3} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG03}  />
									</a>
									<span className="service-price">$2</span>
									</div>
									<div className="cate-list">
									<Link className="bg-yellow" to="/pages/service-details">Electrical</Link>
									</div>
								</div>
							</div>
							<div className="service-content">
								<h3 className="title">
									<Link to="/pages/service-details">Electric Panel Repairing Service</Link>
								</h3>
								<div className="rating">
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star" />
									<span className="d-inline-block average-rating">(4.5)</span>
								</div>
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx30</span></span>
									<span className="col ser-location"><span>Kalispell, Montana</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
							</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/service-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service4} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG04} />
									</a>
									<span className="service-price">$14</span>
									</div>
									<div className="cate-list">
										<Link className="bg-yellow" to="/pages/service-details">Car Wash</Link>
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
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx74</span></span>
									<span className="col ser-location"><span>Electra, Texas</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
									<Link to="/pages/service-details">
										<img className="img-fluid serv-img" alt="Service Image" src={Service5} />
									</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG05} />
									</a>
									<span className="service-price">$100</span>
									</div>
									<div className="cate-list">
									<Link className="bg-yellow" to="/pages/service-details">Cleaning</Link>
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
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx91</span></span>
									<span className="col ser-location"><span>Sylvester, Georgia</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/service-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service6} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG06} />
									</a>
									<span className="service-price">$100</span>
									</div>
									<div className="cate-list">
									<Link className="bg-yellow" to="/pages/service-details">Computer</Link>
									</div>
								</div>
								</div>
								<div className="service-content">
								<h3 className="title">
									<Link to="/pages/service-details">Computer &amp; Server AMC Service</Link>
								</h3>
								<div className="rating">
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<span className="d-inline-block average-rating">(0)</span>
								</div>
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx92</span></span>
									<span className="col ser-location"><span>Los Angeles, California</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/service-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service7} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG07} />
									</a>
									<span className="service-price">$5</span>
									</div>
									<div className="cate-list">
									<Link className="bg-yellow" to="/pages/service-details">Interior</Link>
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
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx28</span></span>
									<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/sevice-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service8} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG08} />
									</a>
									<span className="service-price">$100</span>
									</div>
									<div className="cate-list">
										<Link className="bg-yellow" to="/pages/sevice-details">Construction</Link>
									</div>
								</div>
								</div>
								<div className="service-content">
								<h3 className="title">
									<Link to="/pages/sevice-details">Building Construction Services</Link>
								</h3>
								<div className="rating">
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star" />
									<span className="d-inline-block average-rating">(4)</span>
								</div>
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx62</span></span>
									<span className="col ser-location"><span>Burr Ridge, Illinois</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/sevice-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service9} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG09}/>
									</a>
									<span className="service-price">$500</span>
									</div>
									<div className="cate-list">
									<Link className="bg-yellow" to="/pages/service-details">Painting</Link>
									</div>
								</div>
								</div>
								<div className="service-content">
								<h3 className="title">
									<Link to="/pages/sevice-details">Commercial Painting Services</Link>
								</h3>
								<div className="rating">
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<span className="d-inline-block average-rating">(3)</span>
								</div>
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx75</span></span>	
									<span className="col ser-location"><span>Huntsville, Alabama</span>  <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							<div className="service-widget">
								<div className="service-img">
								<Link to="/pages/sevice-details">
									<img className="img-fluid serv-img" alt="Service Image" src={Service3} />
								</Link>
								<div className="item-info">
									<div className="service-user">
									<a href="#">
										<img src={IMG03} />
									</a>
									<span className="service-price">$150</span>
									</div>
									<div className="cate-list">
									<Link className="bg-yellow" to="/pages/service-details">Plumbing</Link>
									</div>
								</div>
								</div>
								<div className="service-content">
								<h3 className="title">
									<Link to="/pages/service-details">Plumbing Services</Link>
								</h3>
								<div className="rating">
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star" />
									<i className="fas fa-star" />
									<span className="d-inline-block average-rating">(3)</span>
								</div>
								<div className="user-info">
									<div className="row">
									<span className="col-auto ser-contact"><i className="fas fa-phone mr-1" /> <span>xxxxxxxx13</span></span>
									<span className="col ser-location"><span>Richmond, Virginia</span> <i className="fas fa-map-marker-alt" /></span>
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 theiaStickySidebar">
						<div className="sidebar-widget widget">
							<div className="service-amount">
								<span>$150</span>
							</div>
							<div className="service-book">
								<Link to="/book-service" className="btn btn-primary"> Book Service </Link>
							</div>
						</div>
						<div className="card provider-widget clearfix">
							<div className="card-body">
								<h5 className="card-title">Service Provider</h5>
								<div className="about-author">
									<div className="about-provider-img">
										<div className="provider-img-wrap">
											<a href="#">
												<img className="img-fluid rounded-circle" src={provider1} />
											</a>
										</div>
									</div>
									<div className="provider-details">
										<a href="#" className="ser-provider-name">Thomas Herzberg</a>
										<p className="last-seen"><i className="fas fa-circle online"></i> Online</p>
										<p className="text-muted mb-1">Member Since Apr 2020</p>
									</div>
								</div>
								<hr />
								<div className="provider-info">
									<p className="mb-1"><i className="far fa-envelope"></i> <a href="#">thomasherzberg@example.com</a></p>
									<p className="mb-0"><i className="fas fa-phone-alt"></i> xxxxxxxx33</p>
								</div>
							</div>
						</div>
						<div className="card available-widget">
							<div className="card-body">
								<h5 className="card-title">Service Availability</h5>
								<ul>
									<li><span>Monday</span>9:30 AM - 7:00 PM</li>
									<li><span>Tuesday</span>9:30 AM - 7:00 PM</li>
									<li><span>Wednesday</span>9:30 AM - 7:00 PM</li>
									<li><span>Thursday</span>9:30 AM - 7:00 PM</li>
									<li><span>Friday</span>9:30 AM - 7:00 PM</li>
									<li><span>Saturday</span>9:30 AM - 7:00 PM</li>
									<li><span>Sunday</span>9:30 AM - 7:00 PM</li>
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