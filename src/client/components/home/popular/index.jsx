import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Link} from "react-router-dom";
import Slider from "react-slick";

import service01 from "../../../assets/images/services/service-01.jpg";
import service02 from "../../../assets/images/services/service-02.jpg";
import service03 from "../../../assets/images/services/service-03.jpg";
import service04 from "../../../assets/images/services/service-04.jpg";
import service05 from "../../../assets/images/services/service-05.jpg";
import service06 from "../../../assets/images/services/service-06.jpg";
import service07 from "../../../assets/images/services/service-07.jpg";
import service08 from "../../../assets/images/services/service-08.jpg";
import service09 from "../../../assets/images/services/service-09.jpg";
import service10 from "../../../assets/images/services/service-10.jpg";

import user01 from "../../../assets/images/customer/user-01.jpg";
import user02 from "../../../assets/images/customer/user-02.jpg";
import user03 from "../../../assets/images/customer/user-03.jpg";
import user04 from "../../../assets/images/customer/user-04.jpg";
import user05 from "../../../assets/images/customer/user-05.jpg";
import user06 from "../../../assets/images/customer/user-06.jpg";
import user07 from "../../../assets/images/customer/user-07.jpg";
import user08 from "../../../assets/images/customer/user-08.jpg";
import user09 from "../../../assets/images/customer/user-09.jpg";
import user10 from "../../../assets/images/customer/user-10.jpg";


class Popular extends Component {

