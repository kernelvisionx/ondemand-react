import React from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Categories from "./components/category";
import AddCategories from "./components/category/add";
import EditCategories from "./components/category/edit";
import SubCategories from "./components/subcategory";
import AddSubCategories from "./components/subcategory/add";
import EditSubCategories from "./components/editcategory";
import Services from "./components/servicedetail";
import ServicesDetail from "./components/servicedetail/view";
import ServiceProvider from "./components/serviceprovider";
import Payment from "./components/payment";
import Rating from "./components/rating";
import RatingType from "./components/ratingtype";
import EditSubscriptions from "./components/editsubscription";
import Subscriptions from "./components/subscription";
import AddSubscriptions from "./components/addsubscription";
import User from "./components/user";
import Settings from "./components/settings";
import Profile from "./components/profile";
import Booking from "./components/booking";
import Wallet from "./components/wallet"; 
import WalletHistory from "./components/wallet/history"; 
import EditRatingtype from "./components/ratingtype/editratingtype";
import AddRatingtype from "./components/ratingtype/addratingtype";

const AppUniversal = function (props) {
  return (
    <Router basename={`${config.publicPath}`}>
      <div className="main-wrapper">
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/category" exact component={Categories} />
          <Route path="/admin/add-categories" exact component={AddCategories} />
          <Route path="/admin/edit-categories" exact component={EditCategories} />
          <Route path="/admin/sub-categories" exact component={SubCategories} />
          <Route path="/admin/add-subcategories" exact component={AddSubCategories} />
          <Route path="/admin/edit-subcategories" exact component={EditSubCategories} />
          <Route path="/admin/services" exact component={Services} />
          <Route path="/admin/services-view" exact component={ServicesDetail} />
          <Route path="/admin/user" exact component={User} />
          <Route path="/admin/edit-subscriptions" exact component={EditSubscriptions} />
          <Route path="/admin/subscriptions" exact component={Subscriptions} />
          <Route path="/admin/settings" exact component={Settings} />
          <Route path="/admin/service-provider" exact component={ServiceProvider} />
          <Route path="/admin/wallet" exact component={Wallet} />
          <Route path="/admin/wallet-history" exact component={WalletHistory} />
          <Route path="/admin/add-subscriptions" exact component={AddSubscriptions}/>
          <Route path="/admin/rating" exact component={Rating}/>
          <Route path="/admin/ratingtype" exact component={RatingType}/>
          <Route path="/admin/edit-ratingtype" exact component={EditRatingtype}/>
          <Route path="/admin/add-ratingtype" exact component={AddRatingtype}/>
          <Route path="/admin/payment" exact component={Payment}/>
          <Route path="/admin/profile" exact component={Profile}/>
          <Route path="/admin/booking" exact component={Booking}/>
        </Switch>
      </div>
    </Router>
  );
};

export default AppUniversal;
