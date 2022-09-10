import React from "react";
import config from 'config';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./client/components/header.jsx";
import Footer from "./client/components/footer.jsx";
import Home from "./client/components/home";
import AboutUs from "./client/components/aboutus";
import Contact from "./client/components/contactus";

import Categories from "./client/components/category";
//provider
import ProviderDashboard from "./client/components/provider/dashboard";
import MyServices from "./client/components/provider/services";
import Booking from "./client/components/provider/booking";
import Settings from "./client/components/provider/settings";
import Reviews from "./client/components/provider/review";
import Payment from "./client/components/provider/payment";
import Availability from "./client/components/provider/availability";
import Subscription from "./client/components/provider/subscription";
import Wallet from "./client/components/provider/wallet";
//customer
import CustomerDashboard from "./client/components/customer/dashboard";
import CustomerBooking from "./client/components/customer/booking";
import Customersetting from "./client/components/customer/settings";
import CustomerWallet from "./client/components/customer/wallet";
import CustomerReview from "./client/components/customer/review";
import CustomerPayment from "./client/components/customer/payment";
import CustomerFavourites from "./client/components/customer/favourites";
//pages
import Chat from "./client/components/pages/chat";
import FAQ from "./client/components/pages/faq";
import Notification from "./client/components/pages/notification";
import EditService from "./client/components/pages/editservice";
import AddServices from "./client/components/pages/addservice";
import Services from "./client/components/pages/service";
import ServiceDetails from "./client/components/pages/servedetails";
import Search from "./client/components/pages/search";
import Terms from "./client/components/terms";
import Privacy from "./client/components/privacy";
import BookService from "./client/components/bookservices";

import AppUniversal from "./admin/app-universal";

const AppContainer = function (props) {
  if (props) {
    const url = props.location.pathname.split("/")[1];

    return (
      <Router basename={`${config.publicPath}`}>
        {
        url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AppUniversal} />
            </Switch>
          </div>
        ) :
        (
          <div>
            {/* { url === "homeslider1" && <Route render={(props)=> <TopHeader {...props}/>} />} */}
            <Route render={(props) => <Header {...props} />} />
            <Switch>
       
              <Route path="(/|/home)" exact component={Home} />	
              <Route path="/pages/about-us" exact component={AboutUs} />
              <Route path="/pages/contact-us" exact component={Contact} />
              <Route path="/pages/faq" exact component={FAQ} />
              <Route path="/categories" exact component={Categories} />
              {/* provider */}
              <Route path="/provider/provider-dashboard" exact component={ProviderDashboard} />
              <Route path="/provider/provider-services" exact component={MyServices} />
              <Route path="/provider/provider-booking" exact component={Booking} />

              <Route path="/provider/provider-settings" exact component={Settings} />
              <Route path="/provider/provider-reviews" exact component={Reviews} />
              <Route path="/provider/provider-payment" exact component={Payment} />
              <Route path="/provider/provider-availability" exact component={Availability} />

              <Route path="/provider/provider-subscription" exact component={Subscription} />
              <Route path="/provider/provider-wallet" exact component={Wallet} />

              <Route path="/customer/customer-dashboard" exact component={CustomerDashboard} />
              <Route path="/customer/customer-booking" react component={CustomerBooking} />
              <Route path="/customer/customer-setting" react component={Customersetting} />
              <Route path="/customer/customer-wallet" react component={CustomerWallet} />
              <Route path="/customer/customer-review" react component={CustomerReview} />
              <Route path="/customer/customer-payment" react component={CustomerPayment} />
              <Route path="/customer/customer-favourites" react component={CustomerFavourites} />
              {/* pages */}
              <Route path="/pages/search" react component={Search} />
              <Route path="/faq" react component={FAQ} />
              <Route path="/pages/notification" react component={Notification} />
              <Route path="/pages/edit-service" react component={EditService} />
              <Route path="/pages/add-service" react component={AddServices} />
              <Route path="/pages/chat" react component={Chat} />
              <Route path="/services" react component={Services} />
              <Route path="/pages/service-details" react component={ServiceDetails} />
              <Route path="/pages/terms" react component={Terms} />
              <Route path="/pages/privacy" react component={Privacy} />

              <Route path="/book-service" react component={BookService} />
            </Switch>
            <Route render={(props) => <Footer {...props} />} />
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