  componentDidMount() {
	$('.fav-btn .fav-icon').on('click', function () {
		$(this).toggleClass('favourite');
  });
  
	if($('.service-slider').length > 0 ){
		$('.service-slider').owlCarousel({
			items: 3,
	        margin: 30,
	        dots : true,
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
					items: 3
				}
			}
		});	
	}
  }

  render() {
	const settings2 = {
        dots: true,
        slidesToShow: 2,
		slidesToScroll: 2,
	   
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
        slidesToShow: 3,
        slidesToScroll: 3,
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
                    slidesToShow: 2,
                    slidesToScroll:2,
                    infinite: true,
                  
                }
            }
        ]
      };

    return (
		<section className="popular-services">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-md-6">
								<div className="heading">
									<h2>Most Popular Services</h2>
									<span>Explore the greates our services. You won’t be disappointed</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="viewall">
									<h4><Link to="/categories">View All <i className="fas fa-angle-right"></i></Link></h4>
									<span>Most Popular</span>
								</div>
							</div>
						</div>
						<div className="service-carousel">
							<div className="service-slider owl-carousel owl-theme">
								<div className="service-widget">
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
										Cleaning
										</Link>
									</div>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
									<Link to="/pages/service-details">Toughened Glass Fitting Services</Link>
									</h3>
									<div className="rating">
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star" />
									<span className="d-inline-block average-rating">(4.3)</span>
									</div>
									<div className="user-info">
									<div className="row">
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" />
										<span>xxxxxxxx49</span>
										</span>
										<span className="col ser-location">
										<span>Wayne, New Jersey</span>{" "}
										<i className="fas fa-map-marker-alt" />
										</span>
									</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
								<div className="service-img">
									<a href="service-details.html">
									<img
										className="img-fluid serv-img"
										alt="Service Image"
										src={service02}
									/>
									</a>
									<div className="fav-btn">
									<a href="#" className="fav-icon">
										<i className="fas fa-heart" />
									</a>
									</div>
									<div className="item-info">
									<div className="service-user">
										<a href="#">
										<img src={user02} />
										</a>
										<span className="service-price">$50</span>
									</div>
									<div className="cate-list">
										<Link className="bg-yellow" to="/pages/service-details">
										Automobile
										</Link>
									</div>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
									<Link to="/pages/service-details">Car Repair Services</Link>
									</h3>
									<div className="rating">
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<i className="fas fa-star filled" />
									<span className="d-inline-block average-rating">(5)</span>
									</div>
									<div className="user-info">
									<div className="row">
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" /> <span>xxxxxxxx85</span>
										</span>
										<span className="col ser-location">
										<span>Hanover, Maryland</span>{" "}
										<i className="fas fa-map-marker-alt" />
										</span>
									</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
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
										<img src={user03} />
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
											<span className="col-auto ser-contact">
											<i className="fas fa-phone mr-1" /> <span>xxxxxxxx30</span>
											</span>
											<span className="col ser-location">
											<span>Kalispell, Montana</span>{" "}
											<i className="fas fa-map-marker-alt" />
											</span>
										</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
								<div className="service-img">
									<a href="service-details.html">
									<img
										className="img-fluid serv-img"
										alt="Service Image"
										src={service04}
									/>
									</a>
									<div className="fav-btn">
									<a href="#" className="fav-icon">
										<i className="fas fa-heart" />
									</a>
									</div>
									<div className="item-info">
									<div className="service-user">
										<a href="#">
										<img src={user04} />
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
									<div className="user-info">
										<div className="row">
											<span className="col-auto ser-contact">
											<i className="fas fa-phone mr-1" /> <span>xxxxxxxx74</span>
											</span>
											<span className="col ser-location">
											<span>Electra, Texas</span>{" "}
											<i className="fas fa-map-marker-alt" />
											</span>
										</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
								<div className="service-img">
									<a href="service-details.html">
									<img
										className="img-fluid serv-img"
										alt="Service Image"
										src={service05}
									/>
									</a>
									<div className="fav-btn">
									<a href="#" className="fav-icon">
										<i className="fas fa-heart" />
									</a>
									</div>
									<div className="item-info">
									<div className="service-user">
										<a href="#">
										<img src={user05} />
										</a>
										<span className="service-price">$100</span>
									</div>
									<div className="cate-list">
										<a className="bg-yellow" href="service-details.html">
										Cleaning
										</a>
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
											<span className="col-auto ser-contact">
											<i className="fas fa-phone mr-1" /> <span>xxxxxxxx91</span>
											</span>
											<span className="col ser-location">
											<span>Sylvester, Georgia</span>{" "}
											<i className="fas fa-map-marker-alt" />
											</span>
										</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
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
										<img src={user06} />
										</a>
										<span className="service-price">$80</span>
									</div>
									<div className="cate-list">
										<a className="bg-yellow" href="service-details.html">
										Computer
										</a>
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
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" /> <span>xxxxxxxx92</span>
										</span>
										<span className="col ser-location">
										<span>Los Angeles, California</span>{" "}
										<i className="fas fa-map-marker-alt" />
										</span>
									</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
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
										<img src={user07} />
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
									<div className="user-info">
									<div className="row">
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" /> <span>xxxxxxxx28</span>
										</span>
										<span className="col ser-location">
										<span>Hanover, Maryland</span>{" "}
										<i className="fas fa-map-marker-alt" />
										</span>
									</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
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
										<img src={user08} />
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
									<Link to="/pages/service-details">Building Construction Services</Link>
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
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" /> <span>xxxxxxxx62</span>
										</span>
										<span className="col ser-location">
										<span>Burr Ridge, Illinois</span>{" "}
										<i className="fas fa-map-marker-alt" />
										</span>
									</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
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
										</a>
										<span className="service-price">$500</span>
									</div>
									<div className="cate-list">
										<Link className="bg-yellow" to="/pages/service-details">
										Painting
										</Link>
									</div>
									</div>
								</div>
								<div className="service-content">
									<h3 className="title">
									<Link to="/pages/service-details">Commercial Painting Services</Link>
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
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" /> <span>xxxxxxxx75</span>
										</span>
										<span className="col ser-location">
										<span>Huntsville, Alabama</span>{" "}
										<i className="fas fa-map-marker-alt" />
										</span>
									</div>
									</div>
								</div>
								</div>
								<div className="service-widget">
								<div className="service-img">
									<Link to="/pages/service-details">
									<img
										className="img-fluid serv-img"
										alt="Service Image"
										src={service10}
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
										<img src={user10} />
										</a>
										<span className="service-price">$150</span>
									</div>
									<div className="cate-list">
										<Link className="bg-yellow" to="/pages/service-details">
										Plumbing
										</Link>
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
										<span className="col-auto ser-contact">
										<i className="fas fa-phone mr-1" /> <span>xxxxxxxx13</span>
										</span>
										<span className="col ser-location">
										<span>Richmond, Virginia</span>{" "}
										<i className="fas fa-map-marker-alt" />
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
		</section>
    );
  }
}
export default Popular;