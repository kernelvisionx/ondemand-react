import React, { Component } from "react";
import {Link} from "react-router-dom";

class HomeBanner extends Component {
  render() {
    return (
        <section className="hero-section">
        <div className="layer">
            <div className="home-banner"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-search">
                            <h3>World's Largest <span>Marketplace</span></h3>
                            <p>Search From 150 Awesome Verified Ads!</p>
                            <div className="search-box">
                                <form action="/template/pages/search"> 
                                    <div className="search-input line">
                                        <i className="fas fa-tv bficon"></i>
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="What are you looking for?" />
                                        </div>
                                    </div>
                                    <div className="search-input">
                                        <i className="fas fa-location-arrow bficon"></i>
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Your Location" /> 
                                            <a className="current-loc-icon current_location" href="#">
                                                <i className="fas fa-crosshairs"></i></a>
                                        </div>
                                    </div>
                                    <div className="search-btn">
                                        <button className="btn search_service" type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className="search-cat">
                                <i className="fas fa-circle"></i>
                                <span>Popular Searches</span>
                                <Link to="/pages/search">Electrical  Works</Link>
                                <Link to="/pages/search">Cleaning</Link>
                                <Link to="/pages/search">AC Repair</Link>
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
export default HomeBanner;