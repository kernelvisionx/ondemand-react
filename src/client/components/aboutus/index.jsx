import React, { Component } from "react";
import about from "../../assets/images/about.jpg";
import Icon1 from "../../assets/images/icon-1.png";
import Icon2 from "../../assets/images/icon-2.png";
import Icon3 from "../../assets/images/icon-3.png";
import {Link} from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
	      <>
        	<div className="breadcrumb-bar">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="breadcrumb-title">
							<h2>About Us</h2>
						</div>
					</div>
					<div className="col-auto float-right ml-auto breadcrumb-menu">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">About Us</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>

        <section className="about-us">
			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="about-blk-content">
								<h4>Experienced and Reliable</h4>
								<p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
								<p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
							</div>
						</div>
						<div className="col-6">
							<div className="about-blk-image">
								<img src={about} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

        <section className="call-us">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<span>Free Consultation</span>
						<h2>Ready to start your dream project?</h2>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Nunc placerat mi id nisi interdum mollis</p>
					</div>
					<div className="col-6 call-us-btn">
						<a href={"#"} className="btn btn-call-us">Request A Free Consultation</a>
					</div>
				</div>
			</div>
		</section>
        <section className="how-work">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading howitworks">
							<h2>Reasons You Should Call Us</h2>
							<span>Our Advantages</span>
						</div>
						<div className="howworksec">
							<div className="row">
								<div className="col-lg-4">
									<div className="howwork">
										<div className="iconround">
											<div className="steps">01</div>
											<img src={Icon1} alt="" />
										</div>
										<h3>Choose What To Do</h3>
										<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="howwork">
										<div className="iconround">
											<div className="steps">02</div>
											<img src={Icon2} alt="" />
										</div>
										<h3>Find What You Want</h3>
										<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="howwork">
										<div className="iconround">
											<div className="steps">03</div>
											<img src={Icon3} alt="" />
										</div>
										<h3>Amazing Places</h3>
										<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
          </>
    );
  }
}
export default AboutUs;