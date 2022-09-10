import React, { Component } from "react";
import HomeBanner from "./homebannar";
import Categories from "./category";
import Popular from "./popular";
import Workflow from "./work";


  class Home extends Component {
    render() {
      return (
        <div>
          <div className="main-wrapper">
            <HomeBanner />
            <Categories />
            <Popular />
            <Workflow />
          </div>
        </div>
      );
    }
  }
  export default Home;
