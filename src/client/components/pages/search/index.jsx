import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Service01 from "../../../assets/images/services/service-01.jpg";
import Service02 from "../../../assets/images/services/service-02.jpg";
import Service03 from "../../../assets/images/services/service-03.jpg";
import Service04 from "../../../assets/images/services/service-04.jpg";
import Service05 from "../../../assets/images/services/service-05.jpg";
import Service06 from "../../../assets/images/services/service-06.jpg";
import Service07 from "../../../assets/images/services/service-07.jpg";
import Service08 from "../../../assets/images/services/service-08.jpg";
import Service09 from "../../../assets/images/services/service-09.jpg";
import Service10 from "../../../assets/images/services/service-10.jpg";
import Service11 from "../../../assets/images/services/service-11.jpg";
import Service12 from "../../../assets/images/services/service-12.jpg";
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

import axios from "axios";
//export const productListURL = "https://ondemand-apps.herokuapp.com/service/service_provider";
export const productListURL = "http://localhost:5001/service/service_provider"; 


class Search extends Component {


	state = {
		loading: false,
		error: null,
		data: []
	};

	componentDidMount() {
		this.setState({ loading: true });

		$('.fav-btn .fav-icon').on('click', function () {
			$(this).toggleClass('favourite');
		});

		axios
			.get(productListURL)
			.then(res => {
				this.setState({ data: res.data, loading: false });
				console.log(data);
			})
			.catch(err => {
				this.setState({ error: err, loading: false });
			});

	}


	render() {
		const { data, error, loading } = this.state;
    return (
      <>
		<div className="breadcrumb-bar">
			<div className="container-fluid">
				<div className="row">
				<div className="col">
					<div className="breadcrumb-title">
					<h2>Find a Professional</h2>
					</div>
				</div>
				<div className="col-auto float-right ml-auto breadcrumb-menu">
					<nav aria-label="breadcrumb" className="page-breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
						<Link to="/home">Home</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">Find a Professional</li>
					</ol>
					</nav>
				</div>
				</div>
			</div>
		</div>
		{/* /Breadcrumb */}
       	<div className="content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 theiaStickySidebar">
						<div className="card filter-card">
							<div className="card-body">
								<h4 className="card-title mb-4">Search Filter</h4>
								<form id="search_form">
									<div className="filter-widget">
										<div className="filter-list">
											<h4 className="filter-title">Keyword</h4>
											<input type="text" className="form-control" placeholder="What are you looking for?" />
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Sort By</h4>
											<select className="form-control selectbox select">
												<option>Sort By</option>
												<option>Price Low to High</option>
												<option>Price High to Low</option>
												<option>Newest</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Categories</h4>
											<select className="form-control form-control selectbox select">
												<option>All Categories</option>
												<option>Computer</option>
												<option>Automobile</option>
												<option>Car Wash</option>
												<option>Cleaning</option>
												<option>Electrical</option>
												<option>Construction</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Location</h4>
											<input className="form-control" type="text" placeholder="Search Location" />
										</div>
									</div>
									<button className="btn btn-primary pl-5 pr-5 btn-block get_services" type="button">Search</button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="row align-items-center mb-4">
							<div className="col-md-6 col">
								<h4><span>118</span> Services 123</h4>
							</div>
							<div className="col-md-6 col-auto">
								<div className="view-icons">
									<a href="#" className="grid-view active"><i className="fas fa-th-large"></i></a>
								</div>
							</div>
						</div>
						<div>
								<div className="row">
									{data.map(item => {
										return (
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
											<img
												className="img-fluid serv-img"
												alt="Service Image"
												src={Service01}
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
															<Link to="/pages/service-details">{ item.service_name }</Link>
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
									</div>
										)
									})}
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service02}
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service03}
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service04}
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
											<img src={user04} />
											</a>
											<span className="service-price">$14</span>
										</div>
										<div className="cate-list">
											<Link className="bg-yellow" to="service-details">
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<a href="service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service05}
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<a href="service-details.html">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service06}
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
											<img src={user06} />
											</a>
											<span className="service-price">$80</span>
										</div>
										<div className="cate-list">
											<Link className="bg-yellow" to="/pages/service-details">
											Computer
											</Link>
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service07}
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service08}
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service09}
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
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service10}
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
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
									<div className="service-img">
										<Link to="/pages/service-details">
										<img
											className="img-fluid serv-img"
											alt="Service Image"
											src={Service11}
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
											<span className="service-price">$32</span>
										</div>
										<div className="cate-list">
											<Link className="bg-yellow" to="/pages/service-details">
											Carpentry
											</Link>
										</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
										<Link to="/pages/service-details">Wooden Carpentry Work</Link>
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
											<i className="fas fa-phone mr-1" /> <span>xxxxxxxx68</span>
											</span>
											<span className="col ser-location">
											<span>Columbus, Alabama</span>{" "}
											<i className="fas fa-map-marker-alt" />
											</span>
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
											src={Service12}
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
											<img src={user02} />
											</a>
											<span className="service-price">$54</span>
										</div>
										<div className="cate-list">
											<Link className="bg-yellow" to="/pages/service-details">
											Appliance
											</Link>
										</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
										<Link to="/pages/service-details">Air Conditioner Service</Link>
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
											<i className="fas fa-phone mr-1" /> <span>xxxxxxxx71</span>
											</span>
											<span className="col ser-location">
											<span>Vancouver, Washington</span>{" "}
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
					</div>
				</div>
			
      </>
    );
  }
}
export default Search;